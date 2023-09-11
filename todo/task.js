const tasksList = document.querySelector('.tasks__list');
const form = document.querySelector('form');
const input = document.getElementById('task__input');
form.addEventListener('submit', e => {
    e.preventDefault();
    if(input.value) {
        tasksList.insertAdjacentHTML('afterBegin', '<div class="task"><div class="task__title"></div><a href="#" class="task__remove">&times;</a></div>');
        document.querySelector('.task__title').textContent = input.value;
        form.reset();
    }
    const remove = Array.from(document.querySelectorAll('.task__remove'));
    const task = Array.from(document.querySelectorAll('.task'));
    remove.forEach((e, i) => {
        e.addEventListener('click', e => {
            e.preventDefault();
            task[i].remove();
        })
    })
})