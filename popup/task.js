const popup = document.querySelector('.modal');
popup.classList.add('modal_active');
const popupClose = document.querySelector('.modal__close');

let getCookie = key => {
    const pairs = document.cookie.split('; ');
    const cookie = pairs.find(p => p.startsWith(key + '='));
    return cookie.substring(key.length + 1);
}

if (getCookie('modal-active') == 'no') {
    popup.classList.remove('modal_active');
};

let setCookie = (key, value) => {
    document.cookie = key + '=' + encodeURIComponent(value);
}

popupClose.addEventListener('click', () => {
    popup.classList.remove('modal_active');
    setCookie('modal-active', 'no');
})