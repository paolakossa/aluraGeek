const btnAlterar7 = document.querySelector('[data-tipo="btnDescricao7"]');

const btnLapis7 = document.querySelector('[data-tipo="lapis7"]');

const input7 = document.querySelectorAll('[data-tipo="input7"]');


const inputsShow7 = () => {

	input7.forEach(input => {
		input.style.display = 'block';
	})

	btnAlterar7.style.display = 'block';

}; 


const inputsNone7 = () => {
	input7.forEach(input => {
			input.style.display = 'none';
	})

	btnAlterar7.style.display = 'none'; 
};

const produtoD7 = document.querySelector('[data-tipo="descricao7"]');
const inputValorD7 = document.querySelector('[data-tipo="inputDescricao7"]'); 

const preco7 = document.querySelector('[data-tipo="preco7"]');
const inputValorP7 = document.querySelector('[data-tipo="inputPreco7"]'); 

const codigo7 = document.querySelector('[data-tipo="codigo7"]');
const inputValorC7 = document.querySelector('[data-tipo="inputCodigo7"]');

btnLapis7.addEventListener('click', () => {

	return inputsShow7();
}); 

btnAlterar7.addEventListener('click', () => {
		
		if(inputValorD7.value === '') {
			
			return inputsNone7(); 

		} else {
			
			produtoD7.innerText = inputValorD7.value;
			
			return inputsNone7();	

		}


		});

btnAlterar7.addEventListener('click', () => {
		
		if(inputValorP7.value === '') {
			
			return inputsNone7(); 

		} else {
			
			preco7.innerText = inputValorP7.value;
			
			return inputsNone7();	

		}

		});


btnAlterar7.addEventListener('click', () => {
		
		if(inputValorC7.value === '') {
			
			return inputsNone7(); 

		} else {
			
			codigo7.innerText = inputValorC7.value;
			
			return inputsNone7();	

		}

		});