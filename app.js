const searchToggleEl = document.querySelector("#search-toggle");
const searchPanelEl = document.querySelector("#search-panel");
const searchInputEl = document.querySelector("#search-input");
const cardGridEl = document.querySelector("#card-grid");
const emptyStateEl = document.querySelector("#empty-state");
const cardTemplate = document.querySelector("#card-template");

const allQuestions = Array.isArray(window.INTERVIEW_QA)
  ? [...window.INTERVIEW_QA].sort((a, b) => b.updatedAt.localeCompare(a.updatedAt))
  : [];

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

  if (!keyword) {
    return true;
  }

  const haystack = normalizeText([
    item.id,
    item.updatedAt,
    item.category,
    item.question,
    item.tags.join(" "),
    item.answer.join(" ")
  ].join(" "));

  return haystack.includes(keyword);
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
  const dates = fragment.querySelectorAll(".card-date");
  const categories = fragment.querySelectorAll(".card-category");
  const question = fragment.querySelector(".card-question");
  const answer = fragment.querySelector(".card-answer");
  const tagContainer = fragment.querySelector(".card-tags");

  dates.forEach((node) => {
    node.textContent = item.updatedAt;
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

renderCards();
