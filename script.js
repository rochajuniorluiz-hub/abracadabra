const avanca = document.querySelectorAll(".btm-proximo")

avanca.forEach(button => {
    button.addEventListener('click', function(){
        const atual = document.querySelector('ativa')
        const proximopaso = 'passo' + this.getattributer('data-proximo');

        atual.classList.remove('ativo');
        document.getElementById(proximopaso).classList.add('ativo');
    })

})