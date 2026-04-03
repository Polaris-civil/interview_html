const questionCountEl = document.querySelector("#question-count");
const resultCountEl = document.querySelector("#result-count");
const searchInputEl = document.querySelector("#search-input");
const tagListEl = document.querySelector("#tag-list");
const cardGridEl = document.querySelector("#card-grid");
const emptyStateEl = document.querySelector("#empty-state");
const cardTemplate = document.querySelector("#card-template");

const allQuestions = Array.isArray(window.INTERVIEW_QA) ? window.INTERVIEW_QA : [];
const allTags = [...new Set(allQuestions.flatMap((item) => [item.category, ...item.tags]))].sort((a, b) => a.localeCompare(b, "zh-CN"));

let activeTag = "全部";
let searchKeyword = "";

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

function formatAnswerParagraphs(answerList) {
  return answerList.map((line) => `<p>${escapeHtml(line)}</p>`).join("");
}

function matchesQuestion(item) {
  const keyword = normalizeText(searchKeyword);
  const inTag = activeTag === "全部" || item.tags.includes(activeTag) || item.category === activeTag;

  if (!keyword) {
    return inTag;
  }

  const haystack = normalizeText([
    item.id,
    item.category,
    item.question,
    item.tags.join(" "),
    item.answer.join(" ")
  ].join(" "));

  return inTag && haystack.includes(keyword);
}

function buildTagChip(label) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = `tag-chip${label === activeTag ? " active" : ""}`;
  button.textContent = label;
  button.addEventListener("click", () => {
    activeTag = label;
    render();
  });
  return button;
}

function renderTags() {
  tagListEl.innerHTML = "";
  ["全部", ...allTags].forEach((tag) => {
    tagListEl.appendChild(buildTagChip(tag));
  });
}

function createMiniTag(text) {
  const span = document.createElement("span");
  span.className = "mini-tag";
  span.textContent = text;
  return span;
}

function toggleCard(cardEl) {
  cardEl.classList.toggle("is-flipped");
}

function buildCard(item) {
  const fragment = cardTemplate.content.cloneNode(true);
  const card = fragment.querySelector(".qa-card");
  const ids = fragment.querySelectorAll(".card-id");
  const categories = fragment.querySelectorAll(".card-category");
  const question = fragment.querySelector(".card-question");
  const answer = fragment.querySelector(".card-answer");
  const tagContainer = fragment.querySelector(".card-tags");

  ids.forEach((node) => {
    node.textContent = item.id;
  });
  categories.forEach((node) => {
    node.textContent = item.category;
  });

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

  questionCountEl.textContent = String(allQuestions.length);
  resultCountEl.textContent = String(filtered.length);
  emptyStateEl.classList.toggle("hidden", filtered.length > 0);
}

function render() {
  renderTags();
  renderCards();
}

searchInputEl.addEventListener("input", (event) => {
  searchKeyword = event.target.value;
  renderCards();
});

render();
