const btnAlterar2 = document.querySelector('[data-tipo="btnDescricao2"]');

const input2 = document.querySelectorAll('[data-tipo="input2"]');


const inputsShow2 = () => {

	input2.forEach(input => {
		input.style.display = 'block';
	})

	btnAlterar2.style.display = 'block';

}; 


const inputsNone2 = () => {
	input2.forEach(input => {
			input.style.display = 'none';
	})

	btnAlterar2.style.display = 'none'; 
};


const btnLapis2 = document.querySelector('[data-tipo="lapis2"]');

const produtoD2 = document.querySelector('[data-tipo="descricao2"]');
const inputValorD2 = document.querySelector('[data-tipo="inputDescricao2"]'); 

const preco2 = document.querySelector('[data-tipo="preco2"]');
const inputValorP2 = document.querySelector('[data-tipo="inputPreco2"]'); 

const codigo2 = document.querySelector('[data-tipo="codigo2"]');
const inputValorC2 = document.querySelector('[data-tipo="inputCodigo2"]');

btnLapis2.addEventListener('click', () => {

	return inputsShow2();
}); 

btnAlterar2.addEventListener('click', () => {
		
		if(inputValorD2.value === '') {
			
			return inputsNone2(); 

		} else {
			
			produtoD2.innerText = inputValorD2.value;
			
			return inputsNone2();	

		}


		});

btnAlterar2.addEventListener('click', () => {
		
		if(inputValorP2.value === '') {
			
			return inputsNone2(); 

		} else {
			
			preco2.innerText = inputValorP2.value;
			
			return inputsNone2();	

		}

		});


btnAlterar2.addEventListener('click', () => {
		
		if(inputValorC2.value === '') {
			
			return inputsNone2(); 

		} else {
			
			codigo2.innerText = inputValorC2.value;
			
			return inputsNone2();	

		}

		});
