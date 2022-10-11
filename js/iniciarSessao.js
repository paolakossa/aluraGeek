/* Iniciar sessão de administrador*/

const email = document.querySelector('.form__login--inputEmail');
const senha = document.querySelector('.form__login--inputSenha');
const btnEntrar = document.querySelector('.form__login--botao'); 
const msgErro = document.querySelector ('.mensagem__erro');

btnEntrar.addEventListener('click', (evento) => {

	evento.preventDefault();
	
	if (email.value == 'admin@admin.com' && senha.value == 'admin') {
		localStorage.setItem('acesso', true); 

		window.location.href = 'file:///C:/Users/paola.kossa/OneDrive/Documentos/aluraGeek/produtos.html';

	} else {

		msgErro.style.display = "block";
	}
})