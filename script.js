const CONFIG = {
  submissionEndpoint: "https://script.google.com/macros/s/AKfycbwrtyW8y8nWyl0mdjdCq80rJY0zfozdUaxTwhDeJ6JNSKcIf1Um8JjRfps9R_SCWymmow/exec"
};

const editions = [
  {
    id: "june-2026-draft",
    title: "June 2026 Draft",
    kicker: "Monthly Questionnaire: June Edition",
    intro: "Thirty questions planned. This draft includes the interactive pieces and the Question 30 bar graph prototype.",
    answerFile: "june-questionnaire-answers.json",
    questions: [
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
    ]
  },
  {
    id: "may-25-2026",
    title: "May 25, 2026",
    kicker: "Monthly Questionnaire: May Archive",
    intro: "Forty questions from last month, preserved as a one-question-at-a-time archive edition.",
    answerFile: "may-25-2026-questionnaire-answers.json",
    questions: [
      { id: "q1", section: "May 25, 2026", type: "text", prompt: "A machine can show you one true thing about yourself that you don't currently see. Do you use it?" },
      { id: "q2", section: "May 25, 2026", type: "text", prompt: "You are given a button that improves your life slightly every time you press it--but makes someone else's day slightly worse. No one will ever know. How often do you press it?" },
      { id: "q3", section: "May 25, 2026", type: "text", prompt: "Would you rather be deeply understood by one person, or easily liked by many?" },
      { id: "q4", section: "May 25, 2026", type: "text", prompt: "Board shorts or bowling shoes?" },
      { id: "q5", section: "May 25, 2026", type: "text", prompt: "You get one hour where everyone believes you completely. What do you say?" },
      { id: "q6", section: "May 25, 2026", type: "text", prompt: "What movie changed a decision you made?" },
      { id: "q7", section: "May 25, 2026", type: "text", prompt: "You have to choose one character (fictional) to fight for you in a Kumite (fighting Tournament). If your chosen combatant does not slay the rest, you will lose your life. Choose wisely." },
      { id: "q8", section: "May 25, 2026", type: "text", prompt: "If your dad was planning to abandon the family and having packed the car, bumps into you as he is leaving for the last time, would you rather he told you he went for milk or cigarettes?" },
      { id: "q9", section: "May 25, 2026", type: "text", prompt: "Which is superior: Utilitarianism or the Categorical Imperative?\n\nYou may answer without defining them, or define them as you understand them." },
      { id: "q10", section: "May 25, 2026", type: "text", prompt: "Sweats or slacks?" },
      { id: "q11", section: "May 25, 2026", type: "text", prompt: "What do you return to, even when it's not good for you?" },
      { id: "q12", section: "May 25, 2026", type: "text", prompt: "Please write a haiku. To write a haiku, you must arrange exactly seventeen syllables into three consecutive lines of five, seven, and five syllables." },
      { id: "q13", section: "May 25, 2026", type: "text", prompt: "Your favorite team has the first pick in the draft. You have to make the call for the company picnic. Pepsi or Coke?" },
      { id: "q14", section: "May 25, 2026", type: "text", prompt: "The results from question thirteen, Pepsi or Coke, are in. They are disastrous. A press conference has been called, you will have a chance to answer to the loved ones of the dead. What do you turn to for guidance on how to proceed?" },
      { id: "q15", section: "May 25, 2026", type: "text", prompt: "Some say \"never find out how the sausage is made.\" But you know how the \"sausage is made\" now the FBI is after you. What do you do with this knowledge?" },
      { id: "q16", section: "May 25, 2026", type: "text", prompt: "Are trucks cool?" },
      { id: "q17", section: "May 25, 2026", type: "text", prompt: "Explain the Cold War in four words. It need not be a sentence." },
      { id: "q18", section: "May 25, 2026", type: "text", prompt: "Do you wanna be a shot caller?" },
      { id: "q19", section: "May 25, 2026", type: "text", prompt: "Which franchise is in the healthiest place? Please rank sequentially: Dune, Star Wars, Marvel, DC, Harry Potter, Wes Anderson, and Avatar." },
      { id: "q20", section: "May 25, 2026", type: "text", prompt: "What is the bible" },
      { id: "q21", section: "May 25, 2026", type: "text", prompt: "You are to be stranded on a deserted island for 9 years. You will have no contact with others. The Island is deserted but lush, you will have plenty of food and water. You may take four items. What will they be?" },
      { id: "q22", section: "May 25, 2026", type: "text", prompt: "What would it mean for your worldview, if people of Jewish decent are truly chosen by the one true God YHWH?" },
      { id: "q23", section: "May 25, 2026", type: "text", prompt: "When does one \"make it\"?" },
      { id: "q24", section: "May 25, 2026", type: "text", prompt: "Did you ever know the joy of a subscription to a great magazine?" },
      { id: "q25", section: "May 25, 2026", type: "text", prompt: "You have terminal cancer. Your pal Carl who also lives at the old folks home scored some uppers. As consolation, he want to \"turn up.\" Do you do drugs with Carl?" },
      { id: "q26", section: "May 25, 2026", type: "text", prompt: "What is one thing about the opposite sex that isnt true, but you thought was because of television?" },
      { id: "q27", section: "May 25, 2026", type: "text", prompt: "AI becomes aware/sentient/self-deterministic. What do you expect it to do? Why?" },
      { id: "q28", section: "May 25, 2026", type: "text", prompt: "What is your brand?" },
      { id: "q29", section: "May 25, 2026", type: "text", prompt: "Choose one: Gay/Lesbian or bald?" },
      { id: "q30", section: "May 25, 2026", type: "text", prompt: "Deep in an industrial basement you find an old computer left on for years. On it, a civilization developed. The \"people\" have basic agriculture and mine bitcoin. They refuse to accept fiat currency and refuse to crumble under their current existential reckoning. Only a power cord from a computer into a surge protector which plugs into a wall keeps the computer on. Their universe persists.\n\nThey have value, limits, and sustainability, though you do not fully understand them.\n\nGiven this situation, what number of egg salad sandwiches is too many egg salad sandwiches for a fourteen year old to have eaten thus far in their lifetime?" },
      { id: "q31", section: "May 25, 2026", type: "text", prompt: "It is time for the final counter attack. You Commander, You who has lead humanity to the precipice of victory, are too injured to lead or fight. You must choose who will take your place in this ultimate final battle. It would be wise to choose from among your top generals. Do you choose General Taylor Swift or General JD Vance?" },
      { id: "q32", section: "May 25, 2026", type: "text", prompt: "How do you feel when somebody responds \"all types\" to a question about what kind of X they like" },
      { id: "q33", section: "May 25, 2026", type: "text", prompt: "Does Catlin Clark do enough on the court to justify her advertising stature?" },
      { id: "q34", section: "May 25, 2026", type: "text", prompt: "Ignore cultural norms please. Would you change your last name for a partner?" },
      { id: "q35", section: "May 25, 2026", type: "text", prompt: "Would you change phone iPhone to Android for a partner?" },
      { id: "q36", section: "May 25, 2026", type: "text", prompt: "This question refers to 13 and 14.\n\nOne in the clip and one in the chamber. Not enough for the horde.\n\nYour drink choice (13) and the advice you were given (14) had dire consequences. People say dumb things all the time but only for you did it begin the end times. What color is the sky in your imagination right now?" },
      { id: "q37", section: "May 25, 2026", type: "text", prompt: "Rich people are getting new faces. Would you ever get a new face?" },
      { id: "q38", section: "May 25, 2026", type: "text", prompt: "What religion or religious denomination has the best fits?" },
      { id: "q39", section: "May 25, 2026", type: "text", prompt: "Science? is it Ehh? Or big time cool?" },
      { id: "q40", section: "May 25, 2026", type: "text", prompt: "A fiend Appears. IT requires your leg at the hip and your dominant arm. You cannot escape. But IT offers a deal. Give them now. Or in one year engage in a rap battle against Loaded Lux, Hollow Da Don and Murda Mook. If you defeat them, all three, you lose nothing. However if you fail, IT will take double lagaan (tax). What is your choice?" }
    ]
  }
];

const defaultEditionId = "june-2026-draft";
const storageKey = "monthly-questionnaire-state";
let state = loadState();

const intro = document.querySelector("#intro");
const quiz = document.querySelector("#quiz");
const result = document.querySelector("#result");
const introKicker = document.querySelector("#intro .kicker");
const introCopy = document.querySelector(".intro-copy");
const editionSelect = document.querySelector("#editionSelect");
const editionSummary = document.querySelector("#editionSummary");
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

renderEditionOptions();
respondentName.value = state.name;
editionSelect.value = state.editionId;
renderIntroEdition();

editionSelect.addEventListener("change", () => {
  state.editionId = editionSelect.value;
  state.index = 0;
  state.answers = state.answersByEdition[state.editionId] || {};
  saveState();
  renderIntroEdition();
});

startButton.addEventListener("click", () => {
  state.name = respondentName.value.trim();
  state.editionId = editionSelect.value;
  state.answersByEdition[state.editionId] = state.answers;
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
  if (state.index < currentQuestions().length - 1) {
    state.index += 1;
    saveState();
    renderQuestion();
    return;
  }

  await finishQuiz();
});

downloadButton.addEventListener("click", downloadAnswers);

restartButton.addEventListener("click", () => {
  const editionId = state.editionId;
  state = { name: "", editionId, index: 0, answers: {}, answersByEdition: { ...state.answersByEdition, [editionId]: {} } };
  saveState();
  respondentName.value = "";
  result.classList.add("hidden");
  intro.classList.remove("hidden");
  renderIntroEdition();
});

function renderQuestion() {
  const edition = currentEdition();
  const questions = currentQuestions();
  const question = questions[state.index];
  const visibleNumber = Number(question.id.replace("q", "")) || state.index + 1;

  sectionLabel.textContent = question.section;
  questionTitle.textContent = `Question ${visibleNumber}`;
  questionCount.textContent = `${state.index + 1} / ${questions.length}`;
  progressFill.style.width = `${((state.index + 1) / questions.length) * 100}%`;
  nextButton.textContent = state.index === questions.length - 1 ? "Finish" : "Next";
  document.title = `${edition.title} - Monthly Questionnaire`;

  questionBody.innerHTML = "";
  questionBody.appendChild(createPrompt(question));

  if (question.type === "text" || question.type === "callback") renderTextQuestion(question);
  if (question.type === "choice") renderChoiceQuestion(question);
  if (question.type === "slider") renderSliderQuestion(question);
  if (question.type === "ranking") renderRankingQuestion(question);
  if (question.type === "bars") renderBarsQuestion(question);
}

function renderEditionOptions() {
  editionSelect.innerHTML = "";
  editions.forEach((edition) => {
    const option = document.createElement("option");
    option.value = edition.id;
    option.textContent = edition.title;
    editionSelect.appendChild(option);
  });
}

function renderIntroEdition() {
  const edition = currentEdition();
  introKicker.textContent = edition.kicker;
  introCopy.textContent = edition.intro;
  editionSummary.textContent = `${edition.questions.length} questions. Answers are saved separately for this edition in this browser.`;
}

function currentEdition() {
  return editions.find((edition) => edition.id === state.editionId) || editions[0];
}

function currentQuestions() {
  return currentEdition().questions;
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
  const edition = currentEdition();
  quiz.classList.add("hidden");
  result.classList.remove("hidden");

  resultCopy.textContent = `${state.name || "Anonymous respondent"}, your ${edition.title} answers have entered the archive.`;

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
    editionId: state.editionId,
    editionTitle: currentEdition().title,
    name: state.name,
    answers: state.answers
  };
}

function downloadAnswers() {
  const blob = new Blob([JSON.stringify(buildPayload(), null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = currentEdition().answerFile;
  link.click();
  URL.revokeObjectURL(url);
}

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey));
    if (saved) {
      const editionId = saved.editionId || defaultEditionId;
      const answersByEdition = saved.answersByEdition || { [editionId]: saved.answers || {} };
      return {
        name: saved.name || "",
        editionId,
        index: saved.index || 0,
        answers: answersByEdition[editionId] || {},
        answersByEdition
      };
    }

    const oldDraft = JSON.parse(localStorage.getItem("june-questionnaire-draft"));
    if (oldDraft) {
      return {
        name: oldDraft.name || "",
        editionId: defaultEditionId,
        index: oldDraft.index || 0,
        answers: oldDraft.answers || {},
        answersByEdition: { [defaultEditionId]: oldDraft.answers || {} }
      };
    }

    return { name: "", editionId: defaultEditionId, index: 0, answers: {}, answersByEdition: {} };
  } catch {
    return { name: "", editionId: defaultEditionId, index: 0, answers: {}, answersByEdition: {} };
  }
}

function saveState() {
  state.answersByEdition[state.editionId] = state.answers;
  localStorage.setItem(storageKey, JSON.stringify(state));
}
