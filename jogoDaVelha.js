import PromptSync from "prompt-sync"
const ler = PromptSync()

let matriz = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
]

let pararJogo = 'nao'


while (pararJogo == 'nao') {
    //PRIMEIRA JOGADA
    console.log('JOGO DA VELHA PARA DOIS')
    console.log('Jogador 1, onde você deseja jogar?')
    console.log('[1] [2] [3]')
    console.log('[4] [5] [6]')
    console.log('[7] [8] [9]')
    let j1 = Number(ler())

    if(j1 == 1) matriz[0][0] = 'X'
    if(j1 == 2) matriz[0][1] = 'X'
    if(j1 == 3) matriz[0][2] = 'X'
    if(j1 == 4) matriz[1][0] = 'X'
    if(j1 == 5) matriz[1][1] = 'X'
    if(j1 == 6) matriz[1][2] = 'X'
    if(j1 == 7) matriz[2][0] = 'X'
    if(j1 == 8) matriz[2][1] = 'X'
    if(j1 == 9) matriz[2][2] = 'X'

    console.log(matriz[0])
    console.log(matriz[1])
    console.log(matriz[2])


    //SEGUNDA JOGADA
    console.log('Jogador 2, onde você deseja jogar?')
    console.log('[1] [2] [3]')
    console.log('[4] [5] [6]')
    console.log('[7] [8] [9]')
    let j2 = Number(ler())

    while (j2 == j1) {
        console.log('Posição já ocupada, escolha outra')
        j2 = Number(ler())
    }

    if(j2 == 1) matriz[0][0] = 'O'
    if(j2 == 2) matriz[0][1] = 'O'
    if(j2 == 3) matriz[0][2] = 'O'
    if(j2 == 4) matriz[1][0] = 'O'
    if(j2 == 5) matriz[1][1] = 'O'
    if(j2 == 6) matriz[1][2] = 'O'
    if(j2 == 7) matriz[2][0] = 'O'
    if(j2 == 8) matriz[2][1] = 'O'
    if(j2 == 9) matriz[2][2] = 'O'

    console.log(matriz[0])
    console.log(matriz[1])
    console.log(matriz[2])


    //TERCEIRA JOGADA
    console.log('Jogador 1, onde você deseja jogar?')
    console.log('[1] [2] [3]')
    console.log('[4] [5] [6]')
    console.log('[7] [8] [9]')
    let j3 = Number(ler())

    while (j3 == j1 || j3 == j2) {
        console.log('Posição já ocupada, escolha outra')
        j3 = Number(ler())
    }

    if(j3 == 1) matriz[0][0] = 'X'
    if(j3 == 2) matriz[0][1] = 'X'
    if(j3 == 3) matriz[0][2] = 'X'
    if(j3 == 4) matriz[1][0] = 'X'
    if(j3 == 5) matriz[1][1] = 'X'
    if(j3 == 6) matriz[1][2] = 'X'
    if(j3 == 7) matriz[2][0] = 'X'
    if(j3 == 8) matriz[2][1] = 'X'
    if(j3 == 9) matriz[2][2] = 'X'

    console.log(matriz[0])
    console.log(matriz[1])
    console.log(matriz[2])


    //QUARTA JOGADA
    console.log('Jogador 2, onde você deseja jogar?')
    console.log('[1] [2] [3]')
    console.log('[4] [5] [6]')
    console.log('[7] [8] [9]')
    let j4 = Number(ler())

    while (j4 == j1 || j4 == j2 || j4 == j3) {
        console.log('Posição já ocupada, escolha outra')
        j4 = Number(ler())
    }

    if(j4 == 1) matriz[0][0] = 'O'
    if(j4 == 2) matriz[0][1] = 'O'
    if(j4 == 3) matriz[0][2] = 'O'
    if(j4 == 4) matriz[1][0] = 'O'
    if(j4 == 5) matriz[1][1] = 'O'
    if(j4 == 6) matriz[1][2] = 'O'
    if(j4 == 7) matriz[2][0] = 'O'
    if(j4 == 8) matriz[2][1] = 'O'
    if(j4 == 9) matriz[2][2] = 'O'

    console.log(matriz[0])
    console.log(matriz[1])
    console.log(matriz[2])


    //QUINTA JOGADA
    console.log('Jogador 1, onde você deseja jogar?')
    console.log('[1] [2] [3]')
    console.log('[4] [5] [6]')
    console.log('[7] [8] [9]')
    let j5 = Number(ler())

    while (j5 == j1 || j5 == j2 || j5 == j3 || j5 == j4) {
        console.log('Posição já ocupada, escolha outra')
        j5 = Number(ler())
    }

    if(j5 == 1) matriz[0][0] = 'X'
    if(j5 == 2) matriz[0][1] = 'X'
    if(j5 == 3) matriz[0][2] = 'X'
    if(j5 == 4) matriz[1][0] = 'X'
    if(j5 == 5) matriz[1][1] = 'X'
    if(j5 == 6) matriz[1][2] = 'X'
    if(j5 == 7) matriz[2][0] = 'X'
    if(j5 == 8) matriz[2][1] = 'X'
    if(j5 == 9) matriz[2][2] = 'X'

    console.log(matriz[0])
    console.log(matriz[1])
    console.log(matriz[2])

    if(matriz[0][0] == 'X' && matriz[0][1] == 'X' && matriz[0][2] == 'X' ||
    matriz[1][0] == 'X' && matriz[1][1] == 'X' && matriz[1][2] == 'X' ||
    matriz[2][0] == 'X' && matriz[2][1] == 'X' && matriz[2][2] == 'X' ||

    matriz[0][0] == 'X' && matriz[1][0] == 'X' && matriz[2][0] == 'X' ||
    matriz[0][1] == 'X' && matriz[1][1] == 'X' && matriz[2][1] == 'X' ||
    matriz[0][2] == 'X' && matriz[1][2] == 'X' && matriz[2][2] == 'X' ||

    matriz[0][0] == 'X' && matriz[1][1] == 'X' && matriz[2][2] == 'X' ||
    matriz[0][2] == 'X' && matriz[1][1] == 'X' && matriz[2][0] == 'X' 
    ) {
        console.log('Jogador 1 ganhou!')
        pararJogo = 'sim'

        matriz = [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ]

        break
    }

    else if(matriz[0][0] == 'O' && matriz[0][1] == 'O' && matriz[0][2] == 'O' ||
    matriz[1][0] == 'O' && matriz[1][1] == 'O' && matriz[1][2] == 'O' ||
    matriz[2][0] == 'O' && matriz[2][1] == 'O' && matriz[2][2] == 'O' ||

    matriz[0][0] == 'O' && matriz[1][0] == 'O' && matriz[2][0] == 'O' ||
    matriz[0][1] == 'O' && matriz[1][1] == 'O' && matriz[2][1] == 'O' ||
    matriz[0][2] == 'O' && matriz[1][2] == 'O' && matriz[2][2] == 'O' ||

    matriz[0][0] == 'O' && matriz[1][1] == 'O' && matriz[2][2] == 'O' ||
    matriz[0][2] == 'O' && matriz[1][1] == 'O' && matriz[2][0] == 'O' 
    ) {
        console.log('Jogador 2 ganhou!')
        pararJogo = 'sim'

        matriz = [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ]

        break
    }

    //SEXTA JOGADA
    console.log('Jogador 2, onde você deseja jogar?')
    console.log('[1] [2] [3]')
    console.log('[4] [5] [6]')
    console.log('[7] [8] [9]')
    let j6 = Number(ler())

    while (j6 == j1 || j6 == j2 || j6 == j3 || j6 == j4 || j6 == j5) {
        console.log('Posição já ocupada, escolha outra')
        j6 = Number(ler())
    }

    if(j6 == 1) matriz[0][0] = 'O'
    if(j6 == 2) matriz[0][1] = 'O'
    if(j6 == 3) matriz[0][2] = 'O'
    if(j6 == 4) matriz[1][0] = 'O'
    if(j6 == 5) matriz[1][1] = 'O'
    if(j6 == 6) matriz[1][2] = 'O'
    if(j6 == 7) matriz[2][0] = 'O'
    if(j6 == 8) matriz[2][1] = 'O'
    if(j6 == 9) matriz[2][2] = 'O'

    console.log(matriz[0])
    console.log(matriz[1])
    console.log(matriz[2])

    if(matriz[0][0] == 'X' && matriz[0][1] == 'X' && matriz[0][2] == 'X' ||
    matriz[1][0] == 'X' && matriz[1][1] == 'X' && matriz[1][2] == 'X' ||
    matriz[2][0] == 'X' && matriz[2][1] == 'X' && matriz[2][2] == 'X' ||

    matriz[0][0] == 'X' && matriz[1][0] == 'X' && matriz[2][0] == 'X' ||
    matriz[0][1] == 'X' && matriz[1][1] == 'X' && matriz[2][1] == 'X' ||
    matriz[0][2] == 'X' && matriz[1][2] == 'X' && matriz[2][2] == 'X' ||

    matriz[0][0] == 'X' && matriz[1][1] == 'X' && matriz[2][2] == 'X' ||
    matriz[0][2] == 'X' && matriz[1][1] == 'X' && matriz[2][0] == 'X' 
    ) {
        console.log('Jogador 1 ganhou!')
        pararJogo = 'sim'

        matriz = [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ]

        break
    }

    else if(matriz[0][0] == 'O' && matriz[0][1] == 'O' && matriz[0][2] == 'O' ||
    matriz[1][0] == 'O' && matriz[1][1] == 'O' && matriz[1][2] == 'O' ||
    matriz[2][0] == 'O' && matriz[2][1] == 'O' && matriz[2][2] == 'O' ||

    matriz[0][0] == 'O' && matriz[1][0] == 'O' && matriz[2][0] == 'O' ||
    matriz[0][1] == 'O' && matriz[1][1] == 'O' && matriz[2][1] == 'O' ||
    matriz[0][2] == 'O' && matriz[1][2] == 'O' && matriz[2][2] == 'O' ||

    matriz[0][0] == 'O' && matriz[1][1] == 'O' && matriz[2][2] == 'O' ||
    matriz[0][2] == 'O' && matriz[1][1] == 'O' && matriz[2][0] == 'O' 
    ) {
        console.log('Jogador 2 ganhou!')
        pararJogo = 'sim'

        matriz = [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ]

        break
    }

    //SETIMA JOGADA
    console.log('Jogador 1, onde você deseja jogar?')
    console.log('[1] [2] [3]')
    console.log('[4] [5] [6]')
    console.log('[7] [8] [9]')
    let j7 = Number(ler())

    while (j7 == j1 || j7 == j2 || j7 == j3 || j7 == j4 || j7 == j5 || j7 == j6) {
        console.log('Posição já ocupada, escolha outra')
        j7 = Number(ler())
    }

    if(j7 == 1) matriz[0][0] = 'X'
    if(j7 == 2) matriz[0][1] = 'X'
    if(j7 == 3) matriz[0][2] = 'X'
    if(j7 == 4) matriz[1][0] = 'X'
    if(j7 == 5) matriz[1][1] = 'X'
    if(j7 == 6) matriz[1][2] = 'X'
    if(j7 == 7) matriz[2][0] = 'X'
    if(j7 == 8) matriz[2][1] = 'X'
    if(j7 == 9) matriz[2][2] = 'X'

    console.log(matriz[0])
    console.log(matriz[1])
    console.log(matriz[2])

    if(matriz[0][0] == 'X' && matriz[0][1] == 'X' && matriz[0][2] == 'X' ||
    matriz[1][0] == 'X' && matriz[1][1] == 'X' && matriz[1][2] == 'X' ||
    matriz[2][0] == 'X' && matriz[2][1] == 'X' && matriz[2][2] == 'X' ||

    matriz[0][0] == 'X' && matriz[1][0] == 'X' && matriz[2][0] == 'X' ||
    matriz[0][1] == 'X' && matriz[1][1] == 'X' && matriz[2][1] == 'X' ||
    matriz[0][2] == 'X' && matriz[1][2] == 'X' && matriz[2][2] == 'X' ||

    matriz[0][0] == 'X' && matriz[1][1] == 'X' && matriz[2][2] == 'X' ||
    matriz[0][2] == 'X' && matriz[1][1] == 'X' && matriz[2][0] == 'X' 
    ) {
        console.log('Jogador 1 ganhou!')
        pararJogo = 'sim'

        matriz = [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ]

        break
    }

    else if(matriz[0][0] == 'O' && matriz[0][1] == 'O' && matriz[0][2] == 'O' ||
    matriz[1][0] == 'O' && matriz[1][1] == 'O' && matriz[1][2] == 'O' ||
    matriz[2][0] == 'O' && matriz[2][1] == 'O' && matriz[2][2] == 'O' ||

    matriz[0][0] == 'O' && matriz[1][0] == 'O' && matriz[2][0] == 'O' ||
    matriz[0][1] == 'O' && matriz[1][1] == 'O' && matriz[2][1] == 'O' ||
    matriz[0][2] == 'O' && matriz[1][2] == 'O' && matriz[2][2] == 'O' ||

    matriz[0][0] == 'O' && matriz[1][1] == 'O' && matriz[2][2] == 'O' ||
    matriz[0][2] == 'O' && matriz[1][1] == 'O' && matriz[2][0] == 'O' 
    ) {
        console.log('Jogador 2 ganhou!')
        pararJogo = 'sim'

        matriz = [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ]

        break
    }

    //OITAVA JOGADA
    console.log('Jogador 2, onde você deseja jogar?')
    console.log('[1] [2] [3]')
    console.log('[4] [5] [6]')
    console.log('[7] [8] [9]')
    let j8 = Number(ler())

    while (j8 == j1 || j8 == j2 || j8 == j3 || j8 == j4 || j8 == j5 || j8 == j6 || j8 == j7) {
        console.log('Posição já ocupada, escolha outra')
        j8 = Number(ler())
    }

    if(j8 == 1) matriz[0][0] = 'O'
    if(j8 == 2) matriz[0][1] = 'O'
    if(j8 == 3) matriz[0][2] = 'O'
    if(j8 == 4) matriz[1][0] = 'O'
    if(j8 == 5) matriz[1][1] = 'O'
    if(j8 == 6) matriz[1][2] = 'O'
    if(j8 == 7) matriz[2][0] = 'O'
    if(j8 == 8) matriz[2][1] = 'O'
    if(j8 == 9) matriz[2][2] = 'O'

    console.log(matriz[0])
    console.log(matriz[1])
    console.log(matriz[2])

    if(matriz[0][0] == 'X' && matriz[0][1] == 'X' && matriz[0][2] == 'X' ||
    matriz[1][0] == 'X' && matriz[1][1] == 'X' && matriz[1][2] == 'X' ||
    matriz[2][0] == 'X' && matriz[2][1] == 'X' && matriz[2][2] == 'X' ||

    matriz[0][0] == 'X' && matriz[1][0] == 'X' && matriz[2][0] == 'X' ||
    matriz[0][1] == 'X' && matriz[1][1] == 'X' && matriz[2][1] == 'X' ||
    matriz[0][2] == 'X' && matriz[1][2] == 'X' && matriz[2][2] == 'X' ||

    matriz[0][0] == 'X' && matriz[1][1] == 'X' && matriz[2][2] == 'X' ||
    matriz[0][2] == 'X' && matriz[1][1] == 'X' && matriz[2][0] == 'X' 
    ) {
        console.log('Jogador 1 ganhou!')
        pararJogo = 'sim'

        matriz = [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ]

        break
    }

    else if(matriz[0][0] == 'O' && matriz[0][1] == 'O' && matriz[0][2] == 'O' ||
    matriz[1][0] == 'O' && matriz[1][1] == 'O' && matriz[1][2] == 'O' ||
    matriz[2][0] == 'O' && matriz[2][1] == 'O' && matriz[2][2] == 'O' ||

    matriz[0][0] == 'O' && matriz[1][0] == 'O' && matriz[2][0] == 'O' ||
    matriz[0][1] == 'O' && matriz[1][1] == 'O' && matriz[2][1] == 'O' ||
    matriz[0][2] == 'O' && matriz[1][2] == 'O' && matriz[2][2] == 'O' ||

    matriz[0][0] == 'O' && matriz[1][1] == 'O' && matriz[2][2] == 'O' ||
    matriz[0][2] == 'O' && matriz[1][1] == 'O' && matriz[2][0] == 'O' 
    ) {
        console.log('Jogador 2 ganhou!')
        pararJogo = 'sim'

        matriz = [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ]

        break
    }

    //NONA JOGADA
    console.log('Jogador 1, onde você deseja jogar?')
    console.log('[1] [2] [3]')
    console.log('[4] [5] [6]')
    console.log('[7] [8] [9]')
    let j9 = Number(ler())

    while (j9 == j1 || j9 == j2 || j9 == j3 || j9 == j4 || j9 == j5 || j9 == j6 || j9 == j7 || j9 == j8) {
        console.log('Posição já ocupada, escolha outra')
        j9 = Number(ler())
    }

    if(j9 == 1) matriz[0][0] = 'X'
    if(j9 == 2) matriz[0][1] = 'X'
    if(j9 == 3) matriz[0][2] = 'X'
    if(j9 == 4) matriz[1][0] = 'X'
    if(j9 == 5) matriz[1][1] = 'X'
    if(j9 == 6) matriz[1][2] = 'X'
    if(j9 == 7) matriz[2][0] = 'X'
    if(j9 == 8) matriz[2][1] = 'X'
    if(j9 == 9) matriz[2][2] = 'X'

    console.log(matriz[0])
    console.log(matriz[1])
    console.log(matriz[2])

    if(matriz[0][0] == 'X' && matriz[0][1] == 'X' && matriz[0][2] == 'X' ||
    matriz[1][0] == 'X' && matriz[1][1] == 'X' && matriz[1][2] == 'X' ||
    matriz[2][0] == 'X' && matriz[2][1] == 'X' && matriz[2][2] == 'X' ||

    matriz[0][0] == 'X' && matriz[1][0] == 'X' && matriz[2][0] == 'X' ||
    matriz[0][1] == 'X' && matriz[1][1] == 'X' && matriz[2][1] == 'X' ||
    matriz[0][2] == 'X' && matriz[1][2] == 'X' && matriz[2][2] == 'X' ||

    matriz[0][0] == 'X' && matriz[1][1] == 'X' && matriz[2][2] == 'X' ||
    matriz[0][2] == 'X' && matriz[1][1] == 'X' && matriz[2][0] == 'X' 
    ) {
        console.log('Jogador 1 ganhou!')
        pararJogo = 'sim'

        matriz = [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ]

        break
    }

    else if(matriz[0][0] == 'O' && matriz[0][1] == 'O' && matriz[0][2] == 'O' ||
    matriz[1][0] == 'O' && matriz[1][1] == 'O' && matriz[1][2] == 'O' ||
    matriz[2][0] == 'O' && matriz[2][1] == 'O' && matriz[2][2] == 'O' ||

    matriz[0][0] == 'O' && matriz[1][0] == 'O' && matriz[2][0] == 'O' ||
    matriz[0][1] == 'O' && matriz[1][1] == 'O' && matriz[2][1] == 'O' ||
    matriz[0][2] == 'O' && matriz[1][2] == 'O' && matriz[2][2] == 'O' ||

    matriz[0][0] == 'O' && matriz[1][1] == 'O' && matriz[2][2] == 'O' ||
    matriz[0][2] == 'O' && matriz[1][1] == 'O' && matriz[2][0] == 'O' 
    ) {
        console.log('Jogador 2 ganhou!')
        pararJogo = 'sim'

        matriz = [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ]

        break
    }

    else{
        console.log('Ninguem venceu...')
        
        matriz = [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ]

        break
    }
}