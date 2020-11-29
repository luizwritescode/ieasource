import { FadeOutToBottomAndroidSpec } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/TransitionSpecs'
import React from 'react'
import { FlatList, View, Text, StyleSheet, Animated, Button, Dimensions } from 'react-native'

import { Context, ROOT_STATE } from '../store'


const screenWidth = Math.round(Dimensions.get('window').width)


const Tabuleiro = (props) => {

        const [ROOT_STATE, dispatch] = React.useContext(Context)
        const types = ["acoes", "objetos", "aleatorio","cep","objetos","cinema","acoes","todos"]
        const scroll = React.createRef()
    
        var tabuleiro = []
        var pinos = []

        var animatedMove = new Animated.Value(0)
    
        ROOT_STATE.players.forEach( (p,i) => {
            pinos.push(<Pino key={i} position={PinoPositions[ROOT_STATE.players.length][i]} animatedMove={animatedMove} casa={p.points} movePlayer={FUNCTIONS.movePlayer}/>)
        })

       
        for(var i = 0; i < 64; i++) {

            var type = ""
            if (i === 0) {
                type = types[7] 
            } else {
                type = types[i % types.length]
            }
                
            
            var pinosNaCasa = []
            pinos.forEach( (p,j) => {
                if(i === p.props.casa) {
                    pinosNaCasa.push(p)
                }
            })

            const casa = <Casa key={i} type={type} pinos={pinosNaCasa} />
            tabuleiro.push(casa)
            
        }
    return(
        <View>

        
        <FlatList contentContainerStyle={BoardStyle.tabuleiro} renderItem={Casa} data={tabuleiro} keyExtractor={ casa => casa.key} />
            {pinos}
        </View>
    )
}


const Casa = ({item}) => {
    var props = item.props

    const pos = PinoPositions[props.pinos.length]

    var color={}
    switch(props.type) {
        case 'todos':
            color = {backgroundColor: '#asdfs'}
        case 'todos':
            color = {backgroundColor: '#asdfs'}
        case 'todos':
            color = {backgroundColor: '#asdfs'}
        case 'todos':
            color = {backgroundColor: '#asdfs'}
        case 'todos':
            color = {backgroundColor: '#asdfs'}
    }

    return(
        <View style={BoardStyle.casa} >

            <View style={BoardStyle.col}>
            
            </View>

            <View style={BoardStyle.casaCenter}>
            
            </View>
            
            <View style={[BoardStyle.col,BoardStyle.center]}>
                <Text>{props.type}</Text>
            </View>

        </View>
    )
}

const PinoPositions = [
    [0],
    [[75,0]],
    [[75,-30],[75,30]],
    [[100,-30],[40,0],[100,30]],
    [[100,-30],[40,-10],[100,30],[40,40]]
]

const Scroll = (num) => {
    var animatedVal = new Animated.Value(0)
    
    function scroll(n) {
        var val = n * 150
        Animated.spring(animatedVal, {toValue: val }).start()
        window.scrollTo(0,animatedVal)
        
    }

    scroll(num)
}

Scroll(2)

const Pino = (props) => {

    const [ROOT_STATE, dispatch] = React.useContext(Context)
    var p = ROOT_STATE.players,
        t = ROOT_STATE.playerTurn
    var center = screenWidth/2 - 20

    var top = props.position[0] + 'px'
    var left = props.position[1] + center + 'px'

    const position = {
        top:top,
        left:left,
        transform: [{translateY: p[t].animatedValue]
    }

    

    return(
        <Animated.View style={[BoardStyle.pino, position]} >
        </Animated.View>
    )
}


const BoardStyle = StyleSheet.create({
    pino: {
        position:'absolute',
        backgroundColor:'red',
        height:40,
        width:40,
        zIndex: 999,
        elevation: 999,
        float:'center'
    },
    center: {
        justifyContent: 'center',
        alignItems:'center',
        overflow:'visible'
    },
    casa: {
        position:'relative',
        minHeight:150,
        width:'100%',
        display:'flex',
        flexDirection:'row',
        overflow:'visible',
        zIndex: -1
    },
    casaCenter: {
        position:'relative',
        display:'flex',
        alignSelf:'center',
        flex:1,
        minWidth:150,
        backgroundColor:'white',
        borderColor: 'black',
        borderWidth: 2,
        height:150,
        width: 150,
        overflow:'visible',
        zIndex: 0,
    },
    col: {
        display:'flex',
        flex:1,
        position:'relative',
        overflow:'visible',
        zIndex:1,
    },
    tabuleiro: {
        position:'relative',
        paddingTop: '5%',
        paddingBottom: '5%',
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        alignSelf:'center',
        overflow:'visible',
        zIndex:0,
    },
    tabuleiroRow: {
        flex:1,
        overflow:'visible',
        position:'relative'
    }
})

export default Tabuleiro