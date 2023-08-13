const deadMole = document.getElementById("dead");
const missMole = document.getElementById("lost");
const hole = document.getElementsByClassName("hole");
for (let i = 1; i <= hole.length; i++) {
    hole[i].onclick = () => {
        if (hole[i].className.includes('hole_has-mole')) {
            deadMole.textContent++;
        }
        else {
            missMole.textContent++;
        }
        if (deadMole.textContent == 10) {
            alert("Победа!");
            deadMole.textContent = 0;
            missMole.textContent = 0;
        }
        if (missMole.textContent == 5) {
            alert("Вы проиграли!");
            deadMole.textContent = 0;
            missMole.textContent = 0;
        }
    }
}