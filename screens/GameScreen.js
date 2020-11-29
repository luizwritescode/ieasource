import React, {Component, useEffect} from 'react'

import {Text, View, Button, Animated} from 'react-native'


import {styles} from '../public/styles/styles'

import {GameReducer} from '../reducers'

import {Context} from '../store'
import { pickWord } from '../palavras'

import { Carta, flipCard } from '../components/Carta'

const GameScreen = (props) => {
    const [ROOT_STATE, ROOT_DISPATCH] = React.useContext(Context)
    const INITIAL_STATE = {
        players:  ROOT_STATE.players ||  default_players,
        gameStarted: true,
        gameActive: false,
        cardVisible: false,
        timerStarted: false,
        timer: null,
        prepStarted: false,
        prepTimer: null,
        prepTimeLeft: 2,
        timeLeft: 2,
        timesUp: false,
        cardYRotation: 0,
        animatedValue: new Animated.Value(0),
        playerAnimatedValue: new Animated.Value(0),
        playerTurn:0,
        turns:0,
        word: pickWord(ROOT_STATE.palavras.objetos),
        casas: Array(),
        boardSize: 64
    }
    
    const [state, dispatch] = React.useReducer(GameReducer, INITIAL_STATE)
      
      state.animatedValue.addListener(({value}) => {
        state.cardYRotation = value;
    })

    var frontInterpolate = state.animatedValue.interpolate({
        inputRange: [0,180],
        outputRange: ['0deg', '180deg']
    })
    var backInterpolate = state.animatedValue.interpolate({
        inputRange: [0,180],
        outputRange: ['180deg', '360deg']
    })

    const frontStyle = {
        transform: [
            {rotateY: frontInterpolate}
        ]
    }
    const backStyle = {
        transform: [
            {rotateY: backInterpolate}
        ]
    }

    
    function movePlayer(playerTurn, n) {
        props.navigation.navigate('Game', { screen:'GameScreen'})
        var val = n * 150
        ROOT_DISPATCH({type: "player_move", playerTurn:playerTurn, value: val})
        window.scrollTo(0, n*150)
    }
    
    movePlayer(ROOT_STATE.playerTurn, 2)

    function nextPlayer() {
        dispatch({type:"next_player"})
    }
    function pegarCarta() {
      dispatch({type:"pick_word", bank:ROOT_STATE.palavras.objetos})
      dispatch({type:"pegar_carta"})

      flipCard()
    }

    function acertei() {
        dispatch({type:'acerto', player: state.playerTurn, points: 1})
        movePlayer()
        console.log(state.players)
    }
     

    function flipCard() {
        if(state.cardYRotation >= 90) {
            Animated.spring(state.animatedValue, {
                toValue: 0,
                friction: 8,
                tension: 10
            }).start()
    
        } else {
            Animated.spring(state.animatedValue, {
                toValue: 180,
                friction: 8,
                tension: 10
            }).start()
        }
    }
  
      return(
        <View style={{display:"flex",flex:"1",flexDirection:"column"}}>
          <View style={{flex:"1",display:"flex",flexDirection:'column',justifyContent:"center",alignItems:"center"}}>
            <View style={{flex:"1",display:"flex",flexDirection:'column',justifyContent:"center",alignItems:"center"}}>
                <Text style={styles.h2}>Vez de {ROOT_STATE.players[state.playerTurn].name}</Text>
            </View>
            <View style={{flex:"1",display:"flex",flexDirection:'column',justifyContent:"top",alignItems:"center"}}>
                <Timer visible={state.prepStarted}
                        on={state.prepStarted}
                        display={state.prepTimeLeft}
                        state={state}
                        dispatch={dispatch}
                        name='prep'/>

                <Timer visible={state.timerStarted}
                        display={state.timeLeft}
                        on={state.timerStarted}
                        display={state.timeLeft}
                        state={state}
                        dispatch={dispatch}
                        name='main'/>
            </View>
            </View>
          
          <View style={{flex:"1"}}>
            <Carta
                frontStyle={frontStyle}
                backStyle={backStyle}
                palavra={state.word}
                categoria={ROOT_STATE.categoria}
            />
          </View> 

            

            <View style={{display:"flex", flexDirection:"column",flex:"1",justifyContent:"center"}}>
                <GetCard visible={!state.gameActive}
                    onPress={pegarCarta} />

                <GameButtons visible={state.timerStarted}  
                        flipCard={flipCard}
                        acertei={acertei} />

                <TimesUp visible={state.timesUp}
                            nextPlayer={nextPlayer}/>
            </View>
        </View>
      )
    
  }

const Timer = (props) => {
    if(props.name === 'prep' && props.visible) {
        useEffect(() => {
        const prepTimer = setInterval(() => {
        const { prepTimeLeft } = props.state

        if(prepTimeLeft > 0) {
            props.dispatch({type:"time_tick", timer:"prep", payload: prepTimeLeft})
        }

        if(prepTimeLeft === 0) {
            clearInterval(prepTimer)
            props.dispatch({type:"times_up", timer:"prep"})
        }}
        , 1000)
        return () => clearInterval(prepTimer)
        })
    } else if(props.name === 'main' && props.visible) {
        useEffect(() => {
            const timer = setInterval(() => {
                const { timeLeft } = props.state
          
                if(timeLeft > 0) {
                  props.dispatch({type:"time_tick", timer:"main", payload: timeLeft})
                }
          
                if(timeLeft === 0) {
                  clearInterval(timer)
                  props.dispatch({type:"times_up", timer:"main"})
                }
              }, 1000)
              return () => clearInterval(timer)
        })
    }

    if(props.visible) {
        return(
            
                <Text style={styles.h1}>{props.display}</Text>
            
        ) 
    } else return null
}

const GetCard = (props) => {
    if (props.visible) {
        return(
        <View style={{display:"flex", flexDirection:"column",flex:"1", justifyContent:"center", alignItems:"center"}}>
            <Button title="Pegar carta" onPress={ props.onPress }/>
        </View>
        )
    } else return null
}
  
  
function GameButtons(props) {

    if(props.visible) {
        return(
            <View style={{display:"flex", justifyContent:"space-around",alignItems:"center"}}>
                <Button title="mostrar" onPress={() => { props.flipCard() }}/>
                <Button title="acertei" onPress={() => props.acertei()}/>
            </View>
        )
    }
    else return null
}

function TimesUp(props) {
    if (props.visible) {
        return( 
            <View style={{display:"flex",flexDirection:"column", justifyContent:"space-around",alignItems:"center"}}>
                <Text>TEMPO ACABOU</Text>
                <Button title="proximo" onPress={props.nextPlayer}/>
            </View>
        )
    } else return null
}

const default_players = [
    {name: "Equipe Cao"},
    {name: "Equipe Pino"},
    {name: "Equipe Peka"},
    {name: "Equipe Roca"},
]

export default GameScreen