import { Todo } from './components/Todo.js';

const addNewTask = document.querySelector('.add-new');
const lightbox = document.querySelector('.lightbox');
const formAdd = lightbox.querySelector('form.add');
const textarea = formAdd.querySelector('textarea');
const buttonCancel = formAdd.querySelector('button.cancel');
const buttonAdd = formAdd.querySelector('button.add');

// init objects
const todo = new Todo({
    selector: 'main'
});
todo.init();

// add events
addNewTask.addEventListener('click', () => {
    lightbox.dataset.form = 'add';
    lightbox.classList.add('show');
})

addEventListener('keyup', ({ key }) => {
    if (key === 'Escape') {
        lightbox.classList.remove('show');
    }
})

buttonCancel.addEventListener('click', e => {
    e.preventDefault();
    lightbox.classList.remove('show');
})

buttonAdd.addEventListener('click', e => {
    e.preventDefault();
    const task = {
        text: textarea.value,
        isCompleted: false
    }
    todo.addTask(task);
    textarea.value = '';
    lightbox.classList.remove('show');
})