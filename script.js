let dis = document.getElementById("display")
let desc = document.getElementById("task")
let time = document.getElementById("dayPick")
let save = document.getElementById("save")
let day = document.getElementById("dayPick")

function saver(){
    console.log(desc.value)
    dis.appendChild(createtext(day.value, desc.value))
    console.log(day.value)
}

function createtext(day, text){
    let li = document.createElement('li');
    li.textContent = `${day}: ${text}`;
    return li;
}


save.addEventListener("click", saver);
