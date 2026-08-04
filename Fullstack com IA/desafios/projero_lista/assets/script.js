/* filepath: c:\Users\Rafael Dorcino\Documents\GitHub\Html-Css-B7Web\Fullstack com IA\desafios\projero_lista\assets\script.js */
const taskForm = document.querySelector('#taskForm');
const taskInput = document.querySelector('#taskInput');
const taskList = document.querySelector('#taskList');

let tasks = [];

function renderTasks() {
  taskList.innerHTML = '';

  if (tasks.length === 0) {
    const emptyMessage = document.createElement('li');
    emptyMessage.className = 'empty';
    emptyMessage.textContent = 'Nenhuma tarefa adicionada.';
    taskList.appendChild(emptyMessage);
    return;
  }

  tasks.forEach((task) => {
    const item = document.createElement('li');
    item.className = 'task-item';

    if (task.done) {
      item.classList.add('done');
    }

    const checkButton = document.createElement('button');
    checkButton.className = 'task-check';
    checkButton.dataset.action = 'toggle';
    checkButton.dataset.id = task.id;
    checkButton.textContent = task.done ? '✓' : '○';
    checkButton.setAttribute(
      'aria-label',
      task.done ? 'Desmarcar tarefa' : 'Marcar tarefa como concluída'
    );

    const text = document.createElement('span');
    text.className = 'task-text';
    text.textContent = task.text;

    const deleteButton = document.createElement('button');
    deleteButton.className = 'task-delete';
    deleteButton.dataset.action = 'delete';
    deleteButton.dataset.id = task.id;
    deleteButton.textContent = 'Excluir';

    item.append(checkButton, text, deleteButton);
    taskList.appendChild(item);
  });
}

function addTask(text) {
  const taskText = text.trim();

  if (taskText === '') {
    alert('Digite uma tarefa antes de adicionar.');
    return;
  }

  tasks.push({
    id: Date.now(),
    text: taskText,
    done: false
  });

  renderTasks();
}

function toggleTask(id) {
  tasks = tasks.map((task) => {
    if (task.id === id) {
      return { ...task, done: !task.done };
    }
    return task;
  });

  renderTasks();
}


function deleteTask(id) {
  tasks = tasks.filter((task) => task.id !== id);
  renderTasks();
}

taskForm.addEventListener('submit', (event) => {
  event.preventDefault();
  addTask(taskInput.value);
  taskInput.value = '';
  taskInput.focus();
});

taskList.addEventListener('click', (event) => {
  const button = event.target.closest('button[data-action]');
  if (!button) {
    return;
  }

  const id = Number(button.dataset.id);
  const action = button.dataset.action;

  if (action === 'toggle') {
    toggleTask(id);
  }

  if (action === 'delete') {
    deleteTask(id);
  }
});

renderTasks();