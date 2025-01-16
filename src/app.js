export const doc ={
    "start-btn":document.querySelector(".start-btn"),
    "start":document.querySelector(".start"),
    "game":document.querySelector(".game"),
    "基地-炼金-btn":document.querySelector(".基地-炼金-btn"),
    "基地-金币":document.querySelector(".基地-金币"),
}

export const music = {
    "clickSound": new Audio('素材库/音效和bgm/按钮2.mp3'),
}

import { 慢慢消失, 慢慢出现 } from "./函数库.js";
import { 金币, 更新金币 } from "./变量.js";



setTimeout(() => {
    doc["start-btn"].style.display = "block";
    doc["start-btn"].style.transition = "all 1s ease";
    setTimeout(() => {
        doc["start-btn"].style.opacity = 1;
    }, 100);
    setTimeout(() => {
        doc["start-btn"].style.animation = "blink 5s linear infinite";
    }, 2000);
}, 2000);

doc["start-btn"].addEventListener("mouseenter",()=>{
    doc["start-btn"].style.animation = 'none';
})

doc["start-btn"].addEventListener('mouseleave', () => {
    doc["start-btn"].style.animation = 'blink 5s linear infinite';
});


doc["start-btn"].addEventListener("click",()=>{
    更新金币()
    慢慢消失(doc.start, 2000);
    setTimeout(() => {
        慢慢出现(doc.game, 2000, "block");
    }, 2000);

})

doc["基地-炼金-btn"].addEventListener("click",()=>{
    music.clickSound.currentTime = 0;
    music.clickSound.play();
    金币.数量 = 金币.数量 + 1;
    更新金币()

})



