let tabArray = Array.from(document.querySelectorAll('.tab'));
let contentArray = Array.from(document.querySelectorAll('.tab__content'));
tabArray.forEach((tab, index) => tab.addEventListener('click', () => {
        tabArray.forEach(elem => {
            elem.classList.remove('tab_active');
        });

        contentArray.forEach(elem => {
            elem.classList.remove('tab__content_active');
        });

        tab.classList.add('tab_active');
        contentArray[index].classList.add('tab__content_active');
}))
