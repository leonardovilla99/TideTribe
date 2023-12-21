import { View, Text, SafeAreaView, StyleSheet, Image, ScrollView } from 'react-native'
import React from 'react'
import styleGeneral from '@/constants/styleGeneral'

const home = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{backgroundColor:'#fff'}}>
        <SafeAreaView style={styleGeneral.container}>
            <View style={styleGeneral.safeContainer}>
                <Text style={[styleGeneral.title,style.title]}>Let’s clean it!</Text>
                <Text style={[styleGeneral.subTitle, style.subTitle]}>What is a beach clean up?</Text>
                <View style={styleGeneral.cardView}>
                    <Image source={require('@/assets/images/homepage.jpg')} style={style.image}/>
                    <View style={styleGeneral.safeContainer}>
                        <Text style={[styleGeneral.text, style.text]}>A beach clean-up is a beacon of hope against the tide of plastic and pollution. Imagine volunteers, from families to friends, armed with gloves and bags, scouring the sandy shores for wayward bottles, forgotten frisbees, and microplastics lurking in the tide pools. Their mission? To wrestle waste from its watery grasp and restore the coastal haven for both wildlife and beachgoers.</Text>
                    </View>
                </View>
                <Text style={[styleGeneral.subTitle, style.subTitle]}>What you can do with us?</Text>
                <View style={styleGeneral.cardView}>
                    <View style={styleGeneral.safeContainer}>
                        <Text style={[styleGeneral.text, style.text]}>A beach clean-up is a beacon of hope against the tide of plastic and pollution. Imagine volunteers, from families to friends, armed with gloves and bags, scouring the sandy shores for wayward bottles, forgotten frisbees, and microplastics lurking in the tide pools. Their mission? To wrestle waste from its watery grasp and restore the coastal haven for both wildlife and beachgoers.</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    </ScrollView>
  )
}

const style = StyleSheet.create({
    title:{
        fontFamily:'Poppins-Semi',
    },
    subTitle:{
        fontFamily: 'Poppins-Med'
    },
    text:{
        fontFamily: 'Poppins-Reg'
    },
    image:{
        height:200,
        width:'auto',
        borderRadius:30
    }
})

export default home