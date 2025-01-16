

import { doc } from "./app.js";

export var 金币 = {
    数量: localStorage.getItem('金币数量') ? parseInt(localStorage.getItem('金币数量')) : 0,
};

export function 更新金币() {
        // 更新金币数量到localStorage
        localStorage.setItem('金币数量', 金币.数量);

        // 更新金币显示
        doc["基地-金币"].innerHTML = '金币数量:' + 金币.数量;
}
