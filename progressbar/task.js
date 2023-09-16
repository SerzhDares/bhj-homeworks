const progress = document.getElementById('progress');
document.getElementById('form').addEventListener('submit', e => {
    e.preventDefault();
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('readystatechange', () => {
        if(xhr.readyState === xhr.DONE) {

        }
    })
    
    xhr.upload.onprogress = e => {  
        progress.value = e.loaded/e.total;
    }

    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
    const formData = new FormData(document.getElementById('form'));
    xhr.send(formData);
})