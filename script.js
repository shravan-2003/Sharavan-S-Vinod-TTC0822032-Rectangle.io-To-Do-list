
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');


function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }


  const existingTasks = [...taskList.querySelectorAll('.task span:first-child')];
  if (existingTasks.some(task => task.textContent === taskText)) {
    alert('Task already exists!');
    return;
  }

  const taskDiv = document.createElement('div');
  taskDiv.classList.add('task', 'personal');

  const taskName = document.createElement('span');
  taskName.textContent = taskText;

  const taskTime = document.createElement('span');
  const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  taskTime.textContent = currentTime;

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.classList.add('delete-btn');
  deleteButton.onclick = () => taskDiv.remove();

  taskDiv.appendChild(taskName);
  taskDiv.appendChild(taskTime);
  taskDiv.appendChild(deleteButton);

  taskList.appendChild(taskDiv);


  taskInput.value = '';


  alert('Task added successfully!');
}


taskInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    addTask();
  }
});
