import {StyleSheet} from 'react-native'

// light purple 9578BC
export const styles = StyleSheet.create({
    bgPurple:{
        backgroundColor: "#7851a9"
    },
    bgPink:{
        backgroundColor: "#EAABDA"
    },
    bgWhite:{
        backgroundColor: "#f8f8f8"
    },
    bgBlack:{
        backgroundColor: "#0a0a0a"
    },
    bgBlue:{
        backgroundColor: "#B5DEF4"
    },
    bgRed:{
        backgroundColor: "#EB8781"
    },

    fontBlue:{
        color: "#B5DEF4"
    },
    fontDarkBlue:{
        color: "#33a4e0"
    },
    fontPurple:{
        color: "#7851a9"
    },
    fontPink: {
        color: "#EAABDA"

    },
    fontWhite: {
        color: "f8f8f8"

    },

    fontRed: {
        color: "#EB8781"
    },

    fontGreen: {
        color: "#78BC7D"
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
    row: {display:"flex", flexDirection:"column",flex:1, justifyContent:"center", alignItems:"center"},
    numInput: {
        flexDirection: 'row',
        minWidth: '100%',
        justifyContent: 'space-evenly'
    },
    button: {
        fontSize:40,
        height:100,
        minWidth:'100px'
    },
    buttonText: {
        fontSize:40,
        height:50
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
  