const loader = document.getElementById('loader');
const itemsContainer = document.getElementById('items');
let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();
xhr.addEventListener('readystatechange', () => {
    if(xhr.readyState === xhr.DONE) {
        loader.classList.remove('loader_active');
        let obj = JSON.parse(xhr.responseText);
        for(let item in obj.response.Valute) {
            itemsContainer.insertAdjacentHTML('afterBegin', '<div class="item"><div class="item__code">USD</div><div class="item__value">32</div><div class="item__currency">руб.</div></div>');
            document.querySelector('.item__code').textContent = obj.response.Valute[item].CharCode;
            document.querySelector('.item__value').textContent = obj.response.Valute[item].Value;
        }
    }
})
