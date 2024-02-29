class TodoList {
    constructor() {
      this.tasks = [];
    }

    addTask(task) {
      this.tasks.push(task);
      this.displayTasks();
    }

    displayTasks() {
      const taskList = document.getElementById("task-list");
      taskList.innerHTML = ""; // Clear existing tasks

      this.tasks.forEach(task => {
        const listItem = document.createElement("task-form");
        listItem.textContent = task;
        taskList.appendChild(listItem);
      });
    }
  }

  const myTodoList = new TodoList();


document.addEventListener('DOMContentLoaded', () => {
    fetchTasks();
});
  
  function fetchTasks() {
    const tasks = getTasksFromLocalStorage();
    displayTasks(tasks);
  }
  
  function displayTasks(tasks) {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';
  
    tasks.forEach((task, index) => {
      const taskElement = document.createElement('div');
      taskElement.classList.add('task');
      taskElement.innerHTML = `
        <span>${task}</span>
        <button onclick="deleteTask(${index})">Delete</button>
      `;
      taskList.appendChild(taskElement);
    });
  }
  
  function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();
  
    if (taskText !== '') {
      const tasks = getTasksFromLocalStorage();
      tasks.push(taskText);
      saveTasksToLocalStorage(tasks);
  
      taskInput.value = '';
      fetchTasks();
    }
  }
  
  function deleteTask(index) {
    const tasks = getTasksFromLocalStorage();
    tasks.splice(index, 1);
    saveTasksToLocalStorage(tasks);
  
    fetchTasks();
  }
  
  function getTasksFromLocalStorage() {
    const tasksString = localStorage.getItem('tasks');
    return tasksString ? JSON.parse(tasksString) : [];
  }
  
  function saveTasksToLocalStorage(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  