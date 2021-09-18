let timer = document.querySelectorAll('span')[1];
let minute = document.querySelector('span');
let userChoice = document.querySelector('#opt');
let content = document.querySelector('.alarm');
const alarm = document.createElement('audio');
let tick = document.createElement('audio')
tick.setAttribute('id','ticking')

let number = 1;
let delay = 60;
let count = 0;

userChoice.addEventListener('change', function () {
    delay = 60;
    number = parseInt(userChoice.value);
    countDown(number);
    alarm.src = '';
    userChoice.disabled = true;
})

function countDown(number) {

    const id = setInterval(() => {
        console.log(delay,'settimeout')
        tick.src = 'Audio/clock.mp3';
        tick.play();
        content.appendChild(tick);
        if (number >= 2) {
            if (count === 60) {
                timer.innerText = '0' + delay;
                minute.innerText = `0${number - 1}:`;
                count = 0;
                delay = 60;
                number = number - 1;
            }
            else {
                if (delay <= 9) {
                    timer.innerText = '0' + delay;
                    minute.innerText = `0${number - 1}:`;
                }

                else if (delay === 60) {
                    timer.innerText = '00'
                    minute.innerText = `0${number}:`;
                }
                else {
                    timer.innerText = delay
                    minute.innerText = `0${number - 1}:`;
                }
            }
            count += 1;
        }
        else {
            if (delay <= 9) {
                timer.innerText = '0' + delay;
                minute.innerText = `0${number - 1}:`;
            }
            else if (delay === 60) {
                timer.innerText = '00';
                minute.innerText = `0${number}:`;
            }
            else {
                timer.innerText = delay;
                minute.innerText = `0${number - 1}:`;
            }
        }
        if (delay === 0) {
            timer.innerText = '00';
            minute.innerText = `0${number - 1}:`;
            tick.buffered=true
            clearInterval(id);
            alarm.src = 'Audio/SsAoiqg1LYP.mp3';
            alarm.loop = true;
            alarm.play();
            content.appendChild(alarm);
            userChoice.disabled = false;
        }
        delay = delay - 1;
    }, 1000)   
};
