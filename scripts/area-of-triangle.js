const sides = document.querySelectorAll(".input-sides");
const calculate = document.querySelector("#btn");
const output = document.querySelector("#output");

function semiperimater(s1, s2, s3) {
    const s = (s1 + s2 + s3)/2;
    return s;
}

function area() {
    if(sides[0].value && sides[1].value && sides[2].value) {
        const s1 = Number(sides[0].value);
        const s2 = Number(sides[1].value);
        const s3 = Number(sides[2].value);
        if(s1+s2 > s3 && s1+s3>s2 && s2+s3>s1) {
            const s = semiperimater(s1, s2, s3);

            const answer = Math.sqrt(s * (s-s1) * (s-s2) * (s-s3));

            output.innerText = `Area of triangle is ${answer}`;
        } 
        else {
            output.innerText = "Invalid triangle, enter valid lengths."
        }
    } 
    else {
        output.innerText = "Please enter all fieldes."
    }
}

calculate.addEventListener("click", area);