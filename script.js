const questions = {
    easy: [
        { question: "What does HTML stand for?", options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"], answer: 0 },
        { question: "Which HTML tag is used to define an internal style sheet?", options: ["<css>", "<script>", "<style>"], answer: 2 },
        { question: "Which HTML element is used for the largest heading?", options: ["<h1>", "<heading>", "<h6>"], answer: 0 },
        { question: "What does CSS stand for?", options: ["Cascading Style Sheets", "Creative Style Sheets", "Computer Style Sheets"], answer: 0 },
        { question: "Which property is used to change the background color in CSS?", options: ["background-color", "bgcolor", "color"], answer: 0 },
        { question: "How do you create a function in JavaScript?", options: ["function myFunction()", "function:myFunction()", "function = myFunction()"], answer: 0 },
        { question: "How do you add a comment in HTML?", options: ["<!-- This is a comment -->", "// This is a comment", "# This is a comment"], answer: 0 },
        { question: "What is the correct HTML element for inserting a line break?", options: ["<break>", "<lb>", "<br>"], answer: 2 },
        { question: "Which HTML attribute is used to define inline styles?", options: ["style", "class", "font"], answer: 0 },
        { question: "Which CSS property controls the text size?", options: ["font-size", "text-size", "font-style"], answer: 0 }
    ],
    moderate: [
        { question: "How do you select elements with class name 'example' in CSS?", options: [".example", "#example", "*example"], answer: 0 },
        { question: "In JavaScript, what does DOM stand for?", options: ["Document Object Model", "Data Object Manipulation", "Display Object Management"], answer: 0 },
        { question: "What is the correct syntax for referring to an external JavaScript file?", options: ["<script src='xxx.js'>", "<script href='xxx.js'>", "<script ref='xxx.js'>"], answer: 0 },
        { question: "Which HTML tag is used to create an unordered list?", options: ["<ul>", "<ol>", "<list>"], answer: 0 },
        { question: "How do you make a numbered list in HTML?", options: ["<ol>", "<ul>", "<dl>"], answer: 0 },
        { question: "Which CSS property is used to change the text color?", options: ["color", "font-color", "text-color"], answer: 0 },
        { question: "Which JavaScript method is used to write content to the document?", options: ["document.write()", "console.log()", "document.output()"], answer: 0 },
        { question: "What HTML attribute is used to specify a unique identifier?", options: ["id", "class", "name"], answer: 0 },
        { question: "How can you make text bold in HTML?", options: ["<b>", "<strong>", "Both <b> and <strong>"], answer: 2 },
        { question: "In CSS, how do you select elements with the attribute 'target'?", options: ["[target]", ".target", "#target"], answer: 0 }
    ],
    difficult: [
        { question: "Which JavaScript function is used to parse a JSON string to an object?", options: ["JSON.parse()", "JSON.stringify()", "JSON.toObject()"], answer: 0 },
        { question: "Which CSS pseudo-class matches only links that have not been visited?", options: [":hover", ":link", ":active"], answer: 1 },
        { question: "How do you call a JavaScript function named 'myFunction'?", options: ["call myFunction()", "myFunction()", "call function myFunction"], answer: 1 },
        { question: "Which CSS property is used to create space between the element's border and inner content?", options: ["padding", "margin", "border-spacing"], answer: 0 },
        { question: "What is the correct JavaScript syntax to open a new window?", options: ["window.open()", "window.new()", "window.popup()"], answer: 0 },
        { question: "What does the '===' operator mean in JavaScript?", options: ["Equal value and type", "Equal value only", "Equal type only"], answer: 0 },
        { question: "Which HTML element is used to define important text?", options: ["<strong>", "<b>", "<em>"], answer: 0 },
        { question: "Which JavaScript method returns the length of a string?", options: ["length()", "getLength()", "stringLength"], answer: 0 },
        { question: "In CSS, which property changes the left margin of an element?", options: ["margin-left", "padding-left", "left-margin"], answer: 0 },
        { question: "Which JavaScript method is used to select an HTML element by its ID?", options: ["document.getElementById()", "document.querySelector()", "document.getElementByClass()"], answer: 0 }
    ]
};

let currentLevel = '';
let currentQuestionIndex = 0;
let score = 0;
let streak = 0;
let maxStreak = 0;

function startQuiz(level) {
    currentLevel = level;
    currentQuestionIndex = 0;
    score = 0;
    streak = 0;
    maxStreak = 0;

    document.querySelector('.level-selection').classList.add('hidden');
    document.querySelector('#quiz-section').classList.remove('hidden');
    document.querySelector('#result-section').classList.add('hidden');

    document.getElementById('level-title').textContent = ${level.charAt(0).toUpperCase() + level.slice(1)} Level;
    loadQuestion();
}

function loadQuestion() {
    const questionData = questions[currentLevel][currentQuestionIndex];
    document.getElementById('question').textContent = questionData.question;

    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';

    questionData.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.onclick = () => checkAnswer(index);
        optionsContainer.appendChild(button);
    });
    document
