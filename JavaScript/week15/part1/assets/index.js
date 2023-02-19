const task = document.querySelector('#task');
const button = document.querySelector('#send');
const allTasks = document.querySelector('.all_tasks');
const textInput = document.querySelector('#task');
const emptyList = document.querySelector('#empty-list');
const button2 = document.getElementById('delete');



const createTask=()=>{
    const taskText = task.value;
    const taskHTML = `
    <li class="task-list">
    <p class="new-task">${taskText}</p>
    <input type="checkbox"  class="checkbox" id="checkbox${taskText}" />
    <label for="checkbox${taskText}"  type="checkbox" name="author"></label>
    </li>`;

    allTasks.insertAdjacentHTML('beforeend', taskHTML);

    task.value = "";
    if(allTasks.children.length > 0) {
        emptyList.classList.add('none')
    } 

    button2.disabled=false;
}

function deleteTasks(){
    allTasks.innerHTML="";
    button2.disabled=true; 
}

button.addEventListener('click', () =>{
    createTask();
})