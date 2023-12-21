import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import styleGeneral from '@/constants/styleGeneral'

const message = () => {
  return (
    <SafeAreaView style={styleGeneral.container}>
        <View style={styleGeneral.safeContainer}>
            <Text style={[styleGeneral.title,style.title]}>Messages.</Text>
        </View>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
    title:{
        fontFamily:'Poppins-Semi',
    }
})

export default message