const CONFIG = {
  // Later: paste a Google Apps Script web app URL here to collect live responses.
  submissionEndpoint: ""
};

const questions = [
  {
    id: "q1",
    section: "Act I: The Machine",
    type: "text",
    prompt: "A machine can show you one true thing about yourself that you do not currently see. Do you use it?"
  },
  {
    id: "q2",
    section: "Act I: The Machine",
    type: "choice",
    prompt: "The committee requires an immediate ruling. Board shorts or bowling shoes?",
    options: ["Board shorts", "Bowling shoes", "The committee is corrupt"]
  },
  {
    id: "q3",
    section: "Act I: The Machine",
    type: "slider",
    prompt: "How much truth can a normal Tuesday survive?",
    min: 0,
    max: 100,
    leftLabel: "None. Let Tuesday sleep.",
    rightLabel: "All of it. Wake the whole street."
  },
  {
    id: "q4",
    section: "Act II: Public Disaster",
    type: "text",
    prompt: "You get one hour where everyone believes you completely. What do you say?"
  },
  {
    id: "q5",
    section: "Act II: Public Disaster",
    type: "choice",
    prompt: "Your favorite team has the first pick in the draft. You have to make the call for the company picnic.",
    options: ["Pepsi", "Coke", "Water, ominously"]
  },
  {
    id: "q6",
    section: "Act II: Public Disaster",
    type: "text",
    prompt: "The results from the picnic beverage decision are disastrous. A press conference has been called. What do you turn to for guidance?"
  },
  {
    id: "q7",
    section: "Act III: Personal Doctrine",
    type: "ranking",
    prompt: "Rank these franchises from healthiest to most spiritually endangered.",
    options: ["Dune", "Star Wars", "Marvel", "DC", "Harry Potter", "Avatar"]
  },
  {
    id: "q8",
    section: "Act III: Personal Doctrine",
    type: "text",
    prompt: "What do you return to, even when it is not good for you?"
  },
  {
    id: "q9",
    section: "Act IV: Callback Chamber",
    type: "callback",
    prompt: "Earlier, you chose {q5}. That choice had consequences. What color is the sky in your imagination right now?",
    fallback: "a beverage"
  },
  {
    id: "q30",
    section: "Act V: The Three Bars",
    type: "bars",
    prompt: "Question 30 prototype: Adjust the three bars until the machine reveals what kind of impossible answer you have made.",
    labels: ["Truth", "Comfort", "Consequences"]
  }
];

const totalQuestions = 30;
const storageKey = "june-questionnaire-draft";
let state = loadState();

const intro = document.querySelector("#intro");
const quiz = document.querySelector("#quiz");
const result = document.querySelector("#result");
const respondentName = document.querySelector("#respondentName");
const startButton = document.querySelector("#startButton");
const backButton = document.querySelector("#backButton");
const nextButton = document.querySelector("#nextButton");
const downloadButton = document.querySelector("#downloadButton");
const restartButton = document.querySelector("#restartButton");
const questionTitle = document.querySelector("#questionTitle");
const questionCount = document.querySelector("#questionCount");
const sectionLabel = document.querySelector("#sectionLabel");
const progressFill = document.querySelector("#progressFill");
const questionBody = document.querySelector("#questionBody");
const resultCopy = document.querySelector("#resultCopy");
const submitStatus = document.querySelector("#submitStatus");

respondentName.value = state.name;

startButton.addEventListener("click", () => {
  state.name = respondentName.value.trim();
  saveState();
  intro.classList.add("hidden");
  result.classList.add("hidden");
  quiz.classList.remove("hidden");
  renderQuestion();
});

backButton.addEventListener("click", () => {
  if (state.index === 0) {
    quiz.classList.add("hidden");
    intro.classList.remove("hidden");
    return;
  }

  state.index -= 1;
  saveState();
  renderQuestion();
});

nextButton.addEventListener("click", async () => {
  if (state.index < questions.length - 1) {
    state.index += 1;
    saveState();
    renderQuestion();
    return;
  }

  await finishQuiz();
});

downloadButton.addEventListener("click", downloadAnswers);

restartButton.addEventListener("click", () => {
  state = { name: "", index: 0, answers: {} };
  saveState();
  respondentName.value = "";
  result.classList.add("hidden");
  intro.classList.remove("hidden");
});

function renderQuestion() {
  const question = questions[state.index];
  const visibleNumber = state.index === questions.length - 1 ? 30 : state.index + 1;

  sectionLabel.textContent = question.section;
  questionTitle.textContent = `Question ${visibleNumber}`;
  questionCount.textContent = `${visibleNumber} / ${totalQuestions}`;
  progressFill.style.width = `${(visibleNumber / totalQuestions) * 100}%`;
  nextButton.textContent = state.index === questions.length - 1 ? "Finish" : "Next";

  questionBody.innerHTML = "";
  questionBody.appendChild(createPrompt(question));

  if (question.type === "text" || question.type === "callback") renderTextQuestion(question);
  if (question.type === "choice") renderChoiceQuestion(question);
  if (question.type === "slider") renderSliderQuestion(question);
  if (question.type === "ranking") renderRankingQuestion(question);
  if (question.type === "bars") renderBarsQuestion(question);
}

function createPrompt(question) {
  const prompt = document.createElement("p");
  prompt.className = "prompt";
  prompt.textContent = hydratePrompt(question);
  return prompt;
}

function hydratePrompt(question) {
  return question.prompt.replace(/\{([^}]+)\}/g, (_, id) => {
    const answer = state.answers[id];
    if (typeof answer === "string" && answer.trim()) return answer;
    return question.fallback || "that";
  });
}

function renderTextQuestion(question) {
  const textarea = document.createElement("textarea");
  textarea.value = state.answers[question.id] || "";
  textarea.placeholder = "Answer however you like.";
  textarea.addEventListener("input", () => {
    state.answers[question.id] = textarea.value;
    saveState();
  });
  questionBody.appendChild(textarea);
  textarea.focus();
}

function renderChoiceQuestion(question) {
  const grid = document.createElement("div");
  grid.className = "choice-grid";

  question.options.forEach((option) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "choice-button";
    button.textContent = option;
    if (state.answers[question.id] === option) button.classList.add("selected");
    button.addEventListener("click", () => {
      state.answers[question.id] = option;
      saveState();
      renderQuestion();
    });
    grid.appendChild(button);
  });

  questionBody.appendChild(grid);
}

function renderSliderQuestion(question) {
  const helper = document.createElement("p");
  helper.className = "helper";
  helper.textContent = `${question.leftLabel} / ${question.rightLabel}`;
  const input = document.createElement("input");
  input.type = "range";
  input.min = question.min;
  input.max = question.max;
  input.value = state.answers[question.id] ?? 50;
  const value = document.createElement("p");
  value.className = "bar-reading";
  value.textContent = `Current reading: ${input.value}`;
  input.addEventListener("input", () => {
    state.answers[question.id] = input.value;
    value.textContent = `Current reading: ${input.value}`;
    saveState();
  });
  questionBody.append(helper, input, value);
}

function renderRankingQuestion(question) {
  const list = document.createElement("div");
  list.className = "rank-list";
  const items = state.answers[question.id] || [...question.options];

  items.forEach((item, index) => {
    const row = document.createElement("div");
    row.className = "rank-row";

    const number = document.createElement("span");
    number.className = "rank-number";
    number.textContent = index + 1;

    const label = document.createElement("strong");
    label.textContent = item;

    const controls = document.createElement("div");
    controls.className = "rank-controls";
    const up = rankButton("Up", () => moveRank(question.id, index, -1));
    const down = rankButton("Down", () => moveRank(question.id, index, 1));
    controls.append(up, down);
    row.append(number, label, controls);
    list.appendChild(row);
  });

  state.answers[question.id] = items;
  questionBody.appendChild(list);
}

function rankButton(label, action) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "secondary-button";
  button.textContent = label;
  button.addEventListener("click", action);
  return button;
}

function moveRank(questionId, index, direction) {
  const items = [...state.answers[questionId]];
  const target = index + direction;
  if (target < 0 || target >= items.length) return;
  [items[index], items[target]] = [items[target], items[index]];
  state.answers[questionId] = items;
  saveState();
  renderQuestion();
}

function renderBarsQuestion(question) {
  if (!state.answers[question.id]) {
    state.answers[question.id] = { Truth: 34, Comfort: 33, Consequences: 33 };
  }

  const lab = document.createElement("div");
  lab.className = "bar-lab";
  const visual = document.createElement("div");
  visual.className = "bar-visual";
  const reading = document.createElement("p");
  reading.className = "bar-reading";

  question.labels.forEach((label) => {
    const column = document.createElement("div");
    column.className = "bar-column";
    const fill = document.createElement("div");
    fill.className = "bar-fill";
    fill.style.height = `${state.answers[question.id][label]}%`;
    column.appendChild(fill);
    visual.appendChild(column);
  });

  question.labels.forEach((label) => {
    const row = document.createElement("div");
    row.className = "bar-row";
    const textLabel = document.createElement("label");
    textLabel.textContent = label;
    const input = document.createElement("input");
    input.type = "range";
    input.min = 0;
    input.max = 100;
    input.value = state.answers[question.id][label];
    const value = document.createElement("span");
    value.className = "bar-value";
    value.textContent = input.value;
    input.addEventListener("input", () => {
      updateBars(question.id, label, Number(input.value));
      renderQuestion();
    });
    row.append(textLabel, input, value);
    lab.appendChild(row);
  });

  reading.textContent = getBarReading(state.answers[question.id]);
  questionBody.append(visual, lab, reading);
}

function updateBars(questionId, changedLabel, nextValue) {
  const current = { ...state.answers[questionId], [changedLabel]: nextValue };
  const labels = Object.keys(current);
  const others = labels.filter((label) => label !== changedLabel);
  const remaining = 100 - nextValue;
  const otherTotal = others.reduce((sum, label) => sum + current[label], 0) || 1;

  others.forEach((label, index) => {
    current[label] = index === others.length - 1
      ? remaining - current[others[0]]
      : Math.max(0, Math.round((current[label] / otherTotal) * remaining));
  });

  labels.forEach((label) => {
    current[label] = Math.max(0, Math.min(100, current[label]));
  });

  state.answers[questionId] = current;
  saveState();
}

function getBarReading(values) {
  const { Truth, Comfort, Consequences } = values;
  if (Truth > 70) return "The machine says: this much truth requires a helmet and probably a witness.";
  if (Comfort > 70) return "The machine says: beautiful upholstery, questionable structural integrity.";
  if (Consequences > 70) return "The machine says: the press conference has already begun.";
  if (Math.abs(Truth - Comfort) < 8 && Math.abs(Comfort - Consequences) < 8) {
    return "The machine says: suspiciously balanced. Someone here has practiced.";
  }
  return "The machine says: answer accepted, but the room temperature has changed.";
}

async function finishQuiz() {
  quiz.classList.add("hidden");
  result.classList.remove("hidden");

  const beverage = state.answers.q5 || "nothing publicly defensible";
  resultCopy.textContent = `${state.name || "Anonymous respondent"}, you chose ${beverage}. The archive has made a note.`;

  if (!CONFIG.submissionEndpoint) {
    submitStatus.textContent = "Saved in this browser. Download the answers or add a Google endpoint later for live collection.";
    return;
  }

  submitStatus.textContent = "Submitting...";
  try {
    await fetch(CONFIG.submissionEndpoint, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(buildPayload())
    });
    submitStatus.textContent = "Submitted.";
  } catch {
    submitStatus.textContent = "Could not submit. Your answers are still saved in this browser.";
  }
}

function buildPayload() {
  return {
    submittedAt: new Date().toISOString(),
    name: state.name,
    answers: state.answers
  };
}

function downloadAnswers() {
  const blob = new Blob([JSON.stringify(buildPayload(), null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "june-questionnaire-answers.json";
  link.click();
  URL.revokeObjectURL(url);
}

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey));
    return saved || { name: "", index: 0, answers: {} };
  } catch {
    return { name: "", index: 0, answers: {} };
  }
}

function saveState() {
  localStorage.setItem(storageKey, JSON.stringify(state));
}
