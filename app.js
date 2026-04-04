const searchToggleEl = document.querySelector("#search-toggle");
const searchPanelEl = document.querySelector("#search-panel");
const searchInputEl = document.querySelector("#search-input");
const companyFilterListEl = document.querySelector("#company-filter-list");
const topicFilterListEl = document.querySelector("#topic-filter-list");
const clearFilterEl = document.querySelector("#clear-filter");
const cardGridEl = document.querySelector("#card-grid");
const emptyStateEl = document.querySelector("#empty-state");
const cardTemplate = document.querySelector("#card-template");
const detailModalEl = document.querySelector("#detail-modal");
const detailCloseEl = document.querySelector("#detail-close");
const detailDateEl = document.querySelector("#detail-date");
const detailCompanyEl = document.querySelector("#detail-company");
const detailTopicEl = document.querySelector("#detail-topic");
const detailTitleEl = document.querySelector("#detail-title");
const detailTagsEl = document.querySelector("#detail-tags");
const detailAnswerEl = document.querySelector("#detail-answer");

const allQuestions = Array.isArray(window.INTERVIEW_QA)
  ? [...window.INTERVIEW_QA].sort((a, b) => b.updatedAt.localeCompare(a.updatedAt))
  : [];
const companies = ["全部", ...new Set(allQuestions.map((item) => item.company || "字节跳动"))];

let searchKeyword = "";
let activeCompany = "全部";
let activeTopic = "全部";
let lastFocusedCard = null;

function normalizeText(value) {
  return String(value || "").trim().toLowerCase();
}

function escapeHtml(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function answerItemToText(item) {
  if (typeof item === "string") {
    return item;
  }

  if (item && typeof item === "object") {
    return [item.text, item.code, item.language, item.latex].filter(Boolean).join(" ");
  }

  return "";
}

function looksLikeFormula(text) {
  return /[=Σ∑π√∞×÷^_]|softmax|log|exp|floor|argmax|L1|FLOPs|Cin|Cout|Hout|Wout/i.test(text);
}

function renderFormulaBlock(text) {
  return `<div class="answer-formula"><code>${escapeHtml(text)}</code></div>`;
}

function formatAnswerParagraphs(answerList) {
  return answerList.map((item) => {
    if (typeof item === "string") {
      if (looksLikeFormula(item) && item.length <= 140) {
        return renderFormulaBlock(item);
      }
      return `<p>${escapeHtml(item)}</p>`;
    }

    if (item && typeof item === "object" && item.type === "code") {
      const language = escapeHtml(item.language || "text");
      const code = escapeHtml(item.code || "");
      return `<pre class="answer-code"><code class="language-${language}">${code}</code></pre>`;
    }

    if (item && typeof item === "object" && item.type === "formula") {
      return renderFormulaBlock(item.latex || item.text || "");
    }

    if (item && typeof item === "object" && item.type === "text") {
      return `<p>${escapeHtml(item.text || "")}</p>`;
    }

    return "";
  }).join("");
}

function buildPreview(answerList) {
  const text = answerList.map(answerItemToText).join(" ").replace(/\s+/g, " ").trim();
  if (!text) {
    return "这道题包含完整答案，点开后查看详情。";
  }
  return text.length > 92 ? `${text.slice(0, 92)}...` : text;
}

function formatDisplayDate(dateString) {
  const today = new Date();
  const currentDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const target = new Date(`${dateString}T00:00:00`);

  if (Number.isNaN(target.getTime())) {
    return dateString;
  }

  const targetDate = new Date(target.getFullYear(), target.getMonth(), target.getDate());
  const diffDays = Math.round((currentDate - targetDate) / 86400000);

  if (diffDays === 0) {
    return "今天";
  }

  if (diffDays === 1) {
    return "昨天";
  }

  const month = String(targetDate.getMonth() + 1).padStart(2, "0");
  const day = String(targetDate.getDate()).padStart(2, "0");
  return `${month}-${day}`;
}

function getTopicGroup(item) {
  return item.topicGroup || "基础知识点";
}

function getCompany(item) {
  return item.company || "字节跳动";
}

function getVisibleTopics() {
  const pool = activeCompany === "全部"
    ? allQuestions
    : allQuestions.filter((item) => getCompany(item) === activeCompany);

  return ["全部", ...new Set(pool.map((item) => getTopicGroup(item)))];
}

function matchesQuestion(item) {
  const keyword = normalizeText(searchKeyword);
  const companyMatched = activeCompany === "全部" || getCompany(item) === activeCompany;
  const topicMatched = activeTopic === "全部" || getTopicGroup(item) === activeTopic;

  if (!keyword) {
    return companyMatched && topicMatched;
  }

  const haystack = normalizeText([
    item.id,
    item.updatedAt,
    getCompany(item),
    getTopicGroup(item),
    item.category,
    item.question,
    item.tags.join(" "),
    item.answer.map(answerItemToText).join(" ")
  ].join(" "));

  return companyMatched && topicMatched && haystack.includes(keyword);
}

function createMiniTag(text) {
  const span = document.createElement("span");
  span.className = "mini-tag";
  span.textContent = text;
  return span;
}

function setActiveCompany(company) {
  activeCompany = company;
  activeTopic = "全部";
  renderCompanyFilters();
  renderTopicFilters();
  renderCards();
}

function setActiveTopic(topic) {
  activeTopic = topic;
  renderTopicFilters();
  renderCards();
}

function renderCompanyFilters() {
  companyFilterListEl.innerHTML = "";
  companies.forEach((company) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `filter-chip${company === activeCompany ? " is-active" : ""}`;
    button.textContent = company;
    button.addEventListener("click", () => setActiveCompany(company));
    companyFilterListEl.appendChild(button);
  });
}

function renderTopicFilters() {
  topicFilterListEl.innerHTML = "";
  getVisibleTopics().forEach((topic) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `filter-chip${topic === activeTopic ? " is-active" : ""}`;
    button.textContent = topic;
    button.addEventListener("click", () => setActiveTopic(topic));
    topicFilterListEl.appendChild(button);
  });

  clearFilterEl.classList.toggle("hidden", activeCompany === "全部" && activeTopic === "全部");
}

function openDetail(item, cardEl) {
  lastFocusedCard = cardEl || null;
  detailDateEl.textContent = formatDisplayDate(item.updatedAt);
  detailDateEl.title = item.updatedAt;
  detailCompanyEl.textContent = getCompany(item);
  detailTopicEl.textContent = getTopicGroup(item);
  detailTitleEl.textContent = item.question;
  detailAnswerEl.innerHTML = formatAnswerParagraphs(item.answer);
  detailTagsEl.innerHTML = "";
  item.tags.forEach((tag) => detailTagsEl.appendChild(createMiniTag(tag)));

  detailCompanyEl.onclick = () => {
    setActiveCompany(getCompany(item));
    closeDetail();
  };
  detailTopicEl.onclick = () => {
    setActiveCompany(getCompany(item));
    setActiveTopic(getTopicGroup(item));
    closeDetail();
  };

  detailModalEl.classList.remove("hidden");
  detailModalEl.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeDetail() {
  detailModalEl.classList.add("hidden");
  detailModalEl.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  if (lastFocusedCard) {
    lastFocusedCard.focus();
  }
}

function buildFilterButton(buttonEl, value, setter) {
  buttonEl.textContent = value;
  buttonEl.addEventListener("click", (event) => {
    event.stopPropagation();
    setter(value);
  });
}

function buildCard(item) {
  const fragment = cardTemplate.content.cloneNode(true);
  const card = fragment.querySelector(".qa-card");
  const date = fragment.querySelector(".card-date");
  const companyEl = fragment.querySelector(".card-company");
  const topicEl = fragment.querySelector(".card-topic");
  const question = fragment.querySelector(".card-question");
  const preview = fragment.querySelector(".card-preview");
  const tagContainer = fragment.querySelector(".card-tags");

  date.textContent = formatDisplayDate(item.updatedAt);
  date.title = item.updatedAt;
  buildFilterButton(companyEl, getCompany(item), setActiveCompany);
  buildFilterButton(topicEl, getTopicGroup(item), setActiveTopic);
  question.textContent = item.question;
  preview.textContent = buildPreview(item.answer);

  item.tags.slice(0, 4).forEach((tag) => {
    tagContainer.appendChild(createMiniTag(tag));
  });

  card.addEventListener("click", () => openDetail(item, card));
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openDetail(item, card);
    }
  });

  return fragment;
}

function renderCards() {
  const filtered = allQuestions.filter(matchesQuestion);
  cardGridEl.innerHTML = "";

  filtered.forEach((item) => {
    cardGridEl.appendChild(buildCard(item));
  });

  emptyStateEl.classList.toggle("hidden", filtered.length > 0);
}

function toggleSearch() {
  const willOpen = searchPanelEl.classList.contains("hidden");
  searchPanelEl.classList.toggle("hidden", !willOpen);
  searchToggleEl.setAttribute("aria-expanded", String(willOpen));

  if (willOpen) {
    searchInputEl.focus();
  }
}

searchToggleEl.addEventListener("click", toggleSearch);
searchInputEl.addEventListener("input", (event) => {
  searchKeyword = event.target.value;
  renderCards();
});
clearFilterEl.addEventListener("click", () => {
  activeCompany = "全部";
  activeTopic = "全部";
  renderCompanyFilters();
  renderTopicFilters();
  renderCards();
});
detailCloseEl.addEventListener("click", closeDetail);
detailModalEl.addEventListener("click", (event) => {
  if (event.target instanceof HTMLElement && event.target.dataset.close === "true") {
    closeDetail();
  }
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !detailModalEl.classList.contains("hidden")) {
    closeDetail();
  }
});

renderCompanyFilters();
renderTopicFilters();
renderCards();
