import * as React from 'react';
import {Text, View, Button, Alert} from 'react-native';
import { Input, Card, Header } from 'react-native-elements';
import {Container, Row} from 'react-bootstrap'

import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'


import {styles} from './public/styles/styles'

import { GameReducer, RootReducer } from './reducers'

import Store, {ROOT_STATE} from './store'

import GameScreen from './screens/GameScreen'
import TitleScreen from './screens/TitleScreen'
import SetupScreen from './screens/SetupScreen'

import Tabuleiro from './components/Tabuleiro';


const Head = (props) => {
  return (
    <Header >
          <Button title="mostrar" />
          <Button title="tabulero" />
    </Header >
  )
}

const RootStack = createStackNavigator()
const TitleStack = createStackNavigator()
const GameStack = createStackNavigator()

export const RootContext = React.createContext()

const QuitAlert = () => {
  return Alert.alert(
    "Tem certeza que quer abandonar o jogo?",
    [
      {
        text: "Não",
        
        style: "cancel"
      },
      { text: "Sim" }
    ],
    { cancelable: false }
  )
  
}

const TitleNavigator = (props) => {

  
  return(
    <TitleStack.Navigator initialRouteName={"TitleScreen"}>
                
                      <TitleStack.Screen
                        name="TitleScreen"
                        component={TitleScreen}
                        />
                        <TitleStack.Screen
                        name="SetupScreen"
                        component={SetupScreen}
                        />
                      </TitleStack.Navigator>

  )
}

const GameNavigator = (props) => {

const ShowBoardButton = () => {return <Button title="tabuleiro"  onPress={() => props.navigation.navigate('Game', {screen:'Tabuleiro'})}/>}
const QuitButton = () => {return <Button title="quit" onPress={() => QuitAlert()}/>}

  return(
            <GameStack.Navigator initialRouteName="GameScreen" >
              <GameStack.Screen
                name="GameScreen"
                component={GameScreen}
                options={{headerTitleStyle:{diplay:"none"}, headerLeft: ShowBoardButton, headerRight: QuitButton}}
                /> 
              <GameStack.Screen
                name="Tabuleiro"
                component={Tabuleiro}
                />
            </GameStack.Navigator>
  )
}
const Game = (props) => {

    return(
      <View style={{display:"flex", flex:"1", flexDirection:'column', justifyContent:"space-evenly"}}>
        <Store>
        <NavigationContainer>
            <RootStack.Navigator initialRouteName= "Title">
              <RootStack.Screen name="Title" component={TitleNavigator} options={{headerShown: false}}/>
              <RootStack.Screen name="Game" component={GameNavigator} options={{headerShown: false}}/>
            </RootStack.Navigator> 
          </NavigationContainer>
          </Store>
      </View>

    )
  }

  


export default Game