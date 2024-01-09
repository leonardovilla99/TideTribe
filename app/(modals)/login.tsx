import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import { useWarmUpBrowser } from '@/hooks/useWarmUpBrowse'
import { TextInput } from 'react-native-gesture-handler';
import styleGeneral from '@/constants/styleGeneral'

const login = () => {
    useWarmUpBrowser();
    
    return (
        <View style={styleGeneral.container}>
            <View style={styleGeneral.safeContainer}>
                <Image source={require('@/assets/images/logo.jpg')} style={{marginTop:70}}/>
                <Text style={[styleGeneral.title,style.title]}>Welcome back!</Text>
                <Text style={[styleGeneral.subTitle, style.subTitle, {marginBottom:20}]}>Sign in to continue.</Text>
                <TextInput style={[styleGeneral.textField, style.text, {marginTop:20}]} autoCapitalize='none' placeholder='Email'/>
                <View style={styleGeneral.lowView}>
                    <TouchableOpacity style={styleGeneral.botton}>
                        <Text style={[styleGeneral.bottonText, style.subTitle]}>LOGIN</Text>
                    </TouchableOpacity>
                    <Text style={[styleGeneral.textGrey, style.text]}>Or login with:</Text>
                </View>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    title:{
        fontFamily:'Poppins-Semi',
        marginTop:20
    },
    subTitle:{
        fontFamily: 'Poppins-Med',
    },
    text:{
        fontFamily: 'Poppins-Reg',
    }
})

export default login