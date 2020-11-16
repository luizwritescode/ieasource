import React from 'react'
import * as fs from 'react-native-fs'


export const objetos  = await fs.readFile("./palavras/objetos.txt").toJSON()
console.log(objetos)
const loadWordJSON = (words) => {

}



export const palavras = {
    objetos: loadWordJSON(),
    cep: loadWordJSON(),
    cinema: loadWordJSON(),
    acoes: loadWordJSON(),
}