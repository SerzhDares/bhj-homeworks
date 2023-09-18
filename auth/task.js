const form = document.getElementById('signin__form');
const spanId = document.getElementById('user_id');
const welcome = document.getElementById('welcome');
if(localStorage.getItem('user_id')) {
    welcome.classList.add('welcome_active');
    spanId.textContent = localStorage.getItem('user_id');
}
form.addEventListener('submit', e => {
    e.preventDefault();
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
    const formData = new FormData(form);
    xhr.send(formData);
    xhr.addEventListener('readystatechange', () => {
        if(xhr.readyState === xhr.DONE) {
            let response = JSON.parse(xhr.responseText);
            if(response.success == true) {
                localStorage.setItem('user_id', response.user_id);
                spanId.textContent = localStorage.getItem('user_id');
                welcome.classList.add('welcome_active');
            } else {
                alert('Неверный логин/пароль');
            }
        }
    })
})