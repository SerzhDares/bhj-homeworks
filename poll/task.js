const poll = document.querySelector('.poll')
let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();
xhr.addEventListener('readystatechange', () => {
    if(xhr.readyState === xhr.DONE) {
        let obj = JSON.parse(xhr.responseText);
        poll.insertAdjacentHTML('afterBegin', '<div class="poll__title" id="poll__title"></div><div class="poll__answers poll__answers_active" id="poll__answers"></div>');
        document.getElementById('poll__title').textContent = obj.data.title;
        for(let item in obj.data.answers) {
            console.log(obj.data.answers[item]);
            document.getElementById('poll__answers').insertAdjacentHTML('afterBegin', '<button class="poll__answer"></button>');
            document.querySelector('.poll__answer').textContent = obj.data.answers[item];
            document.querySelector('.poll__answer').addEventListener('click',() => {
                alert('Спасибо, ваш голос засчитан!');
                location.reload();
            })
        }
    }
})