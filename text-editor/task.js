let editor = document.getElementById('editor');
editor.value = localStorage.getItem('text');
editor.oninput = () => {
    localStorage.setItem('text', editor.value);
}

// localStorage.removeItem('text');