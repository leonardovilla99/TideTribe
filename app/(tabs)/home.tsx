import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import Colors from '@/constants/Colors'
import styleGeneral from '@/constants/styleGeneral'

const home = () => {
  return (
    <SafeAreaView style={styleGeneral.container}>
        <View style={styleGeneral.safeContainer}>
            <Text>Let’s clean it!</Text>
            <Link href={"/(modals)/login"}>
                Login
            </Link>
        </View>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
    
})

export default home