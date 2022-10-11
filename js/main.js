	/*Mostrar barra de pesquisa no mobile */ 

	const input = document.querySelector('.input__cabecalho');
    const clique = document.querySelector('.input__cabecalho--lupa');
    
    clique.addEventListener('click', () => {
    	input.style.display = 'block';
    });

     clique.addEventListener('dblclick', () => {
    input.style.display = 'none';

    })

    
/*Validação do formulário de envio de mensagem*/

const nome = document.querySelector('.rodape__form--input');
const labelNome = document.querySelector('.rodape__form--labelNome');
let validNome = false; 


const msg = document.querySelector('.rodape__form--msg');
const labelMsg = document.querySelector('.rodape__form--labelMsg');
let validMsg = false; 

nome.addEventListener('keyup', () => {

	if(nome.value.length <= 2 ) {
		labelNome.setAttribute('style', 'color: #FF4A4A');
		labelNome.innerHTML = 'Nome *Insira, no mínimo, 3 caracteres';
		nome.setAttribute('style', 'border-color:#FF4A4A');
		validNome = false;
	} else {
		labelNome.setAttribute('style', 'color: #59CE8F');
		labelNome.innerHTML = 'Nome';
		nome.setAttribute('style', 'border-color:#59CE8F');
		validNome = true;
	}
});

msg.addEventListener('keyup', () => {

	if(msg.value.length <= 2 ) {
		labelMsg.setAttribute('style', 'color: #FF4A4A');
		labelMsg.innerHTML = 'Este campo não pode estar vazio';
		msg.setAttribute('style', 'border-color:#FF4A4A');
		validMsg = false;
	} else {
		labelMsg.setAttribute('style', 'color: #59CE8F');
		labelMsg.innerHTML = 'Escreva sua mensagem';
		msg.setAttribute('style', 'border-color:#59CE8F');
		validMsg = true;
	}
});

const btnEnviarMensagem = document.querySelector('.rodape__form--botao');
const msgSucesso = document.querySelector('.rodape__mensagem');

btnEnviarMensagem.addEventListener('click', () => {

		if(nome.value.length <= 2 && msg.value.length <= 2) {
			msgSucesso.setAttribute('style', 'display:none');
			msgSucesso.innerHTML = '';
		

	} else {

		msgSucesso.setAttribute('style', 'display:block');
		msgSucesso.innerHTML = 'Sua mensagem foi enviada com sucesso!';
		nome.value = '';
		msg.value = '';

		
	}


		
});