	const input = document.querySelector('.input__cabecalho');
    const clique = document.querySelector('.input__cabecalho--lupa');
    
    clique.addEventListener('click', () => {
    	input.style.display = 'block';
    });

     clique.addEventListener('dblclick', () => {
    input.style.display = 'none';

    })




   