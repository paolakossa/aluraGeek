const btnDeleta = document.querySelector('[data-tipo="lixeira1"]');
const produto1 = document.querySelector('.todos__produtos--div1');

btnDeleta.addEventListener('click', ()=>{
    produto1.remove();
})