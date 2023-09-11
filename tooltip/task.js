const links = Array.from(document.querySelectorAll('.has-tooltip'));

links.forEach((link, index) => {
    link.addEventListener('click', e => {
        e.preventDefault();
        links[index].insertAdjacentHTML('beforeEnd', '<div class="tooltip">Текст подсказки</div>');
        const newDiv = document.querySelector('.tooltip');
        newDiv.textContent = link.title;
        // if(newDiv.classList.contains('tooltip_active')) {
        //     newDiv.classList.remove('tooltip_active');
        // }
        newDiv.classList.toggle('tooltip_active');
    })

})