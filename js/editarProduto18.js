const btnAlterar18 = document.querySelector('[data-tipo="btnDescricao18"]');

const btnLapis18 = document.querySelector('[data-tipo="lapis18"]');

const input18 = document.querySelectorAll('[data-tipo="input18"]');


const inputsShow18 = () => {

	input18.forEach(input => {
		input.style.display = 'block';
	})

	btnAlterar18.style.display = 'block';

}; 


const inputsNone18 = () => {
	input18.forEach(input => {
			input.style.display = 'none';
	})

	btnAlterar18.style.display = 'none'; 
};

const produtoD18 = document.querySelector('[data-tipo="descricao18"]');
const inputValorD18 = document.querySelector('[data-tipo="inputDescricao18"]'); 

const preco18 = document.querySelector('[data-tipo="preco18"]');
const inputValorP18 = document.querySelector('[data-tipo="inputPreco18"]'); 

const codigo18 = document.querySelector('[data-tipo="codigo18"]');
const inputValorC18 = document.querySelector('[data-tipo="inputCodigo18"]');

btnLapis18.addEventListener('click', () => {

	return inputsShow18();
}); 

btnAlterar18.addEventListener('click', () => {
		
		if(inputValorD18.value === '') {
			
			return inputsNone18(); 

		} else {
			
			produtoD18.innerText = inputValorD18.value;
			
			return inputsNone18();	

		}


		});

btnAlterar18.addEventListener('click', () => {
		
		if(inputValorP18.value === '') {
			
			return inputsNone18(); 

		} else {
			
			preco18.innerText = inputValorP18.value;
			
			return inputsNone18();	

		}

		});


btnAlterar18.addEventListener('click', () => {
		
		if(inputValorC18.value === '') {
			
			return inputsNone18(); 

		} else {
			
			codigo18.innerText = inputValorC18.value;
			
			return inputsNone18();	

		}

		});