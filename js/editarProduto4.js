const btnAlterar4 = document.querySelector('[data-tipo="btnDescricao4"]');

const btnLapis4 = document.querySelector('[data-tipo="lapis4"]');

const input4 = document.querySelectorAll('[data-tipo="input4"]');


const inputsShow4 = () => {

	input4.forEach(input => {
		input.style.display = 'block';
	})

	btnAlterar4.style.display = 'block';

}; 


const inputsNone4 = () => {
	input4.forEach(input => {
			input.style.display = 'none';
	})

	btnAlterar4.style.display = 'none'; 
};

const produtoD4 = document.querySelector('[data-tipo="descricao4"]');
const inputValorD4 = document.querySelector('[data-tipo="inputDescricao4"]'); 

const preco4 = document.querySelector('[data-tipo="preco4"]');
const inputValorP4 = document.querySelector('[data-tipo="inputPreco4"]'); 

const codigo4 = document.querySelector('[data-tipo="codigo4"]');
const inputValorC4 = document.querySelector('[data-tipo="inputCodigo4"]');

btnLapis4.addEventListener('click', () => {

	return inputsShow4();
}); 

btnAlterar4.addEventListener('click', () => {
		
		if(inputValorD4.value === '') {
			
			return inputsNone4(); 

		} else {
			
			produtoD4.innerText = inputValorD4.value;
			
			return inputsNone4();	

		}


		});

btnAlterar4.addEventListener('click', () => {
		
		if(inputValorP4.value === '') {
			
			return inputsNone4(); 

		} else {
			
			preco4.innerText = inputValorP4.value;
			
			return inputsNone4();	

		}

		});


btnAlterar4.addEventListener('click', () => {
		
		if(inputValorC4.value === '') {
			
			return inputsNone4(); 

		} else {
			
			codigo4.innerText = inputValorC4.value;
			
			return inputsNone4();	

		}

		});
