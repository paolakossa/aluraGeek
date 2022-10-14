const btnAlterar16 = document.querySelector('[data-tipo="btnDescricao16"]');

const btnLapis16 = document.querySelector('[data-tipo="lapis16"]');

const input16 = document.querySelectorAll('[data-tipo="input16"]');


const inputsShow16 = () => {

	input16.forEach(input => {
		input.style.display = 'block';
	})

	btnAlterar16.style.display = 'block';

}; 


const inputsNone16 = () => {
	input16.forEach(input => {
			input.style.display = 'none';
	})

	btnAlterar16.style.display = 'none'; 
};

const produtoD16 = document.querySelector('[data-tipo="descricao16"]');
const inputValorD16 = document.querySelector('[data-tipo="inputDescricao16"]'); 

const preco16 = document.querySelector('[data-tipo="preco16"]');
const inputValorP16 = document.querySelector('[data-tipo="inputPreco16"]'); 

const codigo16 = document.querySelector('[data-tipo="codigo16"]');
const inputValorC16 = document.querySelector('[data-tipo="inputCodigo16"]');

btnLapis16.addEventListener('click', () => {

	return inputsShow16();
}); 

btnAlterar16.addEventListener('click', () => {
		
		if(inputValorD16.value === '') {
			
			return inputsNone16(); 

		} else {
			
			produtoD16.innerText = inputValorD16.value;
			
			return inputsNone16();	

		}


		});

btnAlterar16.addEventListener('click', () => {
		
		if(inputValorP16.value === '') {
			
			return inputsNone16(); 

		} else {
			
			preco16.innerText = inputValorP16.value;
			
			return inputsNone16();	

		}

		});


btnAlterar16.addEventListener('click', () => {
		
		if(inputValorC16.value === '') {
			
			return inputsNone16(); 

		} else {
			
			codigo16.innerText = inputValorC16.value;
			
			return inputsNone16();	

		}

		});