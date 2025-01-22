

import { doc } from "./app.js";

export var 金币 = {
    数量: localStorage.getItem('金币数量') ? parseInt(localStorage.getItem('金币数量')) : 0,
};

export var 基地_升级 = {
    升级炼金设备: localStorage.getItem('基地_升级_升级炼金设备') ? parseInt(localStorage.getItem('基地_升级_升级炼金设备')) : 0,
    黄金自动生产机: localStorage.getItem('基地_升级_黄金自动生产机') ? parseInt(localStorage.getItem('基地_升级_黄金自动生产机')) : 0,
}


export function 更新金币() {
    // 更新金币数量到localStorage
    localStorage.setItem('金币数量', 金币.数量);

    // 更新金币显示
    doc["炼金-金币"].innerHTML = '金币数量:' + 金币.数量;
}

export function 更新基地_升级() {
    localStorage.setItem('基地_升级_升级炼金设备', 基地_升级.升级炼金设备);
    localStorage.setItem('基地_升级_黄金自动生产机', 基地_升级.黄金自动生产机);

}




