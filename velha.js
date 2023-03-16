const casas = document.getElementsByTagName('input')
const b_reiniciar = document.getElementById('reiniciar')
const label_jogador = document.getElementById('jogador')
const jogador1 = document.getElementById('jogador1')

var jogador = "_"
var vencedor = "_"
var pontos1 = 0
var pontos2 = 0

var sortearJogador = function() {
    if(Math.floor(Math.random() * 2)==0) {
        jogador = "O"; //define o jogador O como atual
        label_jogador.innerText="O"; //exibe na página qual é o jogador atual
        label_jogador.style.color='#F00'; //deixa o texto na cor vermelha
    }else{
        jogador = "X";//define o jogador X como atual
        label_jogador.innerText="X"; //exibe na página qual é o jogador atual
        label_jogador.style.color='#00F'; //deixa o texto na cor azul
    }
}

sortearJogador()

var vitoria = function() {
    if((casas[0].value==casas[1].value) && (casas[1].value==casas[2].value) && casas[0].value!='_' ) {
        casas[0].style.backgroundColor='#0F0';
        casas[1].style.backgroundColor='#0F0';
        casas[2].style.backgroundColor='#0F0';

        if (jogador == 'X') {
            pontos1 += 1;
            jogador1.innerText = pontos1
        } else {
            pontos2 += 1;
            jogador2.innerText = pontos2
        }

        return casas[0].value;

    }else if((casas[3].value==casas[4].value) && (casas[4].value==casas[5].value) && casas[3].value!='_' ) {
        casas[3].style.backgroundColor='#0F0';
        casas[4].style.backgroundColor='#0F0';
        casas[5].style.backgroundColor='#0F0';

        if (jogador == 'X') {
            pontos1 += 1;
            jogador1.innerText =  (pontos1)
        } else {
            pontos2 += 1;
            jogador2.innerText =  (pontos2)
        }

        return casas[3].value;

    }else if((casas[6].value==casas[7].value) && (casas[7].value==casas[8].value) && casas[6].value!='_' ) {
        casas[6].style.backgroundColor='#0F0';
        casas[7].style.backgroundColor='#0F0';
        casas[8].style.backgroundColor='#0F0';

        if (jogador == 'X') {
            pontos1 += 1;
            jogador1.innerText =  (pontos1)
        } else {
            pontos2 += 1;
            jogador2.innerText =  (pontos2)
        }

        return casas[6].value;

    }else if((casas[0].value==casas[3].value) && (casas[3].value==casas[6].value) && casas[0].value!='_' ) {
        casas[0].style.backgroundColor='#0F0';
        casas[3].style.backgroundColor='#0F0';
        casas[6].style.backgroundColor='#0F0';

        if (jogador == 'X') {
            pontos1 += 1;
            jogador1.innerText =  (pontos1)
        } else {
            pontos2 += 1;
            jogador2.innerText =  (pontos2)
        }

        return casas[0].value;

    }else if((casas[1].value==casas[4].value) && (casas[4].value==casas[7].value) && casas[1].value!='_' ) {
        casas[1].style.backgroundColor='#0F0';
        casas[4].style.backgroundColor='#0F0';
        casas[7].style.backgroundColor='#0F0';

        if (jogador == 'X') {
            pontos1 += 1;
            jogador1.innerText =  (pontos1)
        } else {
            pontos2 += 1;
            jogador2.innerText =  (pontos2)
        }

        return casas[1].value;

    }else if((casas[2].value==casas[5].value) && (casas[5].value==casas[8].value) && casas[2].value!='_' ) {
        casas[2].style.backgroundColor='#0F0';
        casas[5].style.backgroundColor='#0F0';
        casas[8].style.backgroundColor='#0F0';

        if (jogador == 'X') {
            pontos1 += 1;
            jogador1.innerText =  (pontos1)
        } else {
            pontos2 += 1;
            jogador2.innerText =  (pontos2)
        }

        return casas[2].value;
    }else if((casas[0].value==casas[4].value) && (casas[4].value==casas[8].value) && casas[0].value!='_' ) {
        casas[0].style.backgroundColor='#0F0';
        casas[4].style.backgroundColor='#0F0';
        casas[8].style.backgroundColor='#0F0';

        if (jogador == 'X') {
            pontos1 += 1;
            jogador1.innerText =  (pontos1)
        } else {
            pontos2 += 1;
            jogador2.innerText =  (pontos2)
        }

        return casas[0].value;

    }else if((casas[2].value==casas[4].value) && (casas[4].value==casas[6].value) && casas[2].value!='_' ) {
        casas[2].style.backgroundColor='#0F0';
        casas[4].style.backgroundColor='#0F0';
        casas[6].style.backgroundColor='#0F0';

        if (jogador == 'X') {
            pontos1 += 1;
            jogador1.innerText =  (pontos1)
        } else {
            pontos2 += 1;
            jogador2.innerText =  (pontos2)
        }

        return casas[2].value;
    }

    return '_';
}

for (var i = 0; i < 9; i++) {
    casas[i].addEventListener('click', (event) => {
        if((event.target.value == '_') && ( vencedor == '_')) {
            event.target.value=jogador;
            event.target.style.color='black';

            trocarJogador(); 

            vencedor = vitoria();

            if(vencedor != '_') {
                label_jogador.innerText = `${vencedor} venceu!`;
            
            }
        }
    });
}

b_reiniciar.addEventListener('click', (event) => {
    for(var i = 0; i< 9; i++) {
        casas[i].value = '_';
        casas[i].style.color = 'white';
        casas[i].style.backgroundColor = 'white';
    }

    vencedor = '_';

    sortearJogador();
});

var trocarJogador = function() {
    if(jogador == 'X') {
        jogador = 'O';
        label_jogador.innerText = 'O';
        label_jogador.style.color = '#F00';
    
    }else{
        jogador = 'X';
        label_jogador.innerText = 'X';
        label_jogador.style.color = '#00F';
    }
}

