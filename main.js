let num = 0;

let btn_p = document.querySelector('#btnp')
let btn_m = document.querySelector('#btnm')
let res = document.querySelector('h1')

btn_p.addEventListener('click',()=>{
    num++;
    res.innerText = num;
})
btn_m.addEventListener('click',()=>{
    num--;
    res.innerText = num;
})