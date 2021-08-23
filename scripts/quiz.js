const quizForm = document.querySelector(".quiz-form");
const submitBtn = document.querySelector("#submit-answers");
const output = document.querySelector("#output")

const correctAnswers = [
    "90°",
    "Right angled",
    "One right angle",
    "12, 16, 20",
    "Equilateral triangle",
    "100°",
    "30°",
    "a + b + c",
    "No",
    "45°",
];

function calculateScore() {
    const formData = new FormData(quizForm);
    let score = 0, i = 0;
    for(let values of formData.values()) {
        if(values === correctAnswers[i]) {
            score += 1;
        }
        i += 1;
    }
    output.innerText = `Your score is ${score}`;
}

submitBtn.addEventListener("click", calculateScore);