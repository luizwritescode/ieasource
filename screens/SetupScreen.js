import React, { Component } from 'react';
import {Text, View, Button} from 'react-native';
import { Input } from 'react-native-elements';
import { Container, Row, Col } from 'react-bootstrap'
import { useForm, Controller } from "react-hook-form";

import { RootReducer, SetupReducer } from '../reducers'

import {styles} from '../public/styles/styles'
import { Context } from '../store';

const SetupScreen = (props) => {

    const INITIAL_STATE = {
        numOfPlayers: 2,
        players: [
            {name: "Equipe Cao"},
            {name: "Equipe Pino"},
            {name: "Equipe Peka"},
            {name: "Equipe Roca"},
        ]
    }
    const default_names = [
    "Equipe Cao",
    "Equipe Pino",
    "Equipe Peka",
    "Equipe Roca",
    ]
    const [state, dispatch] = React.useReducer(SetupReducer, INITIAL_STATE)

    const [ROOT_STATE, ROOT_DISPATCH] = React.useContext(Context)
    const { control, handleSubmit, errors } = useForm();
 
    const onSubmit = data => {

        let players = Array()

        Object.entries(data).forEach( (entry,i) => {
            if(entry[1]==="") players.push({name:default_names[i],points:0})
            else players.push({name:entry[1],points:0})
        })

        dispatch({type:"submit", payload: data})
        ROOT_DISPATCH({type:"register_players", players: players})
        ROOT_DISPATCH({type:"start_game"})
        props.navigation.navigate('Game', { screen:'GameScreen'})
    }
      return(
        <View style={styles.container}>
        <View style={[styles.row]}>
          

          <Text style={[styles.h2,{marginBottom:'10%'}]}>numero de equipes</Text>
          <NumInput 
            value = {state.numOfPlayers}
            dispatch={dispatch}
            />
            
          
        </View>
        <View style={styles.row}>
        <NamesInput 
            dispatch={dispatch}
            numOfPlayers={state.numOfPlayers}
            control={control}/>
        </View>
        <View style={styles.row}>
          <Button title="Jogar" onPress={handleSubmit(onSubmit)}/>
        </View>
        </View>
        
      )
  }

  

 const NamesInput = (props) => { 
    const default_names = [
        {name: "Equipe Cao"},
        {name: "Equipe Pino"},
        {name: "Equipe Peka"},
        {name: "Equipe Roca"},
    ]
      
      var inputs = [
            <Controller
            key={0}
            control={props.control}
            render={({onChange, onBlur, value}) => (
                <Input type="text" placeholder={default_names[0].name} onChangeText={value => onChange(value)} value={value}/>
            )}
            name={"player_"+0}
            defaultValue=""
            />,
            <Controller
            key={1}
            control={props.control}
            render={({onChange, onBlur, value}) => (
                <Input type="text" placeholder={default_names[1].name} onChangeText={value => onChange(value)} value={value}/>
            )}
            name={"player_"+1}
            defaultValue=""
            />,
            <Controller
            key={2}
            control={props.control}
            render={({onChange, onBlur, value}) => (
                <Input type="text" placeholder={default_names[2].name} onChangeText={value => onChange(value)} value={value}/>
            )}
            name={"player_"+2}
            defaultValue=""
            />,
            <Controller
            key={3}
            control={props.control}
            render={({onChange, onBlur, value}) => (
                <Input type="text" placeholder={default_names[3].name} onChangeText={value => onChange(value)} value={value}/>
            )}
            name={"player_"+3}
            defaultValue=""
            />,
            ]
  
      return (
        <View>
            {inputs.slice(0,props.numOfPlayers)}
        </View>
      )
    }
  

  const NumInput = (props) => {
  
    function increment() {
      if(props.value < 4) {
       props.dispatch({type:"inc_num_of_players"})
      }
    }
  
    function decrement() {
        if(props.value > 1) {
         props.dispatch({type:"dec_num_of_players"})
        }
      }
    
      return(
        <View style={styles.numInput} >
          <Button title="-" onPress={decrement} />
          <Text className="align-self-center">{props.value}</Text>
          <Button title="+" onPress={increment}/>
        </View>
      )
  }
  

  export default SetupScreen