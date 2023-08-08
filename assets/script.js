const htmlElement = document.querySelectorAll('html *');
const darkModeSwitch = document.querySelector('.darkModeSwitch');
darkModeSwitch.addEventListener('click', function () {
    for (let i = 0; i < htmlElement.length; i++) {
        htmlElement[i].classList.toggle('dark');
    }
});

// Membangkitkan pilihan komputer
function getCompChoice() {
    const comp = Math.random();

    if (comp <= 0.334) return 'paper';
    if (comp > 0.334 && comp <= 0.667) return 'scissors';
    return 'stone';
}

// Menentukan hasil
function getResult(comp, player) {
    // Menentukan rule
    if (player == comp) return 'Seri';
    if (player == 'stone') return comp == 'scissors' ? 'Kamu Menang!' : 'Kamu Kalah!'; // Sama saja dengan if else
    if (player == 'scissors') return comp == 'paper' ? 'Kamu Menang!' : 'Kamu Kalah!';
    if (player == 'paper') return comp == 'stone' ? 'Kamu Menang!' : 'Kamu Kalah!';
}

const selectStone = document.querySelector('.stone');
selectStone.addEventListener('click', function () {
    const compChoice = getCompChoice();
    const playerChoice = 'stone';
    const result = getResult(compChoice, playerChoice);
    const compImg = document.querySelector('.compImg');
    compImg.setAttribute('src', `media/${compChoice}.png`);
    const divResult = document.getElementById('result');
    divResult.innerHTML = result;
    if (result == 'Kamu Menang!') {
        divResult.style.color = '#00b153';
    } else if (result == 'Kamu Kalah!') {
        divResult.style.color = '#ff2222';
    } else {
        divResult.style.color = '#007d93';
    }
});

const selectScissors = document.querySelector('.scissors');
selectScissors.addEventListener('click', function () {
    const compChoice = getCompChoice();
    const playerChoice = 'scissors';
    const result = getResult(compChoice, playerChoice);
    const compImg = document.querySelector('.compImg');
    compImg.setAttribute('src', `media/${compChoice}.png`);
    const divResult = document.getElementById('result');
    divResult.innerHTML = result;
    if (result == 'Kamu Menang!') {
        divResult.style.color = '#00b153';
    } else if (result == 'Kamu Kalah!') {
        divResult.style.color = '#ff2222';
    } else {
        divResult.style.color = '#007d93';
    }
});

const selectPaper = document.querySelector('.paper');
selectPaper.addEventListener('click', function () {
    const compChoice = getCompChoice();
    const playerChoice = 'paper';
    const result = getResult(compChoice, playerChoice);
    const compImg = document.querySelector('.compImg');
    compImg.setAttribute('src', `media/${compChoice}.png`);
    const divResult = document.getElementById('result');
    divResult.innerHTML = result;
    if (result == 'Kamu Menang!') {
        divResult.style.color = '#00b153';
    } else if (result == 'Kamu Kalah!') {
        divResult.style.color = '#ff2222';
    } else {
        divResult.style.color = '#007d93';
    }
});
