const angles = document.querySelectorAll(".input-val");
const calculateHypotenuse = document.querySelector("#calculate-hyp");
const outputMessage = document.querySelector("#output");

function hypotenuse(angle1, angle2) {
    const hypo = Math.sqrt((angle1*angle1) + (angle2*angle2));
    return hypo;
}

function calculate() {

    if(angles[0].value && angles[1].value) {
        const answer = hypotenuse(Number(angles[0].value), Number(angles[1].value));
        outputMessage.innerText =  `The length of hypotenuse is ${answer}`;
    } else {
        outputMessage.innerText = "Enter both fields.";
    }
}

calculateHypotenuse.addEventListener("click", calculate);