import { View, Text, SafeAreaView, StyleSheet, Button } from 'react-native'
import React from 'react'
import styleGeneral from '@/constants/styleGeneral'
import { Link } from 'expo-router'
import { useAuth } from '@clerk/clerk-expo'

const account = () => {
    const {signOut, isSignedIn} = useAuth();

    return (
        <SafeAreaView style={styleGeneral.container}>
            <View style={styleGeneral.safeContainer}>
                <Text style={[styleGeneral.title,style.title]}>Me.</Text>
                
                <Button title='Logout' onPress={() => {signOut}}/>
                {!isSignedIn && 
                    <Link href={"/(modals)/login"}>
                        Login
                    </Link>
                }
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