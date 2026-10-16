const questions = [
{
skill: "Historical Context",
source:
'"Let us, then, fellow-citizens, unite with one heart and one mind. Let us restore to social intercourse that
harmony and affection without which liberty and even life itself are but dreary things. And let us reflect that,
having banished from our land that religious intolerance under which mankind so long bled and suffered, we
have yet gained little if we countenance a political intolerance as despotic, as wicked, and capable of as bitter
and bloody persecutions. . . . We have called by different names brethren of the same principle. We are all
Republicans, we are all Federalists. If there be any among us who would wish to dissolve this Union or to
change its republican form, let them stand undisturbed as monuments of the safety with which error of opinion
may be tolerated where reason is left free to combat it."',
attribution: "Declaration of Independence, 1776",
prompt:
"Which Enlightenment idea most directly influenced this passage?",
choices: [
"The divine right of kings",
"Natural rights and government by consent",
"Mercantilism and imperial control",
"The hereditary privileges of the nobility"
],
correct: 1,
explanation:
"John Locke argued that people possess natural rights and that legitimate government depends on the consent of the governed. These ideas influenced the Declaration of Independence.",
learningTip:
"Identify the historical ideas that shaped a document."
},
{
skill: "Sourcing",
source:
"Thomas Paine argued that the American colonies should separate from Great Britain.",
attribution: "Thomas Paine, Common Sense, 1776",
prompt:
"Why is Paine's intended audience important when analyzing this source?",
choices: [
"It proves that every colonist supported independence",
"It shows that the pamphlet was written only for Parliament",
"It helps explain why Paine used persuasive arguments to encourage colonial independence",
"It establishes that the pamphlet was written after the Treaty of Paris"
],
correct: 2,
explanation:
"Paine sought to persuade colonists to support independence. His audience and purpose help explain his direct, forceful arguments.",
learningTip:
"Explain how an author's audience or purpose shapes a source."
},
{
skill: "Evidence and Reasoning",
source:
"After the French and Indian War, Britain imposed new taxes and regulations on its North American colonies.",
attribution: "Historical context, 1763–1776",
prompt:
"Which development best explains why these policies contributed to the American Revolution?",
choices: [
"Colonists objected to taxation without representation and questioned British authority",
"Britain immediately granted the colonies independence",
"Colonists unanimously opposed all forms of government",
"The colonies had already adopted the U.S. Constitution"
],
correct: 0,
explanation:
"Colonial resistance to taxation without representation and disputes over Parliament's authority helped transform tensions into a revolutionary movement.",
learningTip:
"Connect historical evidence to a broader causal argument."
}
];

const form = document.getElementById("assessment-form");
const questionsContainer = document.getElementById("questions");
const submitButton = document.getElementById("submit-button");
const formMessage = document.getElementById("form-message");
const questionCount = document.getElementById("question-count");
const progressFill = document.getElementById("progress-fill");
const progressTrack = document.getElementById("progress-track");
const results = document.getElementById("results");
const retryButton = document.getElementById("retry-button");

let submitted = false;

// Build the assessment from the question data.
function renderQuestions() {
questionsContainer.replaceChildren();

questions.forEach((question, index) => {
const section = document.createElement("section");
section.className = "question";
section.id = `question-${index}`;

const top = document.createElement("div");
top.className = "question-top";

const number = document.createElement("span");
number.className = "question-number";
number.textContent = `QUESTION ${index + 1}`;

const skill = document.createElement("span");
skill.className = "skill-tag";
skill.textContent = question.skill;

top.append(number, skill);

const sourceBox = document.createElement("div");
sourceBox.className = "source-box";

const sourceLabel = document.createElement("p");
sourceLabel.className = "source-label";
sourceLabel.textContent = "PRIMARY SOURCE";

const sourceText = document.createElement("p");
sourceText.className = "source-text";
sourceText.textContent = question.source;

const attribution = document.createElement("p");
attribution.className = "source-label";
attribution.style.marginTop = "10px";
attribution.style.marginBottom = "0";
attribution.textContent = question.attribution;

sourceBox.append(sourceLabel, sourceText, attribution);

const prompt = document.createElement("h3");
prompt.className = "question-prompt";
prompt.textContent = question.prompt;

const answerList = document.createElement("div");
answerList.className = "answer-list";

question.choices.forEach((choice, choiceIndex) => {
const label = document.createElement("label");
label.className = "answer-option";
label.htmlFor = `q${index}-option${choiceIndex}`;

const input = document.createElement("input");
input.type = "radio";
input.name = `question-${index}`;
input.id = `q${index}-option${choiceIndex}`;
input.value = choiceIndex;
input.addEventListener("change", updateProgress);

const text = document.createElement("span");
text.textContent = choice;

label.append(input, text);
answerList.appendChild(label);
});

section.append(top, sourceBox, prompt, answerList);
questionsContainer.appendChild(section);
});
}

// Track answered questions and update the progress bar.
function updateProgress() {
if (submitted) return;

const answered = questions.filter((question, index) =>
form.querySelector(`input[name="question-${index}"]:checked`)
).length;

questionCount.textContent = `${answered} of ${questions.length}`;

const percentage = (answered / questions.length) * 100;
progressFill.style.width = `${percentage}%`;
progressTrack.setAttribute("aria-valuenow", answered);

submitButton.disabled = answered !== questions.length;

formMessage.textContent =
answered === questions.length
? "You're ready! Submit your answers to see your results."
: `Answer ${questions.length - answered} more question(s) to submit.`;
}

// Check answers and display feedback.
function gradeAssessment() {
let score = 0;
const missedSkills = [];

questions.forEach((question, index) => {
const selected = form.querySelector(
`input[name="question-${index}"]:checked`
);

const selectedAnswer = Number(selected.value);
const isCorrect = selectedAnswer === question.correct;

if (isCorrect) {
score++;
} else {
missedSkills.push({
skill: question.skill,
tip: question.learningTip
});
}

const section = document.getElementById(`question-${index}`);
const labels = section.querySelectorAll(".answer-option");

labels.forEach((label, choiceIndex) => {
const input = label.querySelector("input");
input.disabled = true;

if (choiceIndex === question.correct) {
label.classList.add("correct");
} else if (choiceIndex === selectedAnswer) {
label.classList.add("incorrect");
}
});

const feedback = document.createElement("div");
feedback.className = "feedback";

const heading = document.createElement("strong");
heading.textContent = isCorrect
? "Correct! Well done."
: `Not quite. Correct answer: ${question.choices[question.correct]}`;

const explanation = document.createElement("p");
explanation.textContent = question.explanation;

feedback.append(heading, explanation);
section.appendChild(feedback);
});

showResults(score, missedSkills);
}

// Summarize results and skills to review.
function showResults(score, missedSkills) {
const percent = Math.round((score / questions.length) * 100);

document.getElementById("score-number").textContent =
`${score}/${questions.length}`;

document.getElementById("score-percent").textContent = `${percent}%`;

document.getElementById("results-title").textContent =
percent === 100
? "Excellent work!"
: percent >= 67
? "Good progress!"
: "Keep practicing!";

document.getElementById("results-message").textContent =
percent === 100
? "You answered every question correctly. You demonstrated strong historical reasoning on this assessment."
: "Review the explanations above, then try again to strengthen your historical reasoning skills.";

const skillsList = document.getElementById("skills-list");
skillsList.replaceChildren();

if (missedSkills.length === 0) {
const item = document.createElement("li");
item.textContent = "All assessed skills demonstrated successfully.";
skillsList.appendChild(item);
} else {
missedSkills.forEach(({ skill, tip }) => {
const item = document.createElement("li");
item.textContent = `${skill}: ${tip}`;
skillsList.appendChild(item);
});
}

results.classList.remove("hidden");
submitButton.classList.add("hidden");

formMessage.textContent = "Your answers have been submitted.";

results.scrollIntoView({ behavior: "smooth", block: "start" });
}

// Prevent submission until every question has been answered.
form.addEventListener("submit", (event) => {
event.preventDefault();

if (submitted) return;

const answered = questions.filter((question, index) =>
form.querySelector(`input[name="question-${index}"]:checked`)
).length;

if (answered !== questions.length) {
formMessage.textContent = "Please answer every question first.";
return;
}

submitted = true;
gradeAssessment();
});

// Reset the assessment so students can practice again.
retryButton.addEventListener("click", () => {
submitted = false;
form.reset();

results.classList.add("hidden");
submitButton.classList.remove("hidden");
submitButton.disabled = true;

renderQuestions();
updateProgress();

window.scrollTo({ top: 0, behavior: "smooth" });
});

// Initialize the page.
renderQuestions();
updateProgress();
