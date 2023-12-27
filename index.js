let timerId; // переменная, которая будет хранить ID таймера


const startButton = document.querySelector('#start');
startButton.addEventListener('click', function () {
    // НУЖНО ПОГУГЛИТЬ ЧТО ТАКОЕ setInterval
    if (!timerId) {
        timerId = setInterval(updateClock, 1000); // запускаем  updateClock() каждую секунду
    }
});


const stopButton = document.querySelector('#stop');
stopButton.addEventListener('click', function () {
    // НУЖНО ПОГУГЛИТЬ ЧТО ТАКОЕ clearInterval
    clearInterval(timerId); // останавливаем таймер
    timerId = null;
});


function updateClock() {
    const clock = document.querySelector('#clock');
    // НУЖНО ПОГУГЛИТЬ ЧТО ТАКОЕ new Date()
    const now = new Date();
    const hours = now.getHours()
    const minutes = now.getMinutes()
    const seconds = now.getSeconds()
    clock.textContent = hours + ':' + `${minutes < 10 ? '0' + minutes : minutes}` + ':' + `${seconds < 10 ? '0' + seconds : seconds}`;
}
