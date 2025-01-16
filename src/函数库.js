

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