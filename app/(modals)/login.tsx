import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import { useWarmUpBrowser } from '@/hooks/useWarmUpBrowse'
import { TextInput } from 'react-native-gesture-handler';
import styleGeneral from '@/constants/styleGeneral'

import { FontAwesome, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons'
import Colors from '@/constants/Colors';
import { useAuth, useOAuth, useSignIn } from '@clerk/clerk-expo';
import { Link, useRouter } from 'expo-router';


const login = () => {
    useWarmUpBrowser();
    const routerNav = useRouter();

    const { signIn, setActive, isLoaded} = useSignIn();
    const { isSignedIn} = useAuth();

	const [emailAddress, setEmailAddress] = useState('');
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);

    const {startOAuthFlow: OAuthApple} = useOAuth({strategy:'oauth_apple'});
    const {startOAuthFlow: OAuthFacebook} = useOAuth({strategy:'oauth_facebook'});
    const {startOAuthFlow: OAuthGoogle} = useOAuth({strategy:'oauth_google'});


    const onSignInPress = async () => {
		if (!isLoaded) {
			return;
		}
		setLoading(true);
		try {
			const completeSignIn = await signIn.create({
				identifier: emailAddress,
				password
			});

			// This indicates the user is signed in
			await setActive({ session: completeSignIn.createdSessionId });
            routerNav.push('/(tabs)/home')
		} catch (err: any) {
			alert(err.errors[0].message);
		} finally {
			setLoading(false);
		}
	};
    
    return (
        <View style={styleGeneral.container}>
            <View style={[styleGeneral.safeContainer, {flexDirection:'column'}]}>
                <Image source={require('@/assets/images/logo.jpg')} style={{marginTop:70}}/>
                <Text style={[styleGeneral.title,style.title]}>Welcome back!</Text>
                <Text style={[styleGeneral.subTitle, style.subTitle, {marginBottom:20}]}>Sign in to continue.</Text>
                <TextInput style={[styleGeneral.textField, style.text, {marginTop:20}]} autoCapitalize='none' placeholder='Email' value={emailAddress} onChangeText={setEmailAddress}/>
                <TextInput style={[styleGeneral.textField, style.text, {marginTop:20}]} autoCapitalize='none' placeholder='Password' value={password} onChangeText={setPassword} secureTextEntry/>
                <View style={styleGeneral.lowView}>
                    <TouchableOpacity style={styleGeneral.botton} onPress={onSignInPress}>
                        <Text style={[styleGeneral.bottonText, style.subTitle]}>LOGIN</Text>
                    </TouchableOpacity>
                    <Text style={[styleGeneral.textGrey, style.text]}>Or login with:</Text>
                    <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginVertical:5}}>
                        <View style={{flexDirection:'row', gap:20}}>
                            <TouchableOpacity>
                                <FontAwesome name='google' color={Colors.deapOcean} size={17}/>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <FontAwesome name='facebook' color={Colors.deapOcean} size={17}/>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <FontAwesome name='apple' color={Colors.deapOcean} size={17}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Text style={[styleGeneral.textGrey, style.text]}>Don't have an account? <Link href={"/(modals)/register"} style={{color:Colors.deapOcean}}> Sign up</Link></Text>
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