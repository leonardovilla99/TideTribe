import { StyleSheet } from "react-native";
import Colors from "./Colors";

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: Colors.white,
    },
    safeContainer:{
        marginLeft:30,
        marginRight:30
    },
    title:{
        color: Colors.sky,
        fontSize:32,
        marginTop:10
    },
    subTitle:{
        color: Colors.deapOcean,
        fontSize: 16
    },
    text:{
        fontSize:12,
        textAlign: 'center',
        marginTop:20,
        color: Colors.deapOcean,
        lineHeight:20
    },
    cardView:{
        backgroundColor: '#fff',
        marginVertical:25,
        paddingBottom:25,
        borderRadius:30,
        shadowOffset: { width: 0, height: 4 },
        shadowColor: '#000',
        shadowRadius:10,
        shadowOpacity:0.10,
    },
    textField:{
        borderColor: Colors.almostWhite,
        borderBottomWidth: 2,
        paddingVertical: 5
    },
    botton:{
        backgroundColor: Colors.sky,
        borderRadius: 18,
        marginVertical: 20,
        padding: 15,
        shadowOffset: { width: 0, height: 4 },
        shadowColor: '#000',
        shadowRadius:10,
        shadowOpacity:0.10,
    },
    bottonText:{
        color: Colors.white,
        fontSize: 16,
        textAlign: 'center'
    },
    lowView:{
        position: 'fixed',
        top: 200,
    },
    textGrey:{
        fontSize:12,
        textAlign: 'center',
        color: Colors.almostWhite
    }
})