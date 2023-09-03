const inp=document.querySelector(".input-box");
const addbtn=document.querySelector(".btn");
const todo=document.querySelector(".todolist");
let etd=null;

addbtn.addEventListener("click",()=>{
    const inputtext=inp.value.trim();
    if(inputtext===""){
        alert("write something to add");
    }
    else{

        if(addbtn.value==="Edit"){
            etd.target.previousElementSibling.innerHTML=inputtext;
            addbtn.value="Add";
            inp.value="";
        }
        else{
            const li=document.createElement("li");
        const para=document.createElement("p");
        para.innerHTML=inputtext;
        li.appendChild(para);
        todo.appendChild(li);

        
        const edit=document.createElement("button");
        edit.innerHTML="Edit";
        edit.classList.add("button","green");
        li.appendChild(edit);

        const del=document.createElement("button");
        del.innerHTML="Remove"
        del.classList.add("button","red");
        li.appendChild(del);
        

        inp.value="";
    }
}
        
   
})
todo.addEventListener("click",(e)=>{
    e.target.classList.toggle("checked");
    if(e.target.innerHTML==="Remove"){
        todo.removeChild(e.target.parentElement);
        e.target.classList.remove("checked");
    }
    else if(e.target.innerHTML==="Edit"){
        inp.value=e.target.previousElementSibling.innerHTML;
        inp.focus();
        addbtn.value="Edit";
        etd=e;
    }
  
   
})
