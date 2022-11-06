//Menu
const btnMobile = document.getElementById('btn-mobile');

function toggleMenu() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active-menu');
}

btnMobile.addEventListener('click', toggleMenu);

//Pesquisa
const btnSearch = document.getElementById('search');

function toggleSearch() {
    const iconSearch = document.getElementById('search');
    iconSearch.classList.toggle('active-search');
    const search = document.getElementById('search-box');
    search.classList.toggle('active-search');
}

btnSearch.addEventListener('click', toggleSearch);

//Busca
var busca = document.getElementById('input');
var buscaUl = document.getElementById('ul');
busca.addEventListener('keydown', clique);

function clique() {
    buscaUl.style.display = 'block';
}

function filter() {
    var input, filter, ul, li, a, i;
    input = document.getElementById('input');
    filter = input.value.toUpperCase();
    ul = document.getElementById('ul');
    li = ul.getElementsByTagName('li');


    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName('a')[0];
        if (!input.value) {
            li[i].style.display = 'none';
        } else if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = 'block';
        } else {
            li[i].style.display = 'none';
        }
    }
}

//Cookei
var div = document.createElement('div');
div.id = 'cookie';

div.innerHTML = "<div id='cookie-box'><h2>Cookies<h2><p>Ao usar este site, você aceita automaticamente que usamos cookies. <a href='../politica-de-privacidade.html'>Saiba mais</a></p><button id='save'>Entendido</button></div>";

var body = document.querySelector('body');
body.appendChild(div);

const buttonSaveCookie = document.getElementById('save');
buttonSaveCookie.addEventListener('click', save);

var itemCookie = document.getElementById('cookie');
const cookie = window.localStorage.getItem('Cookies');
if(cookie) {
    itemCookie.style.display = 'none';
}

function save() {
    window.localStorage.setItem('Cookies', ('Aceito'));
    document.getElementById('cookie').style.display = 'none';
}