
/*
    Anotações:
                O código document.querySelector('h1') seleciona o elemento h1 no HTML, e a propriedade innerHTML permite que você altere o conteúdo de texto desse elemento. Ao atribuir o valor 'Adivinhe o número secreto' a innerHTML, você está atualizando o texto exibido no cabeçalho da página.
                Ex:
                    let titulo = document.querySelector('h1');
                    titulo.innerHTML = 'Adivinhe o número secreto';
                    let paragrafo = document.querySelector('p');
                    paragrafo.innerHTML = 'Escolhe um numero entre 1 e 10';

                As funções em JavaScript podem ter um nome.
                Palavra-chave function: É usada para declarar uma função em JavaScript
                Ex:
                    function verificarNumero(numero) {
                                if (numero > 0) {
                                    console.log("O número é positivo.");
                                } else if (numero < 0) {
                                    console.log("O número é negativo.");
                                } else {
                                    console.log("O número é zero.");
                                }
                    }
*/ 
const intervalo = 20;
let listaDeNumeroSorteados = [];
let numeroSecreto = numeroAleatorio();
console.log(numeroSecreto);
let tentativas = 1
let palavraTentativas = tentativas > 1? 'tentativas' : 'tentativa';
let titulo = 'Adivinhe o número secreto';
let menssagemJogo = `Escolha um número de 1 a ${intervalo}`;
alteraTextPelaTag('h1', titulo);
alteraTextPelaTag('.texto__paragrafo', menssagemJogo);

function alteraTextPelaTag(tag, text, cor){
    let campo = document.querySelector(tag);
    campo.innerHTML = text;
    if(cor){
        campo.style.color = cor;
    }
}

function numeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * intervalo + 1);
    let qntdElementosLista = listaDeNumeroSorteados.length;
    if(qntdElementosLista == intervalo){
        listaDeNumeroSorteados = [];
    }

    if(listaDeNumeroSorteados.includes(numeroEscolhido)){
        return numeroAleatorio();
    }
    else{
        listaDeNumeroSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function verificarChute(){
    let chute = document.querySelector('.container__input').value;
    if(chute == numeroSecreto){
        
        let mensagemTentativas = `Você acertou com ${tentativas} ${palavraTentativas}!`;
        alteraTextPelaTag('.resultado_texto', mensagemTentativas, 'green');
        alteraTextPelaTag('.resultado_texto.dica', '');
        console.log(chute == numeroSecreto);
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.querySelector('.container__botao').setAttribute('disabled', true);
    }
    else{
        if(chute > numeroSecreto){
            alteraTextPelaTag('.resultado_texto.principal', 'Você errou!', 'red');
            alteraTextPelaTag('.resultado_texto.dica', 'número secreto é menor!');
            tentativas++;
            console.log(chute == numeroSecreto);
        }
        else{
            alteraTextPelaTag('.resultado_texto.principal', 'Você errou!', 'red');
            alteraTextPelaTag('.resultado_texto.dica', 'número secreto é maior!');
            tentativas++;
            console.log(chute == numeroSecreto);
        }
        limpaCampo();
    }
}

function reiniciaJogo(){
   numeroSecreto = numeroAleatorio();
   tentativas = 1;
   limpaCampo();
   alteraTextPelaTag('.resultado_texto.principal', '');
   document.getElementById('reiniciar').setAttribute('disabled', true);
   document.querySelector('.container__botao').removeAttribute('disabled');
}

function limpaCampo(){
    chute = document.querySelector('.container__input')
    chute.value = '';
}
function verificaPrompt(){
    console.log('Prompt foi clicado');
}


