const btnAlterar8 = document.querySelector('[data-tipo="btnDescricao8"]');

const btnLapis8 = document.querySelector('[data-tipo="lapis8"]');

const input8 = document.querySelectorAll('[data-tipo="input8"]');


const inputsShow8 = () => {

	input8.forEach(input => {
		input.style.display = 'block';
	})

	btnAlterar8.style.display = 'block';

}; 


const inputsNone8 = () => {
	input8.forEach(input => {
			input.style.display = 'none';
	})

	btnAlterar8.style.display = 'none'; 
};

const produtoD8 = document.querySelector('[data-tipo="descricao8"]');
const inputValorD8 = document.querySelector('[data-tipo="inputDescricao8"]'); 

const preco8 = document.querySelector('[data-tipo="preco8"]');
const inputValorP8 = document.querySelector('[data-tipo="inputPreco8"]'); 

const codigo8 = document.querySelector('[data-tipo="codigo8"]');
const inputValorC8 = document.querySelector('[data-tipo="inputCodigo8"]');

btnLapis8.addEventListener('click', () => {

	return inputsShow8();
}); 

btnAlterar8.addEventListener('click', () => {
		
		if(inputValorD8.value === '') {
			
			return inputsNone8(); 

		} else {
			
			produtoD8.innerText = inputValorD8.value;
			
			return inputsNone8();	

		}


		});

btnAlterar8.addEventListener('click', () => {
		
		if(inputValorP8.value === '') {
			
			return inputsNone8(); 

		} else {
			
			preco8.innerText = inputValorP8.value;
			
			return inputsNone8();	

		}

		});


btnAlterar8.addEventListener('click', () => {
		
		if(inputValorC8.value === '') {
			
			return inputsNone8(); 

		} else {
			
			codigo8.innerText = inputValorC8.value;
			
			return inputsNone8();	

		}

		});