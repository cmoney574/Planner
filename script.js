let dis = document.getElementById("display")
let desc = document.getElementById("task")
let time = document.getElementById("dayPick")
let save = document.getElementById("save")

function saver(){
    console.log(desc.value)
    dis.innerHTML = desc.value
}

save.addEventListener("click", saver);
