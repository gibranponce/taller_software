const questions = [
    {
        question: "¿Qué base prefieres?",
        options: [
            { text: "Delgada y crujiente", value: 1 },
            { text: "Gruesa y esponjosa", value: 2 },
            { text: "Integral", value: 3 },
            { text: "Sin gluten", value: 4 }
        ]
    },
    {
        question: "¿Qué salsa eliges?",
        options: [
            { text: "Tomate clásico", value: 1 },
            { text: "Barbacoa", value: 2 },
            { text: "Pesto", value: 3 },
            { text: "Sin salsa", value: 4 }
        ]
    },
    {
        question: "¿Qué queso prefieres?",
        options: [
            { text: "Mozzarella", value: 1 },
            { text: "Cheddar", value: 2 },
            { text: "Vegano", value: 3 },
            { text: "Sin queso", value: 4 }
        ]
    },
    {
        question: "Elige un topping principal:",
        options: [
            { text: "Pepperoni", value: 1 },
            { text: "Champiñones", value: 2 },
            { text: "Piña", value: 3 },
            { text: "Aceitunas", value: 4 }
        ]
    },
    {
        question: "¿Con qué bebida acompañas tu pizza?",
        options: [
            { text: "Refresco", value: 1 },
            { text: "Agua", value: 2 },
            { text: "Cerveza", value: 3 },
            { text: "Jugo", value: 4 }
        ]
    }
];

const results = [
    { min: 5, max: 7, text: "¡Tu edad emocional es de 10 años! Eres alegre, espontáneo y amas divertirte." },
    { min: 8, max: 11, text: "¡Tu edad emocional es de 18 años! Eres curioso, creativo y te gusta experimentar." },
    { min: 12, max: 15, text: "¡Tu edad emocional es de 30 años! Eres equilibrado, responsable y buscas el bienestar." },
    { min: 16, max: 20, text: "¡Tu edad emocional es de 50 años! Eres sabio, tranquilo y valoras la sencillez." }
];

let current = 0;
let score = 0;

const quizDiv = document.getElementById('quiz');
const resultDiv = document.getElementById('result');
const restartBtn = document.getElementById('restart');

function showQuestion() {
    const q = questions[current];
    quizDiv.innerHTML = `
        <div class="question">${q.question}</div>
        <div class="options">
            ${q.options.map((opt, i) => `<button class="option-btn" onclick="selectOption(${opt.value})">${opt.text}</button>`).join('')}
        </div>
    `;
}

window.selectOption = function(value) {
    score += value;
    current++;
    if (current < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
};

function showResult() {
    quizDiv.classList.add('hidden');
    let res = results.find(r => score >= r.min && score <= r.max);
    resultDiv.textContent = res ? res.text : "¡Resultado inesperado!";
    resultDiv.classList.remove('hidden');
    restartBtn.classList.remove('hidden');
}

restartBtn.onclick = () => {
    current = 0;
    score = 0;
    quizDiv.classList.remove('hidden');
    resultDiv.classList.add('hidden');
    restartBtn.classList.add('hidden');
    showQuestion();
};

showQuestion();
