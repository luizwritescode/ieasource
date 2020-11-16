import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    bgPurple:{
        backgroundColor: "#7851a9"
    },
    bgPink:{
        backgroundColor: "#7851a9"
    },
    bgWhite:{
        backgroundColor: "#7851a9"
    },
    bgBlack:{
        backgroundColor: "#7851a9"
    },
    fontPurple:{
        color: "#7851a9"
    },
    fontPink: {
        color: "pink"

    },
    fontWhite: {
        color: "white"

    },

    fontRed: {
        color: "red"
    },

    fontGreen: {
        color: "green"
    },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    juscol: {
        flex: 1,
        justifyContent: 'space-evenly'
    },
    screen: {
        flex:1,
        justifyContent: "space-evenly"
    },
    row: {display:"flex", flexDirection:"column",flex:"1", justifyContent:"center", alignItems:"center"},
    numInput: {
        flexDirection: 'row',
        minWidth: '100%',
        justifyContent: 'space-evenly'
    },
    carta: {
        minWidth: "60vw",
        minHeight: "20vh",
        justifyContent: "center",
        alignItems: "center",
    },
    hidden: {
        display: "none"
    },
    h1: {fontSize: 32},
    h2: {fontSize: 24},
    flipCard: {
        width:300,
        height:200,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: '#7851a9',
        backfaceVisibility: 'hidden',
    },
    flipCardBack: {
        backgroundColor: '#e5e4e2',
        position: 'absolute',
        top: 0,
        backfaceVisibility: 'hidden'   
    }

  });
  