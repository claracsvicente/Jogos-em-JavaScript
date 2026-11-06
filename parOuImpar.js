import random from "random"
import PromptSync from "prompt-sync"
const ler = PromptSync()

console.log(`JOGO DO PAR OU IMPAR

Jogador, escolha entre par ou impar`)
let jogador = ler().toLowerCase()

while (jogador != 'par' && jogador != 'impar') {
    console.log('\nEscolha inválida, digite novamente par ou impar')
    jogador = ler().toLowerCase()
}

console.log('\nAgora escolha um número de 1 a 5')
let numeroJogador = Number(ler())

while (numeroJogador < 1 || numeroJogador > 5) {
    console.log('\nNúmero inválido, escolha novamente um número entre 1 e 5')
    numeroJogador = Number(ler())
}

let numeroMaquina = random.int(1, 5)

let soma = numeroJogador + numeroMaquina
let resultado = soma % 2

if(jogador == 'par') {
    if(resultado == 0) {
        console.log(`\nJogador Par X Máquina Impar`)
        console.log(`${soma}`)
        console.log(`Jogador venceu! 1`)
    }

    if(resultado != 0) {
        console.log(`\nJogador Par X Máquina Impar`)
        console.log(`${soma}`)
        console.log(`Máquina venceu! 2`)
    }
}

if(jogador == 'impar') {
    if(resultado == 0) {
        console.log(`\nJogador Impar X Máquina Par`)
        console.log(`${soma}`)
        console.log(`Máquina venceu! 4`)
    }

    if(resultado != 0) {
        console.log(`\nJogador Impar X Máquina Par`)
        console.log(`${soma}`)
        console.log(`Jogador venceu! 4`)
    }
}