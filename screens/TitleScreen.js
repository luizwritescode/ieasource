import React from 'react'
import { View, Text, Button} from 'react-native'

const TitleScreen  = (props) =>  {

      return(
        <View style={{flex:'1', justifyContent:'space-evenly'}}>
          <View>
          <Text>IMAGEM & ACAO</Text>
          </View>
          <Button title="Jogar" onPress={() => props.navigation.navigate('SetupScreen')}/>
        </View>
      )
    }
  
    export default TitleScreen