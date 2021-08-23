const angles = document.querySelectorAll(".input-angle");
const checkTriangle = document.querySelector("#btn");
const outputMessage = document.querySelector("#output");

function calculateSumOfAngle(angle1, angle2, angle3) {
    const sum = angle1 + angle2 + angle3;
    return sum;
}

function isTriangle() {

    if(angles[0].value && angles[1].value && angles[0].value) {
        const sum = calculateSumOfAngle(Number(angles[0].value), Number(angles[1].value), Number(angles[2].value) );

        if(sum === 180) {
            outputMessage.innerText = "Oh oh! Angles form triangle!🥳🥳";
        } else {
            outputMessage.innerText = "Angles do not form triangle😕";
        }
    } else {
        outputMessage.innerText = "Please enter all three values😢";
    }
}

checkTriangle.addEventListener("click", isTriangle);