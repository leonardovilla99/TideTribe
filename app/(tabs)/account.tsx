import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import styleGeneral from '@/constants/styleGeneral'
import { Link } from 'expo-router'

const account = () => {
  return (
    <SafeAreaView style={styleGeneral.container}>
        <View style={styleGeneral.safeContainer}>
            <Text style={[styleGeneral.title,style.title]}>Me.</Text>
            <Link href={"/(modals)/login"}>
                Login
            </Link>
        </View>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
    title:{
        fontFamily:'Poppins-Semi',
    }
})

export default account