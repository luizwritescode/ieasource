import React from 'react'


import { objetos } from './palavras/objetos'

import objetos_pontuados from './palavras/objetos_pontos.json'

const OBJETOS = objetos.split("\n")

const loadWordJSON = (words) => {
    var json = {}

    words.forEach( (word, i ) => {
        json[word] = 0
    })

    return json
}

const palavras = {
    objetos: objetos_pontuados,
    // cep: loadWordJSON(),
    // cinema: loadWordJSON(),
    // acoes: loadWordJSON(),
}

console.log(palavras)

export function pickWord( bank ) {
    var keys = Object.keys(bank)
    var key = keys[ keys.length * Math.random() << 0]
    return {word: key, value: bank[key]}
}

export default palavras