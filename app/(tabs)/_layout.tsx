import React from 'react'
import {StyleSheet,View} from 'react-native'
import { Tabs } from 'expo-router'
import Colors from '@/constants/Colors'

// Icons
import { FontAwesome, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons'

const _layout = () => {
  return (
    <Tabs screenOptions={{
        tabBarActiveTintColor: Colors.deapOcean, 
        tabBarInactiveTintColor: Colors.almostWhite,
        tabBarShowLabel: false,
        headerShown:false,
        tabBarStyle:{
            shadowOffset: { width: 0, height: -5 },
            shadowColor: '#000',
            shadowOpacity: 0.10,
            borderWidth:0,
        },
    }}>
        <Tabs.Screen name='home' options={{
            tabBarIcon: ({color,size}) => 
                <MaterialCommunityIcons name='home' color={color} size={size}/>
        }}/>
        <Tabs.Screen name='search' options={{
            tabBarIcon: ({color,size}) => 
                <Ionicons name='search' color={color} size={size}/>
        }}/>
        <Tabs.Screen name='post' options={{
            tabBarIcon: ({color,size}) => 
                <View style={styles.plusView}>
                    <Ionicons name='add' color={color} size={size+10} style={{marginLeft:3}}/>
                </View>
        }}/>
        <Tabs.Screen name='message' options={{
            tabBarIcon: ({color,size}) => 
                <FontAwesome name='comment' color={color} size={size-2}/>
        }}/>
        <Tabs.Screen name='account' options={{
            tabBarIcon: ({color,size}) => 
                <FontAwesome name='user' color={color} size={size}/>
        }}/>
    </Tabs>
  )
}

const styles = StyleSheet.create({
    plusView:{
        padding: 15,
        backgroundColor: Colors.white,
        position: 'absolute',
        bottom:2,
        borderRadius: 50,
        shadowOffset: { width: 0, height: 4 },
        shadowColor: '#000',
        shadowOpacity: 0.10,
    }
})

export default _layout