const searchToggleEl = document.querySelector("#search-toggle");
const searchPanelEl = document.querySelector("#search-panel");
const searchInputEl = document.querySelector("#search-input");
const categoryFilterListEl = document.querySelector("#category-filter-list");
const clearFilterEl = document.querySelector("#clear-filter");
const cardGridEl = document.querySelector("#card-grid");
const emptyStateEl = document.querySelector("#empty-state");
const cardTemplate = document.querySelector("#card-template");

const allQuestions = Array.isArray(window.INTERVIEW_QA)
  ? [...window.INTERVIEW_QA].sort((a, b) => b.updatedAt.localeCompare(a.updatedAt))
  : [];
const categories = ["全部", ...new Set(allQuestions.map((item) => item.category))];

let searchKeyword = "";
let activeCategory = "全部";

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
    return [item.text, item.code, item.language].filter(Boolean).join(" ");
  }

  return "";
}

function formatAnswerParagraphs(answerList) {
  return answerList.map((item) => {
    if (typeof item === "string") {
      return `<p>${escapeHtml(item)}</p>`;
    }

    if (item && typeof item === "object" && item.type === "code") {
      const language = escapeHtml(item.language || "text");
      const code = escapeHtml(item.code || "");
      return `<pre class="answer-code"><code class="language-${language}">${code}</code></pre>`;
    }

    if (item && typeof item === "object" && item.type === "text") {
      return `<p>${escapeHtml(item.text || "")}</p>`;
    }

    return "";
  }).join("");
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

function matchesQuestion(item) {
  const keyword = normalizeText(searchKeyword);
  const categoryMatched = activeCategory === "全部" || item.category === activeCategory;

  if (!keyword) {
    return categoryMatched;
  }

  const haystack = normalizeText([
    item.id,
    item.updatedAt,
    item.category,
    item.question,
    item.tags.join(" "),
    item.answer.map(answerItemToText).join(" ")
  ].join(" "));

  return categoryMatched && haystack.includes(keyword);
}

function createMiniTag(text) {
  const span = document.createElement("span");
  span.className = "mini-tag";
  span.textContent = text;
  return span;
}

function setActiveCategory(category) {
  activeCategory = category;
  renderFilters();
  renderCards();
}

function renderFilters() {
  categoryFilterListEl.innerHTML = "";

  categories.forEach((category) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `filter-chip${category === activeCategory ? " is-active" : ""}`;
    button.textContent = category;
    button.addEventListener("click", () => setActiveCategory(category));
    categoryFilterListEl.appendChild(button);
  });

  clearFilterEl.classList.toggle("hidden", activeCategory === "全部");
}

function toggleCard(cardEl) {
  cardEl.classList.toggle("is-flipped");
}

function buildCategoryButton(buttonEl, category) {
  buttonEl.textContent = category;
  buttonEl.addEventListener("click", (event) => {
    event.stopPropagation();
    setActiveCategory(category);
  });
}

function buildCard(item) {
  const fragment = cardTemplate.content.cloneNode(true);
  const card = fragment.querySelector(".qa-card");
  const dates = fragment.querySelectorAll(".card-date");
  const categoriesEls = fragment.querySelectorAll(".card-category");
  const question = fragment.querySelector(".card-question");
  const answer = fragment.querySelector(".card-answer");
  const tagContainer = fragment.querySelector(".card-tags");
  const displayDate = formatDisplayDate(item.updatedAt);

  dates.forEach((node) => {
    node.textContent = displayDate;
    node.title = item.updatedAt;
  });
  categoriesEls.forEach((node) => buildCategoryButton(node, item.category));

  question.textContent = item.question;
  answer.innerHTML = formatAnswerParagraphs(item.answer);

  item.tags.forEach((tag) => {
    tagContainer.appendChild(createMiniTag(tag));
  });

  card.addEventListener("click", () => toggleCard(card));
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleCard(card);
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
clearFilterEl.addEventListener("click", () => setActiveCategory("全部"));

renderFilters();
renderCards();
