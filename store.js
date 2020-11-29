import React, {createContext, useReducer} from "react";
import { RootReducer } from './reducers'
import  palavras  from './palavras'

export const ROOT_STATE = {
    gameStarted: false,
    players: [ 
        {name: "Equipe Cao", points: 0, animatedValue: 0},
        {name: "Equipe Pino", points: 0, animatedValue: 0},
        {name: "Equipe Peka", points: 0, animatedValue: 0},
        {name: "Equipe Roca", points: 0, animatedValue: 0},
    ],
    palavras: palavras,
    categoria: "objetos",
    tabuleiro: [],
    playerTurn: 0,
    turn: 0,
}

export const FUNCTIONS = {
    movePlayer: function(n,animatedValue) { }
}

const Store = ({children}) => {
    const [ROOT_STATE, ROOT_DISPATCH] = useReducer(RootReducer, ROOT_STATE);
    return (
        <Context.Provider value={[ROOT_STATE, ROOT_DISPATCH]}>
            {children}
        </Context.Provider>
    )
};

export const Context = createContext(ROOT_STATE);
export default Store;