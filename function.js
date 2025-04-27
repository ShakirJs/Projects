//button or input ko pakarny kay liye
const addtaskbtn=document.getElementById('addtaskbtn');
const task_input=document.getElementById('task_input');
const tasklist=document.getElementById('tasklist');

//button dbny wala kaam
addtaskbtn.addEventListener('click',function(){
    const tasktext=task_input.value;
    if(tasktext===''){
        alert('Please Tye Something');
    }
    const newtask=document.createElement('li');
    newtask.innerText=tasktext;
    tasklist.appendChild(newtask);
})