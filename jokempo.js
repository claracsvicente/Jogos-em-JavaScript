import random from "random"
import PromptSync from "prompt-sync"
const ler = PromptSync()

console.log(`JOKENPO
    
Escolha entre Pedra, Papel ou Tesoura`)
let escolha = ler().toLowerCase()

while (escolha != 'pedra' && escolha != 'papel' && escolha != 'tesoura') {
    console.log('\nEscolha inválida, digite novamente \nPedra, Papel ou Tesoura')
    escolha = ler().toLowerCase()
}

let maquina = random.int(1, 3)

if(escolha == 'pedra') {
    if(maquina == 1) {
        console.log('\nJogador Pedra X Máquina Pedra \nEmpate')
    }

    if(maquina == 2) {
        console.log('\nJogador Pedra X Máquina Papel \nMáquina venceu!')
    }

    if(maquina == 3) {
        console.log('\nJogador Pedra X Máquina Tesoura \nJogador venceu!')
    }
}

if(escolha == 'papel') {
    if(maquina == 1) {
        console.log('\nJogador Papel X Máquina Pedra \nJogador venceu')
    }

    if(maquina == 2) {
        console.log('\nJogador Papel X Máquina Papel \nEmpate')
    }

    if(maquina == 3) {
        console.log('\nJogador Papel X Máquina Tesoura \nMáquina venceu!')
    }
}

if(escolha == 'tesoura') {
    if(maquina == 1) {
        console.log('\nJogador Tesoura X Máquina Pedra \nMáquina venceu!')
    }

    if(maquina == 2) {
        console.log('\nJogador Tesoura X Máquina Papel \nJogador venceu!')
    }

    if(maquina == 3) {
        console.log('\nJogador Tesoura X Máquina Tesoura \nEmpate')
    }
}