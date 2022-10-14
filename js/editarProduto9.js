const btnAlterar9 = document.querySelector('[data-tipo="btnDescricao9"]');

const btnLapis9 = document.querySelector('[data-tipo="lapis9"]');

const input9 = document.querySelectorAll('[data-tipo="input9"]');


const inputsShow9 = () => {

	input9.forEach(input => {
		input.style.display = 'block';
	})

	btnAlterar9.style.display = 'block';

}; 


const inputsNone9 = () => {
	input9.forEach(input => {
			input.style.display = 'none';
	})

	btnAlterar9.style.display = 'none'; 
};

const produtoD9 = document.querySelector('[data-tipo="descricao9"]');
const inputValorD9 = document.querySelector('[data-tipo="inputDescricao9"]'); 

const preco9 = document.querySelector('[data-tipo="preco9"]');
const inputValorP9 = document.querySelector('[data-tipo="inputPreco9"]'); 

const codigo9 = document.querySelector('[data-tipo="codigo9"]');
const inputValorC9 = document.querySelector('[data-tipo="inputCodigo9"]');

btnLapis9.addEventListener('click', () => {

	return inputsShow9();
}); 

btnAlterar9.addEventListener('click', () => {
		
		if(inputValorD9.value === '') {
			
			return inputsNone9(); 

		} else {
			
			produtoD9.innerText = inputValorD9.value;
			
			return inputsNone9();	

		}


		});

btnAlterar9.addEventListener('click', () => {
		
		if(inputValorP9.value === '') {
			
			return inputsNone9(); 

		} else {
			
			preco9.innerText = inputValorP9.value;
			
			return inputsNone9();	

		}

		});


btnAlterar9.addEventListener('click', () => {
		
		if(inputValorC9.value === '') {
			
			return inputsNone9(); 

		} else {
			
			codigo9.innerText = inputValorC9.value;
			
			return inputsNone9();	

		}

		});