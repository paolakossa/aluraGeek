const btnAlterar3 = document.querySelector('[data-tipo="btnDescricao3"]');

const btnLapis3 = document.querySelector('[data-tipo="lapis3"]');

const input3 = document.querySelectorAll('[data-tipo="input3"]');


const inputsShow3 = () => {

	input3.forEach(input => {
		input.style.display = 'block';
	})

	btnAlterar3.style.display = 'block';

}; 


const inputsNone3 = () => {
	input3.forEach(input => {
			input.style.display = 'none';
	})

	btnAlterar3.style.display = 'none'; 
};


const produtoD3 = document.querySelector('[data-tipo="descricao3"]');
const inputValorD3 = document.querySelector('[data-tipo="inputDescricao3"]'); 

const preco3 = document.querySelector('[data-tipo="preco3"]');
const inputValorP3 = document.querySelector('[data-tipo="inputPreco3"]'); 

const codigo3 = document.querySelector('[data-tipo="codigo3"]');
const inputValorC3 = document.querySelector('[data-tipo="inputCodigo3"]');

btnLapis3.addEventListener('click', () => {

	return inputsShow3();
}); 

btnAlterar3.addEventListener('click', () => {
		
		if(inputValorD3.value === '') {
			
			return inputsNone3(); 

		} else {
			
			produtoD3.innerText = inputValorD3.value;
			
			return inputsNone3();	

		}


		});

btnAlterar3.addEventListener('click', () => {
		
		if(inputValorP3.value === '') {
			
			return inputsNone3(); 

		} else {
			
			preco3.innerText = inputValorP3.value;
			
			return inputsNone3();	

		}

		});


btnAlterar3.addEventListener('click', () => {
		
		if(inputValorC3.value === '') {
			
			return inputsNone3(); 

		} else {
			
			codigo3.innerText = inputValorC3.value;
			
			return inputsNone3();	

		}

		});
