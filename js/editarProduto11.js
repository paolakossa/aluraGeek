const btnAlterar11 = document.querySelector('[data-tipo="btnDescricao11"]');

const btnLapis11 = document.querySelector('[data-tipo="lapis11"]');

const input11 = document.querySelectorAll('[data-tipo="input11"]');


const inputsShow11 = () => {

	input11.forEach(input => {
		input.style.display = 'block';
	})

	btnAlterar11.style.display = 'block';

}; 


const inputsNone11 = () => {
	input11.forEach(input => {
			input.style.display = 'none';
	})

	btnAlterar11.style.display = 'none'; 
};

const produtoD11 = document.querySelector('[data-tipo="descricao11"]');
const inputValorD11 = document.querySelector('[data-tipo="inputDescricao11"]'); 

const preco11 = document.querySelector('[data-tipo="preco11"]');
const inputValorP11 = document.querySelector('[data-tipo="inputPreco11"]'); 

const codigo11 = document.querySelector('[data-tipo="codigo11"]');
const inputValorC11 = document.querySelector('[data-tipo="inputCodigo11"]');

btnLapis11.addEventListener('click', () => {

	return inputsShow11();
}); 

btnAlterar11.addEventListener('click', () => {
		
		if(inputValorD11.value === '') {
			
			return inputsNone11(); 

		} else {
			
			produtoD11.innerText = inputValorD11.value;
			
			return inputsNone11();	

		}


		});

btnAlterar11.addEventListener('click', () => {
		
		if(inputValorP11.value === '') {
			
			return inputsNone11(); 

		} else {
			
			preco11.innerText = inputValorP11.value;
			
			return inputsNone11();	

		}

		});


btnAlterar11.addEventListener('click', () => {
		
		if(inputValorC11.value === '') {
			
			return inputsNone11(); 

		} else {
			
			codigo11.innerText = inputValorC11.value;
			
			return inputsNone11();	

		}

		});