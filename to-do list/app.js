function addTask(){
   const add = document.getElementById('new-list');
   const task = add.value.trim();
   if (task===""){
    alert("please fill the task!");
    return;
   }

   const li= document.createElement('li');
   li.textContent = task;

   const deleteBtn = document.createElement('button');
   deleteBtn.textContent ="del";
   deleteBtn.onclick =()=>li.remove();

   li.appendChild(deleteBtn);
   document.getElementById("task-list").appendChild(li);
   
   add.value ="";
}
