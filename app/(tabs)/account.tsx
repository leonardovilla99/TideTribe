import { View, Text, SafeAreaView, StyleSheet, Button } from 'react-native'
import React from 'react'
import styleGeneral from '@/constants/styleGeneral'
import { Link, useRouter } from 'expo-router'
import { useAuth, useUser } from '@clerk/clerk-expo'

const account = () => {
    const {signOut, isSignedIn} = useAuth();
    const { user } = useUser();

    const routerNav = useRouter();

    console.log(isSignedIn);

    const onUpdatePress = async () => {
        try {
          await user?.update({ firstName: "Leonardo" });
        } catch (err: any) {
          alert(err.errors[0].longMessage);
        }
    };

    // const onLogOut = async () => {
    //     try {
    //         await signOut();
    //       } catch (err: any) {
    //         alert(err.errors[0].longMessage);
    //       } finally{
    //         routerNav.push('/(modals)/login')
    //       }
    // }

    return (
        <SafeAreaView style={styleGeneral.container}>
            <View style={styleGeneral.safeContainer}>
                {user?.firstName != null && (
                    <>
                        <Text style={[styleGeneral.title,style.title]}>{user.firstName}.</Text>
                    </>
                )}
                {user?.firstName == null && (
                    <>
                        <Text style={[styleGeneral.title,style.title]}>Me.</Text>
                    </>
                )}
                
                <Button title='Logout' onPress={() => {signOut()}}/>
                {!isSignedIn && 
                    <Link href={'/(modals)/login'}>
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