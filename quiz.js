// Array of quiz questions
const questions = [
    {
        question: "What does DOM stand for?",
        options: ["Document Object Model", "Document Oriented Model", "Data Object Model", "Digital Ordinance Model"],
        answer: "Document Object Model"
    },
    {
        question: "Which keyword is used to declare variables in JavaScript?",
        options: ["var", "let", "const", "all of the above"],
        answer: "all of the above"
    },
    {
        question: "What is the output of 3 + '3' in JavaScript?",
        options: ["6", "'33'", "33", "undefined"],
        answer: "'33'"
    },
    {
        question: "Which built-in method calls a function for each element in the array?",
        options: [".forEach()", ".loop()", ".each()", ".every()"],
        answer: ".forEach()"
    },
    {
        question: "How do you round the number 7.25, to the nearest integer?",
        options: ["Math.rnd(7.25)", "rnd(7.25)", "Math.round(7.25)", "round(7.25)"],
        answer: "Math.round(7.25)"
    },
    {
        question: "Which event occurs when the user clicks on an HTML element?",
        options: ["onmouseclick", "onmouseover", "onclick", "onchange"],
        answer: "onclick"
    },
 
    
    {
        question: "What is the correct way to write an if statement in JavaScript?",
        options: ["if i == 5 then", "if i = 5", "if i = 5 then", "if (i == 5)"],
        answer: "if (i == 5)"
    },
    {
        question: "How do you declare a JavaScript variable?",
        options: ["variable carName;", "v carName;", "var carName;", "declare carName;"],
        answer: "var carName;"
    },
    {
        question: "Which operator is used to assign a value to a variable?",
        options: ["*", "-", "=", "+"],
        answer: "="
    },
    {
        question: "What will the following code output: console.log(typeof [1, 2, 3]);",
        options: ["number", "object", "array", "undefined"],
        answer: "object"
    },
    {
        question: "Which method returns the length of a string?",
        options: [".size()", ".length()", ".index()", ".count()"],
        answer: ".length()"
    },
    {
        question: "Which built-in method reverses the order of the elements of an array?",
        options: [".reverse()", ".sort()", ".changeOrder(order)", ".modifyOrder()"],
        answer: ".reverse()"
    },
    {
        question: "What is the correct JavaScript syntax for opening a new window called 'myWindow'?",
        options: ["window.open('http://www.example.com', 'myWindow');", "new Window('http://www.example.com', 'myWindow');", "open.window('http://www.example.com', 'myWindow');", "open('http://www.example.com', 'myWindow');"],
        answer: "window.open('http://www.example.com', 'myWindow');"
    },
    {
        question: "How do you find the number with the highest value of x and y?",
        options: ["Math.max(x, y)", "Math.ceil(x, y)", "ceil(x, y)", "top(x, y)"],
        answer: "Math.max(x, y)"
    },
    {
        question: "Which function is used to parse a string to integer in JavaScript?",
        options: ["parseInt()", "parseInteger()", "String.toInteger()", "strToInt()"],
        answer: "parseInt()"
    },
    {
        question: "What does the method Array.prototype.map() do?",
        options: ["Applies a function to each element in the array and returns a new array", "Sorts the elements of an array", "Filters elements in an array based on a condition", "Checks if all elements in an array pass a test"],
        answer: "Applies a function to each element in the array and returns a new array"
    },
    {
        question: "Which keyword is used to exit from a loop in JavaScript?",
        options: ["break", "return", "continue", "exit"],
        answer: "break"
    },
    // Additional questions to make a total of 40
    {
        question: "What does JSON stand for?",
        options: ["JavaScript Object Notation", "Java Source Object Notation", "JavaScript Oriented Notation", "Java Source Oriented Notation"],
        answer: "JavaScript Object Notation"
    },
    {
        question: "Which of the following is a JavaScript framework?",
        options: ["React", "Laravel", "Django", "Flask"],
        answer: "React"
    },
    {
        question: "Which company developed JavaScript?",
        options: ["Netscape", "Google", "Microsoft", "Apple"],
        answer: "Netscape"
    },
    {
        question: "Which of the following is not a reserved word in JavaScript?",
        options: ["interface", "throws", "program", "short"],
        answer: "program"
    },
    {
        question: "Which method converts JSON data to a JavaScript object?",
        options: ["JSON.parse()", "JSON.stringify()", "JSON.object()", "JSON.convert()"],
        answer: "JSON.parse()"
    },
    {
        question: "Which of the following is a JavaScript package manager?",
        options: ["npm", "pip", "composer", "gem"],
        answer: "npm"
    },
    {
        question: "What is the file extension for JavaScript files?",
        options: [".java", ".js", ".jsx", ".javascript"],
        answer: ".js"
    },
    {
        question: "Which JavaScript method is used to access an HTML element by its ID?",
        options: ["getElementById()", "getElementByTagName()", "getElementByClassName()", "getElementByName()"],
        answer: "getElementById()"
    },
    {
        question: "Which symbol is used for comments in JavaScript?",
        options: ["//", "#", "/* */", "<!-- -->"],
        answer: "//"
    },
    {
        question: "Which of the following methods can be used to create a new array?",
        options: ["Array.of()", "Array.from()", "new Array()", "All of the above"],
        answer: "All of the above"
    },
    {
        question: "What is the default value of an uninitialized variable in JavaScript?",
        options: ["undefined", "null", "0", "NaN"],
        answer: "undefined"
    },
    {
        question: "Which JavaScript method is used to remove the last element from an array?",
        options: ["pop()", "push()", "shift()", "unshift()"],
        answer: "pop()"
    },
    {
        question: "Which keyword is used to create a constant in JavaScript?",
        options: ["constant", "const", "let", "var"],
        answer: "const"
    },
    {
        question: "Which JavaScript method is used to add one or more elements to the end of an array?",
        options: ["push()", "pop()", "shift()", "unshift()"],
        answer: "push()"
    },
    {
        question: "Which JavaScript method is used to join all elements of an array into a string?",
        options: ["join()", "concat()", "push()", "pop()"],
        answer: "join()"
    },
    {
        question: "Which of the following is not a valid JavaScript variable name?",
        options: ["_name", "$name", "1name", "name1"],
        answer: "1name"
    },
    {
        question: "Which JavaScript method is used to remove the first element from an array?",
        options: ["shift()", "unshift()", "pop()", "push()"],
        answer: "shift()"
    },
    {
        question: "Which JavaScript method is used to add one or more elements to the beginning of an array?",
        options: ["unshift()", "shift()", "push()", "pop()"],
        answer: "unshift()"
    },
    {
        question: "What is the output of the following code: console.log(typeof null);",
        options: ["null", "object", "undefined", "NaN"],
        answer: "object"
    },
    {
        question: "Which JavaScript method can be used to convert a string to lowercase?",
        options: ["toLowerCase()", "toLower()", "changeCase(lower)", "convertToLower()"],
        answer: "toLowerCase()"
    },
    {
        question: "Which JavaScript method can be used to convert a string to uppercase?",
        options: ["toUpperCase()", "toUpper()", "changeCase(upper)", "convertToUpper()"],
        answer: "toUpperCase()"
    },
    {
        question: "Which JavaScript method can be used to combine two or more arrays?",
        options: ["concat()", "join()", "push()", "pop()"],
        answer: "concat()"
    },
    {
        question: "Which JavaScript method can be used to return the string representation of a number?",
        options: ["toString()", "toNumber()", "toFixed()", "toPrecision()"],
        answer: "toString()"
    }
];

let currentQuestionIndex = 0;
let score = 0;
let timer;
const totalTime = 40 * 60; // 40 minutes in seconds
let timeLeft = totalTime;

const quizContainer = document.getElementById('quiz');
const nextButton = document.getElementById('next-btn');
const resultsContainer = document.getElementById('results');
const timeContainer = document.getElementById('time');

function showQuestion() {
    const question = questions[currentQuestionIndex];
    const questionNumber = currentQuestionIndex + 1; 

    const answers = question.options.map((option, index) => `
        <label>
            <input type="radio" name="question${currentQuestionIndex}" value="${option}">
            ${option}
        </label>
    `).join('');

    quizContainer.innerHTML = `
        <div class="question">Question ${questionNumber}: ${question.question}</div>
        <div class="answers">${answers}</div>
    `;

    nextButton.style.display = 'block';

    if (currentQuestionIndex === 0) {
        startTimer();
    }
}

function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timeContainer.innerHTML = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        
        if (timeLeft <= totalTime * 0.2) {
            timeContainer.style.color = 'red';
        } else if (timeLeft <= totalTime * 0.5) {
            timeContainer.style.color = 'orange';
             
            
        } else {
            timeContainer.style.color = 'green';
          
            
        }

        if (timeLeft <= 0) {
            clearInterval(timer);
            showResults();
        }
    }, 1000);
}

function showNextQuestion() {
    const selectedAnswer = document.querySelector(`input[name="question${currentQuestionIndex}"]:checked`);
    if (!selectedAnswer) {
        Swal.fire({
            title: "No Answer Selected",
            text: "Please select an any answer.",
            icon: "error",
            confirmButtonText: "Okay"
        });
        return;
    }

    const isCorrect = selectedAnswer.value === questions[currentQuestionIndex].answer;
    if (isCorrect) score++;

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    clearInterval(timer);

    const passScore = 25;
    const passed = score >= passScore;

    Swal.fire({
        title: passed ? "Congratulations! <br> You passed" : "Sorry! <br> You failed",
        text: `You answered ${score} out of ${questions.length} questions correctly.`,
        icon: passed ? "success" : "error",
        confirmButtonText: "OK"
    });
}

nextButton.addEventListener('click', showNextQuestion);

document.addEventListener('DOMContentLoaded', () => {
    showQuestion();
});

