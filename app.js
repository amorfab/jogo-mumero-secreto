//Projeto do curso
// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do número secreto'; 

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

let listaDeNumerosSorteados = [];
let numeroMaxDeNumero = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 0;

exibirMensagensIniciais();

function exibirTextoNaTela (tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagensIniciais(){
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e ' + numeroMaxDeNumero);
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroMaxDeNumero + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
    if (quantidadeDeElementosNaLista == numeroMaxDeNumero){
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        //console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function verificarChute(){
    let chute = document.querySelector('input').value;
    tentativas++;
    //console.log(`O número secrero é: ${numeroSecreto}`);
    //console.log(`O chute é: ${chute}`);

    if (chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativas = tentativas==1?'tentativa':'tentativas';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativas}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        exibirTextoNaTela('h1', 'Você não chutou bem. Tente novamente!');
        if(chute > numeroSecreto){
            exibirTextoNaTela('p', 'O número secreto é menor');
        }else{
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        limpaCampo();
    }
}

function limpaCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 0;
    limpaCampo();
    exibirMensagensIniciais();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

/*
//Desafio Modulo02
function exibirHelloWord(){
    console.log('Olá, mundo!');
}

function exibirNome (nome){
    console.log(`Olá, ${nome}!`);
}

function dobrarNumero(numero){
    return (numero * 2);
}

function mediaTresNumeros(numero1,numero2,numero3){
    return ((numero1+numero2+numero3)/3);
}

function maiorNumero(numero1,numero2){
    if (numero1>numero2){
        return numero1;
    }else{
        return numero2;
    }
}

function quadradoDoNumero(numero){
    return (numero * numero);
}

exibirHelloWord();
exibirNome('Fabiana');
console.log('Dobro do numero ' + dobrarNumero(10));
console.log('Media de tres numeros '+ mediaTresNumeros(8.5,7,9));
console.log('Maior numero '+ maiorNumero(9, 15));
console.log('Numero ao quadrado '+ quadradoDoNumero(6));
*/

/*
//Desafio Modulo03
function calculaIMC(altura, peso){
    let imc = (peso / (altura * altura));
    return imc;
}
console.log('IMC de alguem com 1,61 de altura e 54 kg de peso: ' + calculaIMC(1.61,54));

function fatorial(numero){
    let resultado=1;
    
    //solucao com while decrescente
    // let multiplicador=numero==0?1:numero;
    // while (multiplicador>=1){
    //     resultado *= multiplicador;
    //     multiplicador--;
    // }

    //solucao com while crescente
    // let multiplicador=1;
    // while (multiplicador <= numero){
    //     resultado *= multiplicador;
    //     multiplicador++;
    // }

    //solucao com for
    for(i=1; i<=numero; i++){
        resultado *= i;
    }

    return resultado;
}
console.log('0! -> ' + fatorial(0));
console.log('1! -> ' + fatorial(1));
console.log('2! -> ' + fatorial(2));
console.log('3! -> ' + fatorial(3));
console.log('4! -> ' + fatorial(4));
console.log('5! -> ' + fatorial(5));
console.log('6! -> ' + fatorial(6));
console.log('7! -> ' + fatorial(7));
console.log('8! -> ' + fatorial(8));
console.log('9! -> ' + fatorial(9));

function ConverteDolarParaReal(valor){
    return (valor*4.8).toFixed(2);
}

console.log('Conversao de 100 dolares para real: ' + ConverteDolarParaReal(100));

function calculoAreaRetangulo(altura, largura){
    return (altura * largura);
}

console.log('Area do retangulo 100x20: ' + calculoAreaRetangulo(100,20));

function calculoPerimetroRetangulo(altura, largura){
    return 2*(altura + largura);
}

console.log('Perimetro do retangulo 100x20: ' + calculoPerimetroRetangulo(100,20));

function calculoPerimetroCirculo(raio){
    return 2*Math.PI*raio;
}

console.log('Perimetro circulo de raio 100: ' + calculoPerimetroCirculo(100));

function mostrarTabuada(numero) {
    for (let i = 1; i <= 10; i++) {
      let resultado = numero * i;
      console.log(`${numero} x ${i} = ${resultado}`);
    }
  }
  
  let numero = 7;
  mostrarTabuada(numero);
*/

/*
//Desafio Modulo04
let listaGenerica = [];
console.log(listaGenerica);

let linguagensDeProgramacao = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
console.log(linguagensDeProgramacao);

linguagensDeProgramacao.push('Java');
linguagensDeProgramacao.push('Ruby');
linguagensDeProgramacao.push('GoLang');
console.log(linguagensDeProgramacao);

let listaDeAlunos = ['João', 'Maria', 'Joaquim'];
console.log(listaDeAlunos);
console.log(listaDeAlunos[0]);
console.log(listaDeAlunos[1]);
console.log(listaDeAlunos[2]);
*/