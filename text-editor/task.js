let editor = document.getElementById('editor');
let text = localStorage.getItem('text');

if(text) {
    editor.value = text;
} else {
    editor.oninput = () => {
        localStorage.setItem('text', editor.value);
    }  
}

// localStorage.removeItem('text');