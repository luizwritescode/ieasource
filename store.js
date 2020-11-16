import React, {createContext, useReducer} from "react";
import { RootReducer } from './reducers'

export const ROOT_STATE = {
    gameStarted: false,
    players: []
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