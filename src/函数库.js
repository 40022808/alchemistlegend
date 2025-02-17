import { doc,music } from "./app.js";
import { 基地_升级, 金币, 更新金币, 更新基地_升级 } from "./变量.js";
import { 炼金_黄金自动生产机_进度特效, 炼金_黄金自动生产机_进度特效_stop } from "./特效.js";


export function play音效(audioElement,volume) {
    const newAudio = audioElement.cloneNode();
    newAudio.volume = volume || 1;
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

export function 确认弹窗(text,fun) {
    const 弹窗 = document.querySelector('.确认弹窗')
    弹窗.style.display = 'flex';
    const 弹窗_text = document.querySelector('.确认弹窗_text')
    弹窗_text.innerHTML = text
    确认弹窗fun = fun
}

var 确认弹窗fun

export function 确认弹窗_取消_函数() {
    const 弹窗 = document.querySelector('.确认弹窗')
    弹窗.style.display = 'none';
}

export function 确认弹窗_确定_函数() {
    确认弹窗fun()
    const 弹窗 = document.querySelector('.确认弹窗')
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

export function ui更新() {
    if (基地_升级.黄金自动生产机 !== 0) {
        doc["炼金-黄金自动生产机"].style.display = "flex";
    }
}

function navbar_btn_函数(btn,block,display) {
    doc["navbar-基地-btn"].style.borderBottom = 'none';
    doc["navbar-炼金-btn"].style.borderBottom = 'none';
    doc["navbar-冒险-btn"].style.borderBottom = 'none';
    doc["navbar-设置-btn"].style.borderBottom = 'none';
    doc.基地.style.display = "none";
    doc.炼金.style.display = "none";
    doc.冒险.style.display = "none";
    doc.设置.style.display = "none";
    block.style.display = display;
    btn.style.borderBottom = 'solid 5px rgb(255, 238, 0)'
}

export function 删除数据() {
    localStorage.clear();
    location.reload();
}

export function navbar_炼金_btn_click() {
    play音效(music.按钮2)
    ui更新()
    navbar_btn_函数(doc["navbar-炼金-btn"],doc.炼金,"block")
}

export function navbar_基地_btn_click() {
    play音效(music.按钮2)
    navbar_btn_函数(doc["navbar-基地-btn"],doc.基地,"flex")
    doc["基地-table"].forEach(element => {
        element.style.display = "none";
    });
    doc["基地-table-start"].style.display = "flex";
}

export function navbar_冒险_btn_click() {
    play音效(music.按钮2)
    navbar_btn_函数(doc["navbar-冒险-btn"],doc.冒险,"flex")
}

export function navbar_设置_btn_click() {
    play音效(music.按钮2)
    navbar_btn_函数(doc["navbar-设置-btn"],doc.设置,"flex")
}

export function 基地_table_升级_返回_btn_click() {
    play音效(music.按钮2)
    慢慢消失(doc["基地-table-升级"], 200)
    setTimeout(() => {
        慢慢出现(doc["基地-table-start"], 500, "flex")
    }, 200);
}

export function 基地_升级_btn_click() {
    play音效(music.按钮2)
    基地_升级_信息_刷新()
    慢慢消失(doc["基地-table-start"], 200)
    setTimeout(() => {
        慢慢出现(doc["基地-table-升级"], 500, "flex")
    }, 200);

    
}


export function 基地_升级_信息_刷新() {
    if (基地_升级_信息_变量  == 0) {
        doc["基地-table-升级-信息"].innerHTML = 
        `
        [升级炼金设备]<br>
        每提升一级，炼金的收益+1<br>
        目前等级：${基地_升级.升级炼金设备}<br>
        需要金币：${(基地_升级.升级炼金设备 + 1) * (30 * (基地_升级.升级炼金设备 + 1))}<br>
        目前金币：${金币.数量}
        `
    }
    else if (基地_升级_信息_变量  == 1) {
        doc["基地-table-升级-信息"].innerHTML = 
        `
        [黄金自动生产机]<br>
        每3秒自动产出金币，每提升一级，黄金自动生产机的产量+1<br>
        目前等级：${基地_升级.黄金自动生产机}<br>
        需要金币：${(基地_升级.黄金自动生产机 + 1) * (100 * (基地_升级.黄金自动生产机 + 1))}<br>
        目前金币：${金币.数量}
        `
    }
}

export function 升级炼金设备_btn_click() {
    if (金币.数量 < (基地_升级.升级炼金设备 + 1) * (30 * (基地_升级.升级炼金设备 + 1))) {
        play音效(music.error1)
        弹窗("金币不足！")
    }
    else {
        金币.数量 = 金币.数量 - (基地_升级.升级炼金设备 + 1) * (30 * (基地_升级.升级炼金设备 + 1));
        基地_升级.升级炼金设备 = 基地_升级.升级炼金设备 + 1;
        基地_升级_信息_刷新();
        更新金币()
        更新基地_升级()
        play音效(music.按钮2)
    }
    
}

export function 黄金自动生产机_btn_click() {
    if (金币.数量 < (基地_升级.黄金自动生产机 + 1) * (100 * (基地_升级.黄金自动生产机 + 1))) {
        play音效(music.error1)
        弹窗("金币不足！")
    }
    else {
        金币.数量 = 金币.数量 - (基地_升级.黄金自动生产机 + 1) * (100 * (基地_升级.黄金自动生产机 + 1));
        基地_升级.黄金自动生产机 = 基地_升级.黄金自动生产机 + 1;
        基地_升级_信息_刷新();
        更新金币()
        更新基地_升级()
        play音效(music.按钮2)
    }
}


var 基地_升级_信息_变量 = 0; // 定义在全局作用域
export function 基地_table_btn_back_click() {
    play音效(music.按钮2)
    doc["基地-table-升级-btn"][基地_升级_信息_变量].classList.remove('显示');
    基地_升级_信息_变量 = (基地_升级_信息_变量 > 0) ? 基地_升级_信息_变量 - 1 : doc["基地-table-升级-btn"].length - 1;
    doc["基地-table-升级-btn"][基地_升级_信息_变量].classList.add('显示');
    基地_升级_信息_刷新()
}
export function 基地_table_btn_next_click() {
    play音效(music.按钮2)
    doc["基地-table-升级-btn"][基地_升级_信息_变量].classList.remove('显示');
    基地_升级_信息_变量 = (基地_升级_信息_变量 < doc["基地-table-升级-btn"].length - 1) ? 基地_升级_信息_变量 + 1 : 0;
    doc["基地-table-升级-btn"][基地_升级_信息_变量].classList.add('显示');
    基地_升级_信息_刷新()
}





export function 炼金_黄金自动生产机_start_btn_click() {
    play音效(music.按钮2)
    炼金_黄金自动生产机_进度特效()
}

export function 炼金_黄金自动生产机_stop_btn_click() {
    play音效(music.按钮2)
    炼金_黄金自动生产机_进度特效_stop()
}