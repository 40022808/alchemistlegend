export const doc ={
    "start-btn":document.querySelector(".start-btn"),
    "start":document.querySelector(".start"),
    "game":document.querySelector(".game"),
    "炼金-炼金-btn":document.querySelector(".炼金-炼金-btn"),
    "炼金-金币":document.querySelector(".炼金-金币"),
    "navbar-炼金-btn":document.querySelector(".navbar-炼金-btn"),
    "navbar-基地-btn":document.querySelector(".navbar-基地-btn"),
    "炼金":document.querySelector(".炼金"),
    "基地":document.querySelector(".基地"),
    "基地-升级-btn":document.querySelector(".基地-升级-btn"),
    "基地-table":document.querySelectorAll(".基地-table"),
    "基地-table-start":document.querySelector(".基地-table.基地-table-start"),
    "基地-table-升级":document.querySelector(".基地-table.基地-table-升级"),
    "基地-table-升级-信息":document.querySelector(".基地-table-升级-信息"),
    "升级炼金设备-btn":document.querySelector("#升级炼金设备-btn"),
    "基地-table-升级-btn":document.querySelectorAll(".基地-table-升级-btn"),
    "基地-table-升级-btn-back":document.querySelector(".基地-table-升级-btn-back"),
    "基地-table-升级-btn-next":document.querySelector(".基地-table-升级-btn-next"),
    "炼金-黄金自动生产机":document.querySelector(".炼金-黄金自动生产机"),
    "炼金-黄金自动生产机-start-btn":document.querySelector(".炼金-黄金自动生产机-start-btn"),
    "炼金-黄金自动生产机-stop-btn":document.querySelector(".炼金-黄金自动生产机-stop-btn"),
    "黄金自动生产机-btn":document.querySelector("#黄金自动生产机-btn"),
    "炼金-黄金自动生产机-进度条-进度":document.querySelector(".炼金-黄金自动生产机-进度条-进度"),
    "基地-table-升级-返回-btn":document.querySelector(".基地-table-升级-返回-btn"),
    "version":document.querySelector(".version"),
}

export const music = {
    "按钮1": document.querySelector("#按钮1"),
    "按钮2": document.querySelector("#按钮2"),
    "error1": document.querySelector("#error1"),
    "金币1": document.querySelector("#金币1"),
}

    const version = "版本: 0.1.1"
    console.log(`%c%s`, "color: #fff; background: #000; padding: 5px 10px; border-radius: 5px;", `${version}`)
    doc.version.innerHTML = version



import { 
    慢慢消失,慢慢出现, 基地_升级_btn_click, play音效, navbar_炼金_btn_click, navbar_基地_btn_click, 基地_升级_信息_刷新, 升级炼金设备_btn_click,
    弹窗_关闭_函数, 基地_table_btn_back_click, 基地_table_btn_next_click, ui更新, 黄金自动生产机_btn_click, 炼金_黄金自动生产机_start_btn_click,
    炼金_黄金自动生产机_stop_btn_click, 基地_table_升级_返回_btn_click
} from "./函数库.js";
import { 金币, 更新金币, 基地_升级 } from "./变量.js";


ui更新()

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
    play音效(music.按钮1)
    更新金币()
    慢慢消失(doc.start, 2000);
    setTimeout(() => {
        慢慢出现(doc.game, 1000, "block");
    }, 3000);
})

const 弹窗_关闭 = document.querySelector('.弹窗_关闭')
弹窗_关闭.addEventListener('click',()=>{
    弹窗_关闭_函数()
    play音效(music.按钮2)
})

doc["炼金-炼金-btn"].addEventListener("click",()=>{
    play音效(music.按钮2)
    金币.数量 = 金币.数量 + 1 + 基地_升级.升级炼金设备;
    更新金币()
})

doc["navbar-炼金-btn"].addEventListener("click",()=>{
    navbar_炼金_btn_click()
})

doc["navbar-基地-btn"].addEventListener("click",()=>{
    navbar_基地_btn_click()
})

doc["基地-table-升级-返回-btn"].addEventListener("click",()=>{
    基地_table_升级_返回_btn_click()
})

doc["基地-升级-btn"].addEventListener("click",()=>{
    基地_升级_btn_click()
    基地_升级_信息_刷新()
})

doc["升级炼金设备-btn"].addEventListener("click",()=>{
    升级炼金设备_btn_click()
})

doc["基地-table-升级-btn-back"].addEventListener("click",()=>{
    基地_table_btn_back_click()
})

doc["基地-table-升级-btn-next"].addEventListener("click",()=>{
    基地_table_btn_next_click()
})

doc["炼金-黄金自动生产机-start-btn"].addEventListener("click",()=>[
    炼金_黄金自动生产机_start_btn_click()
])

doc["炼金-黄金自动生产机-stop-btn"].addEventListener("click",()=>[
    炼金_黄金自动生产机_stop_btn_click()
])

doc["黄金自动生产机-btn"].addEventListener("click",()=>[
    黄金自动生产机_btn_click()
])