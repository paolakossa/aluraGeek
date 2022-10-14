const btnAlterar1 = document.querySelector('[data-tipo="btnDescricao1"]');

const input1 = document.querySelectorAll('[data-tipo="input1"]');


const inputsShow1 = () => {

	input1.forEach(input => {
		input.style.display = 'block';
	})

	btnAlterar1.style.display = 'block';

}; 


const inputsNone1 = () => {
	input1.forEach(input => {
			input.style.display = 'none';
	})

	btnAlterar1.style.display = 'none'; 
};


const btnLapis1 = document.querySelector('[data-tipo="lapis1"]');

const produtoD1 = document.querySelector('[data-tipo="descricao1"]');
const inputValorD1 = document.querySelector('[data-tipo="inputDescricao1"]'); 


const preco1 = document.querySelector('[data-tipo="preco1"]');
const inputValorP1 = document.querySelector('[data-tipo="inputPreco1"]'); 

const codigo1 = document.querySelector('[data-tipo="codigo1"]');
const inputValorC1 = document.querySelector('[data-tipo="inputCodigo1"]');


btnLapis1.addEventListener('click', () => {

	return inputsShow1();
}); 

btnAlterar1.addEventListener('click', () => {
		
		if(inputValorD1.value === '') {
			
			return inputsNone1(); 

		} else {
			
			produtoD1.innerText = inputValorD1.value;
			
			return inputsNone1();	

		}


		});

btnAlterar1.addEventListener('click', () => {
		
		if(inputValorP1.value === '') {
			
			return inputsNone1(); 

		} else {
			
			preco1.innerText = inputValorP1.value;
			
			return inputsNone1();	

		}

		});


btnAlterar1.addEventListener('click', () => {
		
		if(inputValorC1.value === '') {
			
			return inputsNone1(); 

		} else {
			
			codigo1.innerText = inputValorC1.value;
			
			return inputsNone1();	

		}

		});
			
			
            

		


		
	



	  
	

   
			
    

