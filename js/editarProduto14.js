const btnAlterar14 = document.querySelector('[data-tipo="btnDescricao14"]');

const btnLapis14 = document.querySelector('[data-tipo="lapis14"]');

const input14 = document.querySelectorAll('[data-tipo="input14"]');


const inputsShow14 = () => {

	input14.forEach(input => {
		input.style.display = 'block';
	})

	btnAlterar14.style.display = 'block';

}; 


const inputsNone14 = () => {
	input14.forEach(input => {
			input.style.display = 'none';
	})

	btnAlterar14.style.display = 'none'; 
};

const produtoD14 = document.querySelector('[data-tipo="descricao14"]');
const inputValorD14 = document.querySelector('[data-tipo="inputDescricao14"]'); 

const preco14 = document.querySelector('[data-tipo="preco14"]');
const inputValorP14 = document.querySelector('[data-tipo="inputPreco14"]'); 

const codigo14 = document.querySelector('[data-tipo="codigo14"]');
const inputValorC14 = document.querySelector('[data-tipo="inputCodigo14"]');

btnLapis14.addEventListener('click', () => {

	return inputsShow14();
}); 

btnAlterar14.addEventListener('click', () => {
		
		if(inputValorD14.value === '') {
			
			return inputsNone14(); 

		} else {
			
			produtoD14.innerText = inputValorD14.value;
			
			return inputsNone14();	

		}


		});

btnAlterar14.addEventListener('click', () => {
		
		if(inputValorP14.value === '') {
			
			return inputsNone14(); 

		} else {
			
			preco14.innerText = inputValorP14.value;
			
			return inputsNone14();	

		}

		});


btnAlterar14.addEventListener('click', () => {
		
		if(inputValorC14.value === '') {
			
			return inputsNone14(); 

		} else {
			
			codigo14.innerText = inputValorC14.value;
			
			return inputsNone14();	

		}

		});