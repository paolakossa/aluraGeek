const btnAlterar15 = document.querySelector('[data-tipo="btnDescricao15"]');

const btnLapis15 = document.querySelector('[data-tipo="lapis15"]');

const input15 = document.querySelectorAll('[data-tipo="input15"]');


const inputsShow15 = () => {

	input15.forEach(input => {
		input.style.display = 'block';
	})

	btnAlterar15.style.display = 'block';

}; 


const inputsNone15 = () => {
	input15.forEach(input => {
			input.style.display = 'none';
	})

	btnAlterar15.style.display = 'none'; 
};

const produtoD15 = document.querySelector('[data-tipo="descricao15"]');
const inputValorD15 = document.querySelector('[data-tipo="inputDescricao15"]'); 

const preco15 = document.querySelector('[data-tipo="preco15"]');
const inputValorP15 = document.querySelector('[data-tipo="inputPreco15"]'); 

const codigo15 = document.querySelector('[data-tipo="codigo15"]');
const inputValorC15 = document.querySelector('[data-tipo="inputCodigo15"]');

btnLapis15.addEventListener('click', () => {

	return inputsShow15();
}); 

btnAlterar15.addEventListener('click', () => {
		
		if(inputValorD15.value === '') {
			
			return inputsNone15(); 

		} else {
			
			produtoD15.innerText = inputValorD15.value;
			
			return inputsNone15();	

		}


		});

btnAlterar15.addEventListener('click', () => {
		
		if(inputValorP15.value === '') {
			
			return inputsNone15(); 

		} else {
			
			preco15.innerText = inputValorP15.value;
			
			return inputsNone15();	

		}

		});


btnAlterar15.addEventListener('click', () => {
		
		if(inputValorC15.value === '') {
			
			return inputsNone15(); 

		} else {
			
			codigo15.innerText = inputValorC15.value;
			
			return inputsNone15();	

		}

		});