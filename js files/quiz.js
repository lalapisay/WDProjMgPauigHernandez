const easy = {
    question: "ah",
    option: ["what", "the", "helly"]
}

const tanongbox = document.getElementById("question");
const pilibox = document.getElementById("option");

let questionownum = 0;
let sinagutanmonaba = false;

function check(){
    if (questionownum >= easy.length){
        tanongbox.textContent = `Yippee!! done!`;
        pilibox.textContent = "";
        return;
    }
}

sinagutanmonaba = false; 
const questionow = easy[questionownum];
tanongbox.textContent = questionow.questionText;

pilibox.innerHTML = "";

for (let i = 0; i < questionow.option.length; i++){
    const L = questionow.option.length[i];
    const optionElement = document.createElement("div");

}

//IM GOING NUTS WHAT IF THIS IS THE LAST THING I'LL DO//
