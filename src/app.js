const doc ={
    "start-btn":document.querySelector(".start-btn"),
    "start":document.querySelector(".start"),
    "game":document.querySelector(".game"),
}

doc["start-btn"].addEventListener("click",()=>{
    慢慢消失(doc.start, 2000);
    setTimeout(() => {
        慢慢出现(doc.game, 2000, "block");
    }, 2000);

})


function 慢慢消失(name,time) {
    name.style.transition = `opacity ${time}ms linear`;
    name.style.opacity = 0;
    setTimeout(() => {
        name.style.transition = 'none';
        name.style.display = "none";
        name.style.opacity = 1;
    }, time);

}

function 慢慢出现(name,time,display) {
    name.style.display = display;
    name.style.transition = `opacity ${time}ms linear`;
    setTimeout(() => {
        name.style.opacity = 1;
    }, 100);
    let time2 = time + 100;
    setTimeout(() => {
        name.style.transition = 'none';
    }, time2);

}