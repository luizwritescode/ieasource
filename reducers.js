import { flipCard } from './components/Carta'


export function SetupReducer(state, action) {
    switch(action.type) {

        case 'inc_num_of_players':
            return {...state, numOfPlayers: state.numOfPlayers + 1}
        case 'dec_num_of_players':
            return {...state, numOfPlayers: state.numOfPlayers - 1}
        case 'submit':
            return {...state, players: action.payload}
    }
}


export function GameReducer(state, action) {
    

    switch(action.type) {

        case 'start':
            return {...state, gameStarted: true}
        case 'quit':
            return {...state, gameStarted: false}
        case 'pegar_carta':
            return {...state, cardVisible:true, gameActive:true, prepStarted:true}
        case 'time_tick':
            if(action.timer === "prep") {
                
                return {...state, prepTimeLeft: action.payload - 1} 
            } else {
                return {...state, timeLeft: action.payload - 1 }
            }
        case 'times_up':
            if(action.timer === "prep") {
                flipCard(state)
                return {...state,timerStarted: true, prepStarted:false, cardVisible:false}
            } else if(action.timer === 'main') {
                if(state.cardYRotation <= 90) {
                    flipCard(state)
                }
                return {...state, timesUp: true, timerStarted:false}
            }
        case 'next_player':
            flipCard(state)
            let turns = state.turns + 1
            return {...state, cardVisible:false, gameActive:false, timesUp:false, turns: turns, playerTurn: turns % state.players.length}
    }
}

export function RootReducer(state, action) {
    switch(action.type) {
        case 'start_game': 

            console.log(action.players)

            return {...state, gameStarted: true, players: action.players}
    }
}
