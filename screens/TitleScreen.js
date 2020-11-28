import React from 'react'
import { View, Text, TouchableOpacity, Image} from 'react-native'

import {styles} from '../public/styles/styles'


const TitleScreen  = (props) =>  {
      return(
        <View style={{flex:'1', justifyContent:'space-evenly'}}>
          <View style={styles.row}>
          <Image source={require('../assets/imitaoudesenha.png')} style={{flex:1,width:'70%',height:'100%', resizeMode:'contain'}}/>
          </View>
          <View style={styles.row}>

            <TouchableOpacity style={{fontSize:'100px'}} onPress={() => props.navigation.navigate('SetupScreen')}>
                <Text style={[styles.buttonText, styles.fontDarkBlue]}>Jogar</Text>
            </TouchableOpacity>
          </View>
        </View>
      )
    }
  
    export default TitleScreen