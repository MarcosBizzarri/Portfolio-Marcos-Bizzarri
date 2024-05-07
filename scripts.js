// scripts.js
function mostrarConteudo(id) {
    // Oculta todas as seções
    var secoes = document.querySelectorAll('main section');
    secoes.forEach(function(secao) {
        secao.style.display = 'none';
    });

    // Mostra a seção desejada
    var secaoDesejada = document.getElementById(id);
    secaoDesejada.style.display = 'block';
}
