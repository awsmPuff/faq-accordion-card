const answer1 = document.querySelector(".a-1");
const question1 = document.querySelector(".question-1");
const toggle1 = document.querySelector(".toggle-1");
const answer2 = document.querySelector(".a-2");
const question2 = document.querySelector(".question-2");
const toggle2 = document.querySelector(".toggle-2");
const answer3 = document.querySelector(".a-3");
const question3 = document.querySelector(".question-3");
const toggle3 = document.querySelector(".toggle-3");
const answer4 = document.querySelector(".a-4");
const question4 = document.querySelector(".question-4");
const toggle4 = document.querySelector(".toggle-4");
const answer5 = document.querySelector(".a-5");
const question5 = document.querySelector(".question-5");
const toggle5 = document.querySelector(".toggle-5");

  
toggle1.addEventListener("click", () => {
    if(toggle1.classList.contains("unactive")) {
        toggle1.classList.remove("unactive");
        toggle1.style.transform = "rotate(180deg)";
        question1.style.fontWeight = "700";
        answer1.style.display = "block";
    } else {
        toggle1.style.transform = "rotate(0deg)";
        question1.style.fontWeight = "400";
        answer1.style.display = "none";
        toggle1.classList.add("unactive");
    }
});

toggle2.addEventListener("click", () => {
    if(toggle2.classList.contains("unactive")) {
        toggle2.classList.remove("unactive");
        toggle2.style.transform = "rotate(180deg)";
        question2.style.fontWeight = "700";
        answer2.style.display = "block";
    } else {
        toggle2.style.transform = "rotate(0deg)";
        question2.style.fontWeight = "400";
        answer2.style.display = "none";
        toggle2.classList.add("unactive");
    }
});

toggle3.addEventListener("click", () => {
    if(toggle3.classList.contains("unactive")) {
        toggle3.classList.remove("unactive");
        toggle3.style.transform = "rotate(180deg)";
        question3.style.fontWeight = "700";
        answer3.style.display = "block";
    } else {
        toggle3.style.transform = "rotate(0deg)";
        question3.style.fontWeight = "400";
        answer3.style.display = "none";
        toggle3.classList.add("unactive");
    }
});

toggle4.addEventListener("click", () => {
    if(toggle4.classList.contains("unactive")) {
        toggle4.classList.remove("unactive");
        toggle4.style.transform = "rotate(180deg)";
        question4.style.fontWeight = "700";
        answer4.style.display = "block";
    } else {
        toggle4.style.transform = "rotate(0deg)";
        question4.style.fontWeight = "400";
        answer4.style.display = "none";
        toggle4.classList.add("unactive");
    }
});

toggle5.addEventListener("click", () => {
    if(toggle5.classList.contains("unactive")) {
        toggle5.classList.remove("unactive");
        toggle5.style.transform = "rotate(180deg)";
        question5.style.fontWeight = "700";
        answer5.style.display = "block";
    } else {
        toggle5.style.transform = "rotate(0deg)";
        question5.style.fontWeight = "400";
        answer5.style.display = "none";
        toggle5.classList.add("unactive");
    }
});


const womanImg = document.querySelector(".woman");

function responsive(x) {
    if(x.matches) {
        womanImg.src = "./images/illustration-woman-online-mobile.svg";
    }
}

var x = window.matchMedia("(max-width: 480px)");
responsive(x);
x.addEventListener(responsive);