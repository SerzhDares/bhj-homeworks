const changeTimer = () => {
    let currentState = document.getElementById('timer');
    currentState.textContent -= 1;
    if (currentState.textContent == 0) {
        alert("Вы победили в конкурсе!");
        clearInterval(intervalId);
    }
};

const intervalId = setInterval(changeTimer, 1000);
