const btnAlterar5 = document.querySelector('[data-tipo="btnDescricao5"]');

const btnLapis5 = document.querySelector('[data-tipo="lapis5"]');

const input5 = document.querySelectorAll('[data-tipo="input5"]');


const inputsShow5 = () => {

	input5.forEach(input => {
		input.style.display = 'block';
	})

	btnAlterar5.style.display = 'block';

}; 


const inputsNone5 = () => {
	input5.forEach(input => {
			input.style.display = 'none';
	})

	btnAlterar5.style.display = 'none'; 
};

const produtoD5 = document.querySelector('[data-tipo="descricao5"]');
const inputValorD5 = document.querySelector('[data-tipo="inputDescricao5"]'); 

const preco5 = document.querySelector('[data-tipo="preco5"]');
const inputValorP5 = document.querySelector('[data-tipo="inputPreco5"]'); 

const codigo5 = document.querySelector('[data-tipo="codigo5"]');
const inputValorC5 = document.querySelector('[data-tipo="inputCodigo5"]');

btnLapis5.addEventListener('click', () => {

	return inputsShow5();
}); 

btnAlterar5.addEventListener('click', () => {
		
		if(inputValorD5.value === '') {
			
			return inputsNone5(); 

		} else {
			
			produtoD5.innerText = inputValorD5.value;
			
			return inputsNone5();	

		}


		});

btnAlterar5.addEventListener('click', () => {
		
		if(inputValorP5.value === '') {
			
			return inputsNone5(); 

		} else {
			
			preco5.innerText = inputValorP5.value;
			
			return inputsNone5();	

		}

		});


btnAlterar5.addEventListener('click', () => {
		
		if(inputValorC5.value === '') {
			
			return inputsNone5(); 

		} else {
			
			codigo5.innerText = inputValorC5.value;
			
			return inputsNone5();	

		}

		});