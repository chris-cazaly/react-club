// SOUNDS \\

const coin1 = document.getElementById('coin1');
const coin2 = document.getElementById('coin2');
const coin3 = document.getElementById('coin3');
const ding1 = document.getElementById('ding1');
const ding2 = document.getElementById('ding2');
const ding3 = document.getElementById('ding3');
const ding4 = document.getElementById('ding4');
const chime1 = document.getElementById('chime1');

// BUTTONS \\

const playButton1 = document.getElementById('playButton1');
const playButton2 = document.getElementById('playButton2');
const playButton3 = document.getElementById('playButton3');
const playButton4 = document.getElementById('playButton4');
const playButton5 = document.getElementById('playButton5');
const playButton6 = document.getElementById('playButton6');
const playButton7 = document.getElementById('playButton7');
const playButton8 = document.getElementById('playButton8');

playButton1.addEventListener('click', () => {
    coin1.play();
})

playButton2.addEventListener('click', () => {
    coin2.play();
})

playButton3.addEventListener('click', () => {
    coin3.play();
})

playButton4.addEventListener('click', () => {
    ding1.play();
})

playButton5.addEventListener('click', () => {
    ding2.play();
})

playButton6.addEventListener('click', () => {
    ding3.play();
})

playButton7.addEventListener('click', () => {
    ding4.play();
})

playButton8.addEventListener('click', () => {
    chime1.play();
})

