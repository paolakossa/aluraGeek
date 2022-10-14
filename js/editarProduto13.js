const btnAlterar13 = document.querySelector('[data-tipo="btnDescricao13"]');

const btnLapis13 = document.querySelector('[data-tipo="lapis13"]');

const input13 = document.querySelectorAll('[data-tipo="input13"]');


const inputsShow13 = () => {

	input13.forEach(input => {
		input.style.display = 'block';
	})

	btnAlterar13.style.display = 'block';

}; 


const inputsNone13 = () => {
	input13.forEach(input => {
			input.style.display = 'none';
	})

	btnAlterar13.style.display = 'none'; 
};

const produtoD13 = document.querySelector('[data-tipo="descricao13"]');
const inputValorD13 = document.querySelector('[data-tipo="inputDescricao13"]'); 

const preco13 = document.querySelector('[data-tipo="preco13"]');
const inputValorP13 = document.querySelector('[data-tipo="inputPreco13"]'); 

const codigo13 = document.querySelector('[data-tipo="codigo13"]');
const inputValorC13 = document.querySelector('[data-tipo="inputCodigo13"]');

btnLapis13.addEventListener('click', () => {

	return inputsShow13();
}); 

btnAlterar13.addEventListener('click', () => {
		
		if(inputValorD13.value === '') {
			
			return inputsNone13(); 

		} else {
			
			produtoD13.innerText = inputValorD13.value;
			
			return inputsNone13();	

		}


		});

btnAlterar13.addEventListener('click', () => {
		
		if(inputValorP13.value === '') {
			
			return inputsNone13(); 

		} else {
			
			preco13.innerText = inputValorP13.value;
			
			return inputsNone13();	

		}

		});


btnAlterar13.addEventListener('click', () => {
		
		if(inputValorC13.value === '') {
			
			return inputsNone13(); 

		} else {
			
			codigo13.innerText = inputValorC13.value;
			
			return inputsNone13();	

		}

		});