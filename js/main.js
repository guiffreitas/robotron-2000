const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

const controle = document.querySelectorAll('[data-controle]')

const listaEstatistica = document.querySelectorAll('[data-estatistica')

controle.forEach( (elemento) => {
    elemento.addEventListener('click', (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode.querySelector('[data-contador]'))
        alteraEstatisticas(evento.target.dataset.controle, evento.target.dataset.peca)
    })
});

function manipulaDados(operacao, controle) {
    if(operacao == '-'){
        controle.value = parseInt(controle.value) - 1;

    } else {
        controle.value = parseInt(controle.value) + 1;
    };
};

function alteraEstatisticas(operacao, peca){
    listaEstatistica.forEach( (estatistica) => {
        if(operacao == '+'){
            estatistica.textContent = parseInt(estatistica.textContent) + pecas[peca][estatistica.dataset.estatistica]
        } else {
            estatistica.textContent = parseInt(estatistica.textContent) - pecas[peca][estatistica.dataset.estatistica]
        }
    })
}