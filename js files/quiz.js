
const answer = [1, 4, 3, 1, 2, 2, 1, 4, 3, 3];

let tama = 0;
let mali = 0;
let grade = 0;
let qn = 1;

document.getElementById("question-number").innerText = qn;

// Minimal question display: replace or extend with real questions later
function NextQuestion(index) {
    document.getElementById("question-number").innerText = qn;
    document.getElementById("player-score").innerText = tama;

    // Simple placeholder content for questions/options.
    document.getElementById("display-question").innerText = `Question ${qn}`;
    document.getElementById("option-one-label").innerText = `Option 1`;
    document.getElementById("option-two-label").innerText = `Option 2`;
    document.getElementById("option-three-label").innerText = `Option 3`;
    document.getElementById("option-four-label").innerText = `Option 4`;

    // Uncheck all radios
    const radios = document.querySelectorAll('input[name="option"]');
    radios.forEach(r => r.checked = false);
}

function handleNextQuestion(){
    document.getElementById("question-number").innerText = qn;
    const selected = document.querySelector('input[name="option"]:checked');
    if (!selected) {
        // show option modal if present
        const optionModal = document.getElementById("option-modal");
        if (optionModal) optionModal.style.display = "flex";
        else alert("Please choose an option");
        return;
    }

    // Compare numeric values
    const selectedValue = parseInt(selected.value, 10);
    if (answer[qn-1] === selectedValue){
        tama++;
    } else {
        mali++;
    }

    // Update score display
    document.getElementById("player-score").innerText = tama;

    // If this was the last question, show results
    if (qn >= answer.length){
        grade = tama * 10;
        document.getElementById("grade-percentage").innerText = grade;
        document.getElementById("right-answers").innerText = tama;
        document.getElementById("wrong-answers").innerText = mali;
        document.getElementById("score-modal").style.display = "flex";
        const remarks = document.getElementById("remarks");
        if (remarks) remarks.innerText = grade >= 60 ? "Well done!" : "Keep practicing!";
        return;
    }

    // otherwise go to next question
    qn++;
    NextQuestion(qn-1);
}

function closeScoreModal(){
    const modal = document.getElementById("score-modal");
    if (modal) modal.style.display = "none";
    // optional: reset quiz or reload
    // location.reload();
}

function closeOptionModal(){
    const modal = document.getElementById("option-modal");
    if (modal) modal.style.display = "none";
}

// Initialize first question
NextQuestion(0);