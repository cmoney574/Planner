let dis = document.getElementById("display")
let desc = document.getElementById("task")
let time = document.getElementById("dayPick")
let save = document.getElementById("save")
let day = document.getElementById("dayPick")

let storage = JSON.parse(localStorage.getItem('all'))
if(storage == null){
    storage = []
}
else{
    for(i = 0; i<storage.length; i++){
        console.log(storage[i].date)
        dis.appendChild(createtext(storage[i].date, storage[i].desc))
    }
}


function saver(){
    console.log(desc.value)
    dis.appendChild(createtext(day.value, desc.value))
    console.log(day.value)
    localStorage.setItem("event1", desc.value);
    let savdate = day.value;
    let savtext = desc.value;
    let entry ={
    "date": savdate,
    "desc": savtext
    }
localStorage.setItem("entry", JSON.stringify(entry))
storage.push(entry)
localStorage.setItem("all", JSON.stringify(storage));
}

function createtext(day, text){
    let li = document.createElement('li');
    li.textContent = `${day}: ${text}`;
    return li;
}


save.addEventListener("click", saver);
