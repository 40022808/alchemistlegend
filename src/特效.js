import { doc, music } from "./app.js";
import { 金币, 基地_升级, 更新金币 } from "./变量.js";
import { play音效, 基地_升级_信息_刷新 } from "./函数库.js";

var intervalId = null; // 用于存储setInterval的ID

export function 炼金_黄金自动生产机_进度特效() {
    // 清除之前的interval，防止重复
    clearInterval(intervalId);
    let num = 0;
    
    // 开始循环
    intervalId = setInterval(() => {
        num = num + 0.5;
        if (num >= 100) {
            doc["炼金-黄金自动生产机-进度条-进度"].style.width = "100%";
            num = 0;
            金币.数量 = 金币.数量 + 基地_升级.黄金自动生产机;
            更新金币()
            play音效(music.金币1, 0.4)
            基地_升级_信息_刷新()
        } else {
            doc["炼金-黄金自动生产机-进度条-进度"].style.width = num + "%";
        }
    }, 15);
}

export function 炼金_黄金自动生产机_进度特效_stop() {
    clearInterval(intervalId);
    doc["炼金-黄金自动生产机-进度条-进度"].style.width = "0%";
}

export function 慢慢消失(name,time) {
    name.style.transition = `opacity ${time}ms linear`;
    name.style.opacity = 0;
    setTimeout(() => {
        name.style.transition = 'none';
        name.style.display = "none";
        name.style.opacity = 1;
    }, time);

}

export function 慢慢出现(name,time,display) {
    name.style.opacity = 0;
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
