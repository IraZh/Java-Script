const task = document.querySelector('#task');
const button = document.querySelector('#send');
const allTasks = document.querySelector('.all_tasks');
const textInput = document.querySelector('#task');
const emptyList = document.querySelector('#empty-list');
const button2 = document.getElementById('#delete');



const createTask=()=>{
    const taskText = task.value;
    const taskHTML = `
    <li class="task-list">
    <p class="new-task">${taskText}</p>
    <input type="checkbox"  class="checkbox"id="checkbox" />
    <label for="checkbox"  type="checkbox" name="author"></label>
    </li>`;

    allTasks.insertAdjacentHTML('beforeend', taskHTML);

    task.value = "";
    if(allTasks.children.length > 1) {
        emptyList.classList.add('none')
    } 
}

function deleteTasks(){
    allTasks.innerHTML="";
    button2.disabled=true;
    button2.style.cursor="button2:disabled";
    allTasks.length=0;
}

button.addEventListener('click', () =>{
    createTask();
})