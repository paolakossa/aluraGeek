const btnAlterar6 = document.querySelector('[data-tipo="btnDescricao6"]');

const btnLapis6 = document.querySelector('[data-tipo="lapis6"]');

const input6 = document.querySelectorAll('[data-tipo="input6"]');


const inputsShow6 = () => {

	input6.forEach(input => {
		input.style.display = 'block';
	})

	btnAlterar6.style.display = 'block';

}; 


const inputsNone6 = () => {
	input6.forEach(input => {
			input.style.display = 'none';
	})

	btnAlterar6.style.display = 'none'; 
};

const produtoD6 = document.querySelector('[data-tipo="descricao6"]');
const inputValorD6 = document.querySelector('[data-tipo="inputDescricao6"]'); 

const preco6 = document.querySelector('[data-tipo="preco6"]');
const inputValorP6 = document.querySelector('[data-tipo="inputPreco6"]'); 

const codigo6 = document.querySelector('[data-tipo="codigo6"]');
const inputValorC6 = document.querySelector('[data-tipo="inputCodigo6"]');

btnLapis6.addEventListener('click', () => {

	return inputsShow6();
}); 

btnAlterar6.addEventListener('click', () => {
		
		if(inputValorD6.value === '') {
			
			return inputsNone6(); 

		} else {
			
			produtoD6.innerText = inputValorD6.value;
			
			return inputsNone6();	

		}


		});

btnAlterar6.addEventListener('click', () => {
		
		if(inputValorP6.value === '') {
			
			return inputsNone6(); 

		} else {
			
			preco6.innerText = inputValorP6.value;
			
			return inputsNone6();	

		}

		});


btnAlterar6.addEventListener('click', () => {
		
		if(inputValorC6.value === '') {
			
			return inputsNone6(); 

		} else {
			
			codigo6.innerText = inputValorC6.value;
			
			return inputsNone6();	

		}

		});