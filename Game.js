import * as React from 'react';
import {Text, View, Button, Alert} from 'react-native';
import { Input, Card, Header } from 'react-native-elements';
import {Container, Row} from 'react-bootstrap'

import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'


import {styles} from './public/styles/styles'
import css from './public/styles/styles.css'

import { GameReducer, RootReducer } from './reducers'

import Store, {ROOT_STATE} from './store'

import GameScreen from './screens/GameScreen'
import TitleScreen from './screens/TitleScreen'
import SetupScreen from './screens/SetupScreen'

import objetos from './palavras'

const Head = (props) => {
  return (
    <Header >
          <Button title="mostrar" />
          <Button title="tabulero" />
    </Header >
  )
}

const TitleStack = createStackNavigator()
const GameStack = createStackNavigator()

export const RootContext = React.createContext()

const QuitAlert = () => {
  Alert.alert(
    "Tem certeza que quer abandonar o jogo?",
    [
      {
        text: "Não",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      },
      { text: "Sim", onPress: () => console.log("OK Pressed") }
    ],
    { cancelable: false }
  );
}

const ShowBoardButton = (props) => {
  return null
}

const QuitButton = (props) => {
  return <Button title="quit" onPress={() => QuitAlert()}/>
}

const Game = (props) => {


    const [state, dispatch] = React.useReducer(RootReducer, ROOT_STATE)

    return(
      
      
      <Container style={{display:"flex", flex:"1", flexDirection:'column', justifyContent:"space-evenly"}}>
        <NavigationContainer>
          <Store>

          
            <GameStack.Navigator initialRouteName= "TitleScreen" >
              <GameStack.Screen
                name="Game"
                component={GameScreen}
                options={{headerTitleStyle:{diplay:"none"}, headerLeft: ShowBoardButton, headerRight: QuitButton}}
                /> 
              <TitleStack.Screen
                name="TitleScreen"
                component={TitleScreen}
                />
              <TitleStack.Screen
                name="SetupScreen"
                component={SetupScreen}
                />

              </GameStack.Navigator>
         
          </Store>
        </NavigationContainer>
      </Container>

    )
  }

  


export default Game