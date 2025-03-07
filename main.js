const quizData = [
    {
        question: "What is the capital of France?",
        a: "Madrid",
        b: "Berlin",
        c: "Paris",
        d: "Lisbon",
        correct: "c"
    },
    {
        question: "Which programming language is known as the backbone of web development?",
        a: "Python",
        b: "JavaScript",
        c: "C++",
        d: "Swift",
        correct: "b"
    },
    {
        question: "What is the largest planet in our Solar System?",
        a: "Earth",
        b: "Mars",
        c: "Jupiter",
        d: "Venus",
        correct: "c"
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        a: "Harper Lee",
        b: "J.K. Rowling",
        c: "Ernest Hemingway",
        d: "Mark Twain",
        correct: "a"
    },
    {
        question: "Which element has the chemical symbol 'O'?",
        a: "Oxygen",
        b: "Osmium",
        c: "Oganesson",
        d: "Oxalate",
        correct: "a"
    },
    {
        question: "How many continents are there on Earth?",
        a: "5",
        b: "6",
        c: "7",
        d: "8",
        correct: "c"
    },
    {
        question: "Which year did World War II end?",
        a: "1942",
        b: "1945",
        c: "1948",
        d: "1950",
        correct: "b"
    },
    {
        question: "Which data structure follows the LIFO principle?",
        a: "Queue",
        b: "Stack",
        c: "Linked List",
        d: "Tree",
        correct: "b"
    },
    {
        question: "What is the speed of light in vacuum?",
        a: "300,000 km/s",
        b: "150,000 km/s",
        c: "500,000 km/s",
        d: "1,000,000 km/s",
        correct: "a"
    },
    {
        question: "Which gas is most abundant in Earth's atmosphere?",
        a: "Oxygen",
        b: "Nitrogen",
        c: "Carbon Dioxide",
        d: "Helium",
        correct: "b"
    }
];


let currentQuestion = 0;
let score = 0;

const questionEl = document.querySelector(".quiz-header h2");
const optionA = document.querySelector("#la label");
const optionB = document.querySelector("#lb label");
const optionC = document.querySelector("#lc label");
const optionD = document.querySelector("#ld label");
const button = document.querySelector(".quiz-container button");

updateQuiz();


//functions

function updateQuiz() {
   let { question, a, b, c, d, correct } = quizData[currentQuestion];
    questionEl.textContent = question;
    optionA.textContent = a;
    optionB.textContent = b;
    optionC.textContent = c;
    optionD.textContent = d;
}

function showResults() {
    let container = document.querySelector(".quiz-container");
    container.innerHTML = `<h1 style="text-align:center;padding:5px">SCORE CARD : </h1> <div style="text-align:center; font-size:3rem; font-family:inherit"> ${score} / 10 </div>`;
}


//adding events 
button.addEventListener('click', () => {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (selectedOption) {
        if (selectedOption.value === quizData[currentQuestion].correct)
            score++;
        currentQuestion = currentQuestion == quizData.length-1 ? 0 : currentQuestion + 1;
        selectedOption.checked = false;
        // console.log(typeof currentQuestion);
        if(currentQuestion===0)
            showResults();
        else
            updateQuiz();
    } else {
        let errorEl = document.getElementById("error");
        errorEl.className = "error show";
        setTimeout(() => { errorEl.className = "error" }, 1500);
    }

})




