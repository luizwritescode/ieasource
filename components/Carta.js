import React, {Component} from 'react'
import { Animated, View, Text, TouchableOpacity } from 'react-native'

import {styles} from '../public/styles/styles'

export function flipCard(state) {
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


export const Carta = (props) => {

    var textStyle = [styles.h2,styles.hidden]

    
    return(
        <View style={styles.container} >
            <View>
                <Animated.View style={[styles.flipCard, styles.flipCardBack, props.backStyle]}>
                    <Text  style={[styles.h1, styles.fontPurple]}>palavra</Text>
                </Animated.View>

                <Animated.View style={[styles.flipCard, props.frontStyle]}>
                    <Text style={[styles.h1, styles.fontWhite]}>carta</Text>
                </Animated.View>
          </View>

        </View>
      )
    }
