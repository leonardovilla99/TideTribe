import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useRouter } from 'expo-router';

const list = () => {
    const router = useRouter();
    const {id} = useLocalSearchParams<{ id:string }>();
    return (
        <SafeAreaView>
            <TouchableOpacity onPress={() => router.back()}>
                <Ionicons name='chevron-back' size={25}></Ionicons>
            </TouchableOpacity>
            <Text>{id}</Text>
        </SafeAreaView>
    )
}

export default list