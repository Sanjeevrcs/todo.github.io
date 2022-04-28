var addtodobutton = document.getElementById('addtodo');
var todocontainer = document.getElementById('todocontainer');
var inputfield = document.getElementById('inputfield');


addtodobutton.addEventListener('click', function(){
    var fset=document.createElement('fieldset');
    var task=document.createElement('input');
    var paragraph=document.createElement('p');
    var button=document.createElement('button');
    var ebutton=document.createElement('button');

    button.classList.add('finishbutton');
    button.innerText='remove item';
    ebutton.classList.add('finishbutton');
    ebutton.innerText='edit task';
    paragraph.appendChild(task);
    paragraph.classList.add('paragraph-styling');
    task.classList.add('taskstyle');
    
    let myvalue=inputfield.value;
    if(myvalue=="")
    {
        alert("task cannot be empty");
        return;
    }

    task.type="text";
    task.value=myvalue;
    task.setAttribute("readonly","readonly");

    todocontainer.appendChild(paragraph);
    paragraph.appendChild(button);
    paragraph.appendChild(ebutton);

    inputfield.value="";

    ebutton.addEventListener('click', function(){
       if (ebutton.innerText=="edit task")
       {
           task.focus();
           ebutton.innerText='save task';
           task.removeAttribute("readonly");
       }
       else
       {    if(task.value==""){
           alert("task cannot be empty");
       }
       else{
            task.setAttribute("readonly","readonly");
            ebutton.innerText='edit task';   
       }
    }
        
    })
    button.addEventListener('click', function(){
        todocontainer.removeChild(paragraph);
        todocontainer.removeChild(button);
    })
})
