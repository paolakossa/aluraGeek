const btnAlterar12 = document.querySelector('[data-tipo="btnDescricao12"]');

const btnLapis12 = document.querySelector('[data-tipo="lapis12"]');

const input12 = document.querySelectorAll('[data-tipo="input12"]');


const inputsShow12 = () => {

	input12.forEach(input => {
		input.style.display = 'block';
	})

	btnAlterar12.style.display = 'block';

}; 


const inputsNone12 = () => {
	input12.forEach(input => {
			input.style.display = 'none';
	})

	btnAlterar12.style.display = 'none'; 
};

const produtoD12 = document.querySelector('[data-tipo="descricao12"]');
const inputValorD12 = document.querySelector('[data-tipo="inputDescricao12"]'); 

const preco12 = document.querySelector('[data-tipo="preco12"]');
const inputValorP12 = document.querySelector('[data-tipo="inputPreco12"]'); 

const codigo12 = document.querySelector('[data-tipo="codigo12"]');
const inputValorC12 = document.querySelector('[data-tipo="inputCodigo12"]');

btnLapis12.addEventListener('click', () => {

	return inputsShow12();
}); 

btnAlterar12.addEventListener('click', () => {
		
		if(inputValorD12.value === '') {
			
			return inputsNone12(); 

		} else {
			
			produtoD12.innerText = inputValorD12.value;
			
			return inputsNone12();	

		}


		});

btnAlterar12.addEventListener('click', () => {
		
		if(inputValorP12.value === '') {
			
			return inputsNone12(); 

		} else {
			
			preco12.innerText = inputValorP12.value;
			
			return inputsNone12();	

		}

		});


btnAlterar12.addEventListener('click', () => {
		
		if(inputValorC12.value === '') {
			
			return inputsNone12(); 

		} else {
			
			codigo12.innerText = inputValorC12.value;
			
			return inputsNone12();	

		}

		});