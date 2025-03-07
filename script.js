document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('BotaoConhecaCursos').addEventListener('click', function() {
        document.getElementById('textoCursos').scrollIntoView({ behavior: 'smooth' });
    });

    const barraOpcoes = document.getElementById('BarraOpções');
    const opcoesMenu = document.querySelector('.opcoesMenu');
    
    // Adicionar um ouvinte de evento ao botão
    barraOpcoes.addEventListener('click', () => {
        // Alternar a visibilidade do menu dropdown
        document.addEventListener('click', function(event) {
            if (!barraOpcoes.contains(event.target) && !opcoesMenu.contains(event.target)) {
            opcoesMenu.style.display = 'none';
            }
        });
        opcoesMenu.style.display = (opcoesMenu.style.display === 'block') ? 'none' : 'block';
    });

});

