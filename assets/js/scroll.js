//Botão do Scroll
const scrol = document.getElementById('scroll');
scrol.addEventListener('click', cliqueTop);

function cliqueTop() {
    window.scroll({
        top: 0,
        behavior: 'smooth'
    });
}