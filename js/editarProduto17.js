const btnAlterar17 = document.querySelector('[data-tipo="btnDescricao17"]');

const btnLapis17 = document.querySelector('[data-tipo="lapis17"]');

const input17 = document.querySelectorAll('[data-tipo="input17"]');


const inputsShow17 = () => {

	input17.forEach(input => {
		input.style.display = 'block';
	})

	btnAlterar17.style.display = 'block';

}; 


const inputsNone17 = () => {
	input17.forEach(input => {
			input.style.display = 'none';
	})

	btnAlterar17.style.display = 'none'; 
};

const produtoD17 = document.querySelector('[data-tipo="descricao17"]');
const inputValorD17 = document.querySelector('[data-tipo="inputDescricao17"]'); 

const preco17 = document.querySelector('[data-tipo="preco17"]');
const inputValorP17 = document.querySelector('[data-tipo="inputPreco17"]'); 

const codigo17 = document.querySelector('[data-tipo="codigo17"]');
const inputValorC17 = document.querySelector('[data-tipo="inputCodigo17"]');

btnLapis17.addEventListener('click', () => {

	return inputsShow17();
}); 

btnAlterar17.addEventListener('click', () => {
		
		if(inputValorD17.value === '') {
			
			return inputsNone17(); 

		} else {
			
			produtoD17.innerText = inputValorD17.value;
			
			return inputsNone17();	

		}


		});

btnAlterar17.addEventListener('click', () => {
		
		if(inputValorP17.value === '') {
			
			return inputsNone17(); 

		} else {
			
			preco17.innerText = inputValorP17.value;
			
			return inputsNone17();	

		}

		});


btnAlterar17.addEventListener('click', () => {
		
		if(inputValorC17.value === '') {
			
			return inputsNone17(); 

		} else {
			
			codigo17.innerText = inputValorC17.value;
			
			return inputsNone17();	

		}

		});