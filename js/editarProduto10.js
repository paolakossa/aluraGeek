const btnAlterar10 = document.querySelector('[data-tipo="btnDescricao10"]');

const btnLapis10 = document.querySelector('[data-tipo="lapis10"]');

const input10 = document.querySelectorAll('[data-tipo="input10"]');


const inputsShow10 = () => {

	input10.forEach(input => {
		input.style.display = 'block';
	})

	btnAlterar10.style.display = 'block';

}; 


const inputsNone10 = () => {
	input10.forEach(input => {
			input.style.display = 'none';
	})

	btnAlterar10.style.display = 'none'; 
};

const produtoD10 = document.querySelector('[data-tipo="descricao10"]');
const inputValorD10 = document.querySelector('[data-tipo="inputDescricao10"]'); 

const preco10 = document.querySelector('[data-tipo="preco10"]');
const inputValorP10 = document.querySelector('[data-tipo="inputPreco10"]'); 

const codigo10 = document.querySelector('[data-tipo="codigo10"]');
const inputValorC10 = document.querySelector('[data-tipo="inputCodigo10"]');

btnLapis10.addEventListener('click', () => {

	return inputsShow10();
}); 

btnAlterar10.addEventListener('click', () => {
		
		if(inputValorD10.value === '') {
			
			return inputsNone10(); 

		} else {
			
			produtoD10.innerText = inputValorD10.value;
			
			return inputsNone10();	

		}


		});

btnAlterar10.addEventListener('click', () => {
		
		if(inputValorP10.value === '') {
			
			return inputsNone10(); 

		} else {
			
			preco10.innerText = inputValorP10.value;
			
			return inputsNone10();	

		}

		});


btnAlterar10.addEventListener('click', () => {
		
		if(inputValorC10.value === '') {
			
			return inputsNone10(); 

		} else {
			
			codigo10.innerText = inputValorC10.value;
			
			return inputsNone10();	

		}

		});