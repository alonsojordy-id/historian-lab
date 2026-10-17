const questions = [
{
skill: "Historical Context",
source:
"Let us, then, with courage and confidence, pursue our own Federal and [Democratic-] Republican principles, our attachment to union and representative government. Kindly separated by nature and a wide ocean from the exterminating havoc of one quarter of the globe; too high-minded to endure the degradations of the others; possessing a chosen country, with room enough for our descendants . . . ; entertaining a due sense of our equal right to the use of our own faculties, to the acquisitions of our own industry, to honor and confidence from our fellow citizens, resulting not from birth, but from our actions and their sense of them; enlightened by a benign religion. . .—with all these blessings, what more is necessary to make us a happy and a prosperous people? Still one thing more, fellow citizens—a wise and frugal Government, which shall restrain men from injuring one another, shall leave them otherwise free to regulate their own pursuits of industry and improvement, and shall not take from the mouth of labor the bread it has earned. This is the sum of good government; and this is necessary to close the circle of our felicities.",
attribution: "President Thomas Jefferson, first inaugural address, 1801",
prompt:
"Which of the following best describes Jefferson’s point of view in the excerpt?",
choices: [
"As a resident of Virginia, Jefferson felt the federal government should financially support internal improvements.",
"As the newly elected president, Jefferson believes government should limit interference in the lives of its citizens.",
"As a leader in the early years of the republic, Jefferson feels governments should provide economic assistance to all citizens.",
"As the author of the Declaration of Independence, Jefferson believes state governments should have more authority than the federal government."
],
correct: 1,
explanation:
"Correct. Jefferson’s views of government saw limited involvement with the lives of United States citizens. He argued in the excerpt that “a wise and frugal Government . . . shall leave [its people] otherwise free to regulate their own pursuits of industry and improvement.”",
learningTip:
"Connect the author's perspective to the argument."
},
{
skill: "Purpose",
source:
"Let us, then, with courage and confidence, pursue our own Federal and [Democratic-] Republican principles, our attachment to union and representative government. Kindly separated by nature and a wide ocean from the exterminating havoc of one quarter of the globe; too high-minded to endure the degradations of the others; possessing a chosen country, with room enough for our descendants . . . ; entertaining a due sense of our equal right to the use of our own faculties, to the acquisitions of our own industry, to honor and confidence from our fellow citizens, resulting not from birth, but from our actions and their sense of them; enlightened by a benign religion. . .—with all these blessings, what more is necessary to make us a happy and a prosperous people? Still one thing more, fellow citizens—a wise and frugal Government, which shall restrain men from injuring one another, shall leave them otherwise free to regulate their own pursuits of industry and improvement, and shall not take from the mouth of labor the bread it has earned. This is the sum of good government; and this is necessary to close the circle of our felicities.",
attribution: "President Thomas Jefferson, first inaugural address, 1801",
prompt:
"Which of the following was most likely a main purpose of Jefferson’s inaugural address?",
choices: [
"To advocate and explain the constitutionality of certain laws",
"To summarize his beliefs about the ideal political system",
"To warn European countries against renewing conflicts with the United States",
"To justify the cost of the Louisiana Purchase"
],
correct: 1,
explanation:
"Correct. Along with stating his support for limited government, Jefferson also touched on the ideals of republicanism in this excerpt from his inaugural address, which represented an expression of his ideal political system.",
learningTip:
"Explain how the author's audience or purpose shapes a source."
},
{
skill: "Historical Situation",
source:
"Let us, then, with courage and confidence, pursue our own Federal and [Democratic-] Republican principles, our attachment to union and representative government. Kindly separated by nature and a wide ocean from the exterminating havoc of one quarter of the globe; too high-minded to endure the degradations of the others; possessing a chosen country, with room enough for our descendants . . . ; entertaining a due sense of our equal right to the use of our own faculties, to the acquisitions of our own industry, to honor and confidence from our fellow citizens, resulting not from birth, but from our actions and their sense of them; enlightened by a benign religion. . .—with all these blessings, what more is necessary to make us a happy and a prosperous people? Still one thing more, fellow citizens—a wise and frugal Government, which shall restrain men from injuring one another, shall leave them otherwise free to regulate their own pursuits of industry and improvement, and shall not take from the mouth of labor the bread it has earned. This is the sum of good government; and this is necessary to close the circle of our felicities.",
attribution: "President Thomas Jefferson, first inaugural address, 1801",
prompt:
"Which of the following best describes the political situation in which Jefferson gave the address in the excerpt?",
choices: [
"The Democratic-Republican Party had won the presidency for the first time.",
"Federalists sought compromise with Democratic-Republican politicians.",
"Democratic-Republicans had gained increased support from wealthy merchants",
"I love my homies"
],
correct: 0,
explanation:
"Correct. In 1800, Jefferson became the first Democratic-Republican to be elected president (after twelve years of Federalist administrations) and brought the first transition of executive authority from one party to another in United States history.",
learningTip:
"Connect historical situation to a broader causal argument."
},
{
skill: "Purpose",
source:
"Louisiana as ceded by France is made part of the United States. Congress may make part of the United States other adjacent territories which shall be justly acquired.“Congress may sever from the United States territory not heretofore within the United States, with consent of a majority of the free males above 21 years, inhabiting such territory.",
attribution: "James Madison, secretary of state, proposed constitutional amendment [not passed], 1803",
prompt:
"Which of the following best describes a major purpose of the proposed amendment?",
choices: [
"To strengthen the United States alliance with France",
"To give individual states the legal right to secede from the Union",
"To give Congress additional constitutional powers",
"To give the president more control over negotiating treaties"
],
correct: 2,
explanation:
"Correct. The proposed amendment was designed to add specific language to the Constitution regarding the powers of the federal government, particularly the legislative branch, to buy territory from foreign governments and incorporate new territory into the Union, because these powers were not explicitly stated.",
learningTip:
"Explain how the author's purpose shapes a source."
},
{
skill: "Visual Source Analysis",
source:
"Canals in the United States 1830",
attribution: "Historical Canal Map in the United States (1830)",
image: "https://raw.githubusercontent.com/alonsojordy-id/historian-lab/77c42a3655cc3c7aa294d8dd502117e6463d499d/APUSH-UNIT4-CANAL.png",
imageAlt: "Historical map of canals in the United States in 1830",
prompt:
"Which of the following most directly contributed to the construction of canals depicted on the map?",
choices: [
"Funding from state governments and private investors",
"The building of a national telegraph system",
"The expansion of cotton exports to Europe",
"The extensive use of enslaved laborers"
],
correct: 0,
explanation:
"Correct. Funding from state government and private investors most directly contributed to the construction of canals depicted on the map. Although some Americans in the first half of the 1800s, especially in the Northeast and Midwest, supported Henry Clay’s American System as a means of improving transportation infrastructure, the federal government provided relatively little support for transportation projects at this time because of concerns about the constitutionality of such measures, generally leaving the development of canals such as those depicted in the map to states or private investors.",
learningTip:
"Connect historical situation to a visual source."
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

// Display an image if the question includes one.
if (question.image) {
  const img = document.createElement("img");
  img.src = question.image;
  img.alt = question.attribution || "Question image";
  img.style.maxWidth = "100%";
  img.style.height = "auto";
  img.style.display = "block";
  img.style.margin = "16px auto";
  img.style.borderRadius = "8px";

  sourceBox.appendChild(img);
}

const prompt = document.createElement("h3");
prompt.className = "question-prompt";
prompt.textContent - question.prompt;

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
