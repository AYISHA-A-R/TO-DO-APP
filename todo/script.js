function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    
    if (taskText === '') return;
  
    const li = document.createElement('li');
    li.textContent = taskText;
  
    li.addEventListener('click', () => {
      li.classList.toggle('completed');
    });
  
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '✖';
    deleteBtn.className = 'delete-btn';
    deleteBtn.onclick = () => li.remove();
  
    li.appendChild(deleteBtn);
    document.getElementById('taskList').appendChild(li);
  
    taskInput.value = '';
  }
  