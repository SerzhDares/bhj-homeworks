const cookieClick = document.getElementById("cookie");
const countClick = document.getElementById("clicker__counter");
cookieClick.onclick = () => {
    countClick.textContent++;
    if (cookieClick.width === 200) {
        cookieClick.width = 230;
    } else {
        cookieClick.width = 200;
    }
};