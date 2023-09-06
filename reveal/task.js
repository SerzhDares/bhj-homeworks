const position = Array.from(document.getElementsByClassName('reveal'));
position.forEach(el => 
    window.addEventListener('scroll', () => {
        const { top, bottom } = el.getBoundingClientRect();
        if(bottom > 0 && top < window.innerHeight) {
            el.classList.add('reveal_active');
            }
    })
)
