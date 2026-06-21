
const html      = document.documentElement;
const btnTema   = document.getElementById('btn-tema');
const temaIcone = document.getElementById('tema-icone');
const temaTexto = document.getElementById('tema-texto');


const temaSalvo = localStorage.getItem('tema') || 'dark';
aplicarTema(temaSalvo);

btnTema.addEventListener('click', function () {
  const atual = html.getAttribute('data-theme');
  const novo  = atual === 'dark' ? 'light' : 'dark';
  aplicarTema(novo);
  localStorage.setItem('tema', novo);
});

function aplicarTema(tema) {
  html.setAttribute('data-theme', tema);
  if (tema === 'light') {
    temaIcone.textContent = '🌙';
    temaTexto.textContent = 'Escuro';
  } else {
    temaIcone.textContent = '☀️';
    temaTexto.textContent = 'Claro';
  }
}


const btnMenu  = document.getElementById('btn-menu');
const navLinks = document.getElementById('nav-links');

btnMenu.addEventListener('click', function () {
  const aberto = navLinks.classList.toggle('aberto');
  btnMenu.classList.toggle('aberto', aberto);
  btnMenu.setAttribute('aria-expanded', aberto);
});


navLinks.querySelectorAll('a').forEach(function (link) {
  link.addEventListener('click', function () {
    navLinks.classList.remove('aberto');
    btnMenu.classList.remove('aberto');
    btnMenu.setAttribute('aria-expanded', false);
  });
});


document.querySelectorAll('.nav-links a').forEach(function (link) {

  const paginaLink  = link.getAttribute('href').split('/').pop();
  const paginaAtual = window.location.pathname.split('/').pop() || 'sobre.html';

  if (paginaLink === paginaAtual) {
    link.classList.add('ativo');
  }
});
