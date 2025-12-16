
const easyanswer = [1, 4, 3, 1, 2, 2, 1, 4, 3, 3];
const mediumanswer = [2, 4, 1, 1, 3, 2, 3, 4, 4, 2];
const hardanswer = [4, 3, 2, 3, 4, 1, 2, 1, 4, 3];

// Question data: replace the sample text with your real questions/options
const easyQuestions = [
    { q: "What is H2O?", options: ["Water", "Hydrogen", "Oxygen", "Helium"] },
    { q: "What is NaCl commonly called?", options: ["Baking soda", "Sugar", "Vinegar", "Salt"] },
    { q: "What is the chemical symbol for Gold?", options: ["Gd", "Ag", "Au", "Go"] },
    { q: "Which gas do plants use for photosynthesis?", options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Helium"] },
    { q: "What is the pH of pure water (approx)?", options: ["1", "7", "14", "10"] },
    { q: "What is the chemical formula for table sugar?", options: ["H2O", "C12H22O11", "CO2", "NaCl"] },
    { q: "Which element is a noble gas?", options: ["Neon", "Chlorine", "Sodium", "Calcium"] },
    { q: "What particle has a negative charge?", options: ["Photon", "Proton", "Neutron", "Electron"] },
    { q: "What is the chemical symbol for Oxygen?", options: ["Og", "Ox", "O", "Om"] },
    { q: "Which substance is a liquid at room temperature?", options: ["Neon", "Helium", "Mercury", "Lithium"] }
];

const mediumQuestions = [
    { q: "Which ion has gained an electron?", options: ["Anion", "Cation", "Radical", "Isotope"] },
    { q: "What is the molar mass unit?", options: ["g/mol", "kg", "mol", "L"] },
    { q: "Which bond is the strongest?", options: ["Covalent", "Ionic", "Hydrogen", "Van der Waals"] },
    { q: "What is the product of an acid + base?", options: ["Salt and water", "Gas", "Metal", "Polymer"] },
    { q: "Which element is most electronegative?", options: ["Fluorine", "Oxygen", "Chlorine", "Nitrogen"] },
    { q: "What is Avogadro's number (approx)?", options: ["6.02e23", "3.00e8", "9.81", "1.60e-19"] },
    { q: "Which phase change is gas->liquid?", options: ["Condensation", "Sublimation", "Evaporation", "Deposition"] },
    { q: "What is the oxidation state of O in H2O?", options: ["-2", "+1", "+2", "0"] },
    { q: "Which is a polar molecule?", options: ["H2O", "O2", "N2", "CH4"] },
    { q: "What does pH measure?", options: ["Acidity", "Temperature", "Pressure", "Mass"] }
];

const hardQuestions = [
    { q: "Which molecular geometry has 3 bonded atoms and 1 lone pair?", options: ["Trigonal pyramidal","Tetrahedral","Bent","Trigonal planar"] },
    { q: "Which quantum number describes orbital shape?", options: ["l (azimuthal)", "n (principal)", "m (magnetic)", "s (spin)"] },
    { q: "What is the hybridization of carbon in ethene (C2H4)?", options: ["sp2","sp3","sp","dsp2"] },
    { q: "Which statement is true for an endothermic reaction?", options: ["Absorbs heat","Releases heat","No heat change","Spontaneous always"] },
    { q: "What is the formula for density?", options: ["mass/volume","mass+volume","volume/mass","force/area"] },
    { q: "Which compound exhibits hydrogen bonding?", options: ["HF","HCl","H2","Ne"] },
    { q: "Which spectroscopy technique measures molecular vibrations?", options: ["IR spectroscopy","UV-Vis","NMR","X-ray"] },
    { q: "What is the unit of energy commonly used in chemistry?", options: ["kJ","Pa","m","s"] },
    { q: "Which acid is stronger?", options: ["HCl","CH3COOH","H2O","NH3"] },
    { q: "What is the equilibrium constant expression for aA + bB ⇌ cC?", options: ["[C]^c/([A]^a[B]^b)", "[A]^a[B]^b/[C]^c", "[C]/[A]", "[A]+[B]"] }
];

let tama = 0;
let mali = 0;
let grade = 0;
let qn = 1;

// Active quiz state
let currentQuestions = [];
let currentAnswers = [];
let quizMode = ""; // 'easy' | 'medium' | 'hard'

// Initialize UI counters (script is loaded at end of body in your HTML)
document.getElementById("question-number").innerText = qn;

actionNextQuestion = function(index) {
    // kept for backward compatibility if needed
    NextQuestion(index);
}

function NextQuestion(index) {
    document.getElementById("question-number").innerText = qn;
    document.getElementById("player-score").innerText = tama;

    const item = currentQuestions[qn - 1];
    if (item) {
        document.getElementById("display-question").innerText = item.q;
        document.getElementById("option-one-label").innerText = item.options[0] || "";
        document.getElementById("option-two-label").innerText = item.options[1] || "";
        document.getElementById("option-three-label").innerText = item.options[2] || "";
        document.getElementById("option-four-label").innerText = item.options[3] || "";
    } else {
        document.getElementById("display-question").innerText = `Question ${qn}`;
        document.getElementById("option-one-label").innerText = `Option 1`;
        document.getElementById("option-two-label").innerText = `Option 2`;
        document.getElementById("option-three-label").innerText = `Option 3`;
        document.getElementById("option-four-label").innerText = `Option 4`;
    }

    // Uncheck all radios
    document.querySelectorAll('input[name="option"]').forEach(r => r.checked = false);
}

function startEasyQuiz(){
    quizMode = 'easy';
    currentQuestions = easyQuestions;
    currentAnswers = easyanswer;
    qn = 1; tama = 0; mali = 0;
    document.getElementById('player-score').innerText = tama;
    NextQuestion(0);
}

function startMediumQuiz(){
    quizMode = 'medium';
    currentQuestions = mediumQuestions;
    currentAnswers = mediumanswer;
    qn = 1; tama = 0; mali = 0;
    document.getElementById('player-score').innerText = tama;
    NextQuestion(0);
}

function startHardQuiz(){
    quizMode = 'hard';
    currentQuestions = hardQuestions;
    currentAnswers = hardanswer;
    qn = 1; tama = 0; mali = 0;
    document.getElementById('player-score').innerText = tama;
    NextQuestion(0);
}

function submitAnswer(){
    const selected = document.querySelector('input[name="option"]:checked');
    if (!selected) {
        const optionModal = document.getElementById("option-modal");
        if (optionModal) optionModal.style.display = "flex";
        else alert("Please choose an option");
        return;
    }

    const selectedValue = parseInt(selected.value, 10);
    if (currentAnswers[qn-1] === selectedValue){
        tama++;
    } else {
        mali++;
    }

    document.getElementById("player-score").innerText = tama;

    if (qn >= currentAnswers.length){
        grade = tama * 10;
        document.getElementById("grade-percentage").innerText = grade + "%";
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

function easyhandleNextQuestion(){ submitAnswer(); }
function mediumhandleNextQuestion(){ submitAnswer(); }
function hardhandleNextQuestion(){ submitAnswer(); }

function closeScoreModal(){
    const modal = document.getElementById("score-modal");
    if (modal) modal.style.display = "none";
}

function closeOptionModal(){
    const modal = document.getElementById("option-modal");
    if (modal) modal.style.display = "none";
}