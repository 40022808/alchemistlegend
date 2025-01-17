import { doc,music } from "./app.js";
import { 基地_升级, 金币, 更新金币 } from "./变量.js";

export function play音效(audioElement) {
    const newAudio = audioElement.cloneNode();
    newAudio.play();
}

export function 弹窗(text) {
    const 弹窗 = document.querySelector('.弹窗')
    弹窗.style.display = 'flex';
    const 弹窗_text = document.querySelector('.弹窗_text')
    弹窗_text.innerHTML = text
}

export function 弹窗_关闭_函数() {
    const 弹窗 = document.querySelector('.弹窗')
    弹窗.style.display = 'none';
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

export function navbar_炼金_btn_click() {
    play音效(music.按钮2)
    doc.炼金.style.display = "block";
    doc.基地.style.display = "none";
}

export function navbar_基地_btn_click() {
    play音效(music.按钮2)
    doc.炼金.style.display = "none";
    doc.基地.style.display = "flex";
    doc["基地-table"].forEach(element => {
        element.style.display = "none";
    });
    doc["基地-table-start"].style.display = "flex";
}


export function 基地_升级_btn_click() {
    play音效(music.按钮2)
    慢慢消失(doc["基地-table-start"], 200)
    setTimeout(() => {
        慢慢出现(doc["基地-table-升级"], 500, "flex")
    }, 200);

    
}


export function 基地_升级_信息_刷新() {
    doc["基地-table-升级-信息"].innerHTML = 
    `
    [升级炼金设备]<br>
    每提升一级，炼金的收益+1<br>
    目前等级：${基地_升级.升级炼金设备}<br>
    需要金币：${(基地_升级.升级炼金设备 + 1) * (20 * (基地_升级.升级炼金设备 + 1))}<br>
    目前金币：${金币.数量}
    `
}

export function 升级炼金设备_btn_click() {
    if (金币.数量 < (基地_升级.升级炼金设备 + 1) * (20 * (基地_升级.升级炼金设备 + 1))) {
        play音效(music.error1)
        弹窗("金币不足！")
    }
    else {
        金币.数量 = 金币.数量 - (基地_升级.升级炼金设备 + 1) * (20 * (基地_升级.升级炼金设备 + 1));
        基地_升级.升级炼金设备 = 基地_升级.升级炼金设备 + 1;
        基地_升级_信息_刷新();
        更新金币()
        play音效(music.按钮2)
    }
    
}