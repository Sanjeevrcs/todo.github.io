let addtodobutton = document.getElementById('addtodo');
let todocontainer = document.getElementById('todocontainer');
let inputfield = document.getElementById('inputfield');


addtodobutton.addEventListener('click', function(){
    var fset=document.createElement('fieldset');
    var paragraph = document.createElement('p');
    var button=document.createElement('button');
    button.classList.add('finishbutton');
    button.innerText='remove item';
    paragraph.classList.add('paragraph-styling');
    let myvalue=inputfield.value;
if(myvalue=="")
{
    alert("value cannot be empty");
    return;
}
    paragraph.innerText = (inputfield.value)+"\t";
    todocontainer.appendChild(paragraph);
    paragraph.appendChild(button);

   
    inputfield.value = "";
   
    button.addEventListener('click', function(){
        todocontainer.removeChild(paragraph);
        todocontainer.removeChild(button);
    })
})
