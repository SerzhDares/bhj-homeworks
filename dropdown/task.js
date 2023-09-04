let button = document.querySelector('.dropdown__value');
let openMenu = document.querySelector('.dropdown__list');
let items = Array.from(document.querySelectorAll('.dropdown__item'));
let links = Array.from(document.querySelectorAll('.dropdown__link'));

button.addEventListener('click', () => {
    openMenu.classList.toggle('dropdown__list_active');
});

items.forEach(item =>
    item.addEventListener('click', () => {
        button.textContent = item.textContent;
        openMenu.classList.remove('dropdown__list_active');
    })
);

links.forEach(link =>
    link.addEventListener('click', event => {
        event.preventDefault();
    })
);

