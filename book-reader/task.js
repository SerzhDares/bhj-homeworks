let letters = Array.from(document.getElementsByClassName('font-size'));
let text = document.querySelector('.book');
letters.forEach((letter, index) => {

    letter.addEventListener('click', el => {
        el.preventDefault();

        letters.forEach(el => {
            el.classList.remove('font-size_active');
        })

        text.classList.remove('book_fs-small');
        text.classList.remove('book_fs-big');
        
        letter.classList.add('font-size_active');

        if (index === 0) {
            text.classList.add('book_fs-small');
        }

        if (index === 2) {
            text.classList.add('book_fs-big');
        }
    })
})