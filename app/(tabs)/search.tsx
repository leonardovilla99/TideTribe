import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import styleGeneral from '@/constants/styleGeneral'

const search = () => {
  return (
    <SafeAreaView style={styleGeneral.container}>
        <View style={styleGeneral.safeContainer}>
            <Text style={[styleGeneral.title,style.title]}>Discover.</Text>
        </View>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
    title:{
        fontFamily:'Poppins-Semi',
    }
})

export default search