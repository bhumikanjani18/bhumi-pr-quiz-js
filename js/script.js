import quizQuestions from "./mcq.js";

const displayQus = document.querySelector('.display-quiz .card-header h5');
const displayOptions = document.querySelector('.display-quiz .card-body ul');
const displaytleftList = document.querySelector('.dispaly-list ul');
const displayButtons = document.querySelector('.display-quiz-button');
const next = document.getElementById('next');
const prev = document.getElementById('prev');
const queNum = document.getElementById('que-num');

let currQus = 0;

const handleOpt = () => {

    displayQus.textContent = `${currQus + 1}` + ".) " + quizQuestions[currQus].question;
    queNum.innerHTML = `<strong>❓ Q ${currQus + 1} / 30 </strong>`;
    displayOptions.innerHTML = '';

    // array options
    quizQuestions[currQus].options.forEach((option) => {
        let li = document.createElement('li');
        let input = document.createElement('input');
        let label = document.createElement('label');
        input.value = option
        input.type = "radio";
        input.name = currQus;
        input.checked = quizQuestions[currQus].yourans == option
        li.appendChild(input);
        label.textContent = option;
        li.appendChild(label);
        displayOptions.appendChild(li);

    })

    const options = document.querySelectorAll('.display-quiz .card-body input[type="radio"]')

    options.forEach((option) => {
        option.addEventListener('change', (e) => {
            const { name, value } = e.target;
            quizQuestions[name].yourans = value;
        })
    })

    displayButtons.innerHTML = ''
    quizQuestions.forEach((element, index) => {
        let btn = document.createElement('button');
        btn.id = 'boxquesbtn'
        let btnColor = element.yourans
            ? 'btn-attempted'
            : 'btn-color';
        btn.classList.add('btn', 'my-2', 'mx-1', 'justify-content-center', 'align-items-center', btnColor);
        btn.textContent = index + 1;
        displayButtons.appendChild(btn);

    })

    const boxButtons = document.querySelectorAll('#boxquesbtn');

    boxButtons.forEach((box, index) => {
        box.addEventListener('click', (box) => {
            currQus = index - 1;
            handleNext();
        })
    })
}
handleOpt();

const handleNext = () => {
    if (currQus < quizQuestions.length - 1) {
        currQus++;
        handleOpt();
    }
}
next.addEventListener('click', handleNext);

const handlePrev = () => {
    if (currQus > 0) {
        currQus--;
        handleOpt();
    }
}
prev.addEventListener('click', handlePrev);

//  quizQuestions aa array na badha elements ne one by one iterate karse aetle for each loop lidhu

const handleLeftlist = () => {
    quizQuestions.forEach((value, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
        <button class="btn btn-info w-100 gradient-btn rounded-pill p-3 padding" id="quesbtn">
           Question ${index + 1}
            </button>`
        li.classList.add('p-2');

        displaytleftList.appendChild(li);
    });
}
handleLeftlist();

const listButtons = document.querySelectorAll('#quesbtn');

listButtons.forEach((element, index) => {
    element.addEventListener('click', (e) => {
        currQus = index - 1;
        handleNext();
    })
})

const quizSubmit = document.querySelector('#quiz-submit');
let quizScore = document.getElementById('quiz-score')
const result = () => {
    let count = 0;
    quizQuestions.forEach((element) => {
        if (element.answer == element.yourans) {
            count++;
        }
    })
    quizScore.textContent = count;
}
quizSubmit.addEventListener('click', result);

const counter = document.getElementById('count');

const handleCounter = (lastValue) => {
    let count = lastValue; 

    const intervalId = setInterval(() => {
        let minutes = parseInt(count / 60);
        let seconds = count % 60;

        counter.textContent = `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;

        if (count === 0) {
            clearInterval(intervalId);
            alert("⏰ Time up!");
        } else {
            count--; 
        }
    }, 1000);
}

handleCounter(600);