import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator1(){
    return(
        <Tab.Navigator
            screenOptions={{
                headerShown: false
            }}
            initialRouteName="Home"
            tabBarOptions={{
                activeTintColor:"#ff6600",
                inactiveTintColor:"#060606",
                showLabel:true,
                labelStyle:{
                    fontSize:12,
                },
                style:{
                    backgroundColor:"#f3f3f1"
                }

            }}
        > 
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel:"Inicio",
                    tabBarIcon:({color})=>(
                        <Ionicons name={"ios-home"} size={20} color={color}/>
                    )
                }}
            />
        </Tab.Navigator>
    )
}