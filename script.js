const inputBox=document.getElementById("input")

const listContainer=document.getElementById("list-container")
function addTask(){
    // window.alert("hiii")
    
    // listContainer.innerHTML="guuuu"
    if(inputBox.value===''){
        alert("your must write something!");
    }
    else{
        let li=document.createElement("li")
        li.innerHTML=inputBox.value;
        
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
        listContainer.appendChild(li);
    }
    inputBox.value="";
    saveData();
}
listContainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName=="SPAN"){
        e.target.parentElement.remove();
    }
},false);
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask();
