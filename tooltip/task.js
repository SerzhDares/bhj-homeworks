const links = Array.from(document.querySelectorAll('.has-tooltip'));

links.forEach((link, index) => {
    link.addEventListener('click', e => {
        e.preventDefault();
        links[index].insertAdjacentHTML('beforeEnd', '<div class="tooltip">Текст подсказки</div>');
        const newDiv = document.querySelector('.tooltip');
        newDiv.textContent = link.title;
        newDiv.style.top = links[index].getBoundingClientRect().bottom + 'px';
        newDiv.style.left = links[index].getBoundingClientRect().left + 'px';
        newDiv.classList.toggle('tooltip_active');
    })

})