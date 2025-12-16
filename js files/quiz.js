
const easyanswer = [1, 4, 3, 1, 2, 2, 1, 4, 3, 3];
const mediumanswer = [2, 4, 1, 1, 3, 2, 3, 4, 4, 2];
const hardanswer = [4, 3, 2, 3, 4, 1, 2, 1, 4, 3];

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
// easy
function easyhandleNextQuestion(){
    document.getElementById("question-number").innerText = qn;
    const selected = document.querySelector('input[name="option"]:checked');
    if (!selected) {
        const optionModal = document.getElementById("option-modal");
        if (optionModal) optionModal.style.display = "flex";
        else alert("Please choose an option");
        return;
    }

    const selectedValue = parseInt(selected.value, 10);
    if (easyanswer[qn-1] === selectedValue){
        tama++;
    } else {
        mali++;
    }

    document.getElementById("player-score").innerText = tama;

    if (qn >= easyanswer.length){
        grade = tama * 10;
        document.getElementById("grade-percentage").innerText = grade;
        document.getElementById("right-answers").innerText = tama;
        document.getElementById("wrong-answers").innerText = mali;
        document.getElementById("score-modal").style.display = "flex";
        const remarks = document.getElementById("remarks");
        if (remarks) remarks.innerText = grade >= 60 ? "Well done!" : "Keep practicing!";
        return;
    }

    qn++;
    NextQuestion(qn-1);
}
// medium
function mediumhandleNextQuestion(){
    document.getElementById("question-number").innerText = qn;
    const selected = document.querySelector('input[name="option"]:checked');
    if (!selected) {
        const optionModal = document.getElementById("option-modal");
        if (optionModal) optionModal.style.display = "flex";
        else alert("Please choose an option");
        return;
    }

    const selectedValue = parseInt(selected.value, 10);
    if (mediumanswer[qn-1] === selectedValue){
        tama++;
    } else {
        mali++;
    }

    document.getElementById("player-score").innerText = tama;

    if (qn >= mediumanswer.length){
        grade = tama * 10;
        document.getElementById("grade-percentage").innerText = grade;
        document.getElementById("right-answers").innerText = tama;
        document.getElementById("wrong-answers").innerText = mali;
        document.getElementById("score-modal").style.display = "flex";
        const remarks = document.getElementById("remarks");
        if (remarks) remarks.innerText = grade >= 60 ? "Well done!" : "Keep practicing!";
        return;
    }

    qn++;
    NextQuestion(qn-1);
}
// hard
function hardhandleNextQuestion(){
    document.getElementById("question-number").innerText = qn;
    const selected = document.querySelector('input[name="option"]:checked');
    if (!selected) {
        const optionModal = document.getElementById("option-modal");
        if (optionModal) optionModal.style.display = "flex";
        else alert("Please choose an option");
        return;
    }

    const selectedValue = parseInt(selected.value, 10);
    if (hardanswer[qn-1] === selectedValue){
        tama++;
    } else {
        mali++;
    }

    document.getElementById("player-score").innerText = tama;

    if (qn >= hardanswer.length){
        grade = tama * 10;
        document.getElementById("grade-percentage").innerText = grade;
        document.getElementById("right-answers").innerText = tama;
        document.getElementById("wrong-answers").innerText = mali;
        document.getElementById("score-modal").style.display = "flex";
        const remarks = document.getElementById("remarks");
        if (remarks) remarks.innerText = grade >= 60 ? "Well done!" : "Keep practicing!";
        return;
    }

    qn++;
    NextQuestion(qn-1);
}

function closeScoreModal(){
    const modal = document.getElementById("score-modal");
    if (modal) modal.style.display = "none";
}

function closeOptionModal(){
    const modal = document.getElementById("option-modal");
    if (modal) modal.style.display = "none";
}

NextQuestion(0);