import { View, Text, StyleSheet, Image, TouchableOpacity, Button} from 'react-native'
import React, { useState } from 'react'
import { useWarmUpBrowser } from '@/hooks/useWarmUpBrowse'
import { TextInput } from 'react-native-gesture-handler';
import styleGeneral from '@/constants/styleGeneral'

import Colors from '@/constants/Colors';
import { useSignUp } from '@clerk/clerk-expo';
import { Link, useRouter } from 'expo-router';


const login = () => {
    useWarmUpBrowser();
    const routerNav = useRouter();

    const { isLoaded, signUp, setActive } = useSignUp();

	const [emailAddress, setEmailAddress] = useState('');
	const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
	const [pendingVerification, setPendingVerification] = useState(false);
	const [code, setCode] = useState('');
	const [loading, setLoading] = useState(false);

    const onSignUpPress = async () => {

        
		if (!isLoaded) {
			return;
		}
		setLoading(true);
        if (password != password2){
            alert("Insert same password!");
            return;
        }
		try {
			// Create the user on Clerk
			await signUp.create({
				emailAddress,
				password
			});

			// Send verification Email
			await signUp.prepareEmailAddressVerification({ strategy: 'email_code' });

			// change the UI to verify the email address
			setPendingVerification(true);
		} catch (err: any) {
			alert(err.errors[0].message);
		} finally {
			setLoading(false);

		}
	};

	const onPressVerify = async () => {
		if (!isLoaded) {
			return;
		}
		setLoading(true);

		try {
			const completeSignUp = await signUp.attemptEmailAddressVerification({
				code
			});

			await setActive({ session: completeSignUp.createdSessionId });
            routerNav.push('/(tabs)/home')
		} catch (err: any) {
			alert(err.errors[0].message);
		} finally {
			setLoading(false);
		}
	};
    
    return (
        <View style={styleGeneral.container}>
            <View style={styleGeneral.safeContainer}>
                {!pendingVerification && (<>
                    <Image source={require('@/assets/images/logo.jpg')} style={{marginTop:70}}/>
                    <Text style={[styleGeneral.title,style.title]}>Join us!</Text>
                    <Text style={[styleGeneral.subTitle, style.subTitle, {marginBottom:20}]}>Sign up to continue.</Text>
                    <TextInput style={[styleGeneral.textField, style.text, {marginTop:20}]} autoCapitalize='none' placeholder='Email' value={emailAddress} onChangeText={setEmailAddress}/>
                    <TextInput style={[styleGeneral.textField, style.text, {marginTop:20}]} autoCapitalize='none' placeholder='Password' value={password} onChangeText={setPassword} secureTextEntry/>
                    <TextInput style={[styleGeneral.textField, style.text, {marginTop:20}]} autoCapitalize='none' placeholder='Repeat password' value={password2} onChangeText={setPassword2} secureTextEntry/>
                    <View style={styleGeneral.lowView}>
                        <TouchableOpacity style={styleGeneral.botton} onPress={onSignUpPress}>
                            <Text style={[styleGeneral.bottonText, style.subTitle]}>REGISTER</Text>
                        </TouchableOpacity>
                        <Text style={[styleGeneral.textGrey, style.text]}>Already have an account? <Link href={"/(modals)/login"} style={{color:Colors.deapOcean}}> Sign in</Link></Text>
                    </View>
                </>)}
                {pendingVerification && (<>
					<View>
						<TextInput
							value={code}
							placeholder="Code..."
							onChangeText={setCode}
						/>
					</View>
					<Button onPress={onPressVerify} title="Verify Email" color={'#6c47ff'}></Button>
				</>)}
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