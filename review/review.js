const form=document.getElementById("taskform");// the form 
const input=document.getElementById("taskinput")
const taskList=document.getElementById("task/list");
const stats=document.getElementById("stats");
console.log(" DOM elements loaded");
function createTask(taskName){
    const newTask={
        name:taskName,
        completed:false
    };

}
function renderTask(){
    console.log("rendering tasks");
    taskList.innerHTML='';
    taskList.forEach(task=>{
        const li=document.createElement('li');
        if (task.completed){
li.classList.add('complete');
        }
        li.innerHTML=<span>${task.name}</span>;
        <div>
            <button onClick={'togglecomplete(${task.id})'}>🐓</button>
            <button onClick={'deleteTask(${task.id})'}>😅</button>
        </div>;
        taskList.appendChild(li);
    });
    updateStates();
}
function updateStates(){
const total=task.length;
const completed=task.filter(task=>task.completed).length;

console.log(`stats Update-total:${total},completed:${completed}`);
stats.textContent=`Total:${total} | completed:${
completed}`
}

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log("Form submitted");
    const taskName=input.value.trim();
    console.log("input value (trimmed)");

    if(taskName===''){
        alert('Task cannot be empty!');
        console.warn("Empty task name prevented submission .");
        return;
    }

    const newTask=createTask(taskName);
    task.push(newTask);
    console.log("Tasks array after adding new Task:",task);
    input.value='';
    renderTask();
});

function togglecomplete(id){
    console.log(`toggling completion for task id :${id}`);
    const task=task.find(t=>t.id===id);
    if(task){
        task.completed=!task.completed;
        console.log("Task after toggle:",task);
        renderTask();
    }else{
        console.warn("task not found for ID:",id);
    }
}

function deleteTask(id){
    console.log(`Deletng task with id:,${id}`);
    task=task.filter(t=>t.id !==id);
    console.log('Tasks array after deletion:',task);
    renderTask();
}