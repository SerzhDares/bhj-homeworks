const phrases = Array.from(document.getElementsByClassName('rotator__case'));
let phrasesCounter = 0;
setInterval(() => {
    phrases[phrasesCounter].classList.remove('rotator__case_active');
    phrasesCounter++;
    if(phrasesCounter >= phrases.length) {
        phrasesCounter = 0;
    }
    phrases[phrasesCounter].classList.add('rotator__case_active');
}, 1000)
