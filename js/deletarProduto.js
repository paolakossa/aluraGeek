const btnDeleta1 = document.querySelector('[data-tipo="lixeira1"]');
const produto1 = document.querySelector('.todos__produtos--div1');
const btnLapis1 = document.querySelector('[data-tipo="lapis1"]');
const preco1 = document.querySelector('[data-tipo="preco1"]');
const novo = document.createElement("input"); 
const texto = document.querySelector('input')

btnDeleta1.addEventListener('click', ()=>{
    produto1.remove();
  
});

btnLapis1.addEventListener('click', () => {
    preco1.innerText = 'R$ 40,00';
} )