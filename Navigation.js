import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator } from '@react-navigation/native-stack';






//Screnns
import HomeScreen from './screens/HomeScreen';
import SettingScreen from './screens/SettingScreen';
import PersonalScreen from './screens/PersonalScreen';
import ToolsScreen from './screens/ToolsScreen';
import CarScreen from './screens/CarScreen';
import NotificationScreen from './screens/NotificationScreen';


//icons
import { MaterialCommunityIcons, MaterialIcons, Entypo, AntDesign} from '@expo/vector-icons';



const HomeStackNavigator = createNativeStackNavigator();

function MyStack() {

    return (
        <HomeStackNavigator.Navigator
            initialRouteName="HomeScreen"
        
        >
        <HomeStackNavigator.Screen
                name="HomeScreen" 
                component={HomeScreen}/>
        
        <HomeStackNavigator.Screen
                name='Notifications'
                component={NotificationScreen}
                options={{
                    title: 'Home',
                }}
                />
        
        </HomeStackNavigator.Navigator>
    )
}

const tab = createBottomTabNavigator ();    

function Mytabs(){
    return (


        
        <tab.Navigator
        initialRouteName='Home' 
        screenOptions={{
            tabBarActiveTintColor: '#008E60',
            title: 'CFE ASSET',
            
        }}
        >
            <tab.Screen 
            name="Home" 
            component={MyStack} 
            options={{
                            tabBarLabel: 'Home',
                            tabBarIcon: ({ color, size }) =>(
                                <MaterialCommunityIcons name="home" size={size} color= {color} />
                            ),
                            tabBarBadge: 2,
                            headerShown: false,
                    }}
            />

            <tab.Screen 
            name="Setting" 
            component={SettingScreen} 
            options={{
                    
                            tabBarLabel: 'Settings',
                            tabBarIcon: ({color, size}) =>(
                                <MaterialIcons name="settings" size={size} color={color} />
                            ),
                    }}
            
            />

            <tab.Screen 
            name="PersonalScreen" 
            component={PersonalScreen}
            options={{
                tabBarLabel: 'Personal',
                tabBarIcon:({ color, size})=> (
                    <AntDesign name="team" size={size} color={color} />
                    ),
            }}
            />

            <tab.Screen
            name="ToolsScreen"
            component={ToolsScreen}
            options={{
                tabBarLabel: 'Herramienta',
                tabBarIcon:({ color, size})=> (
                <Entypo name="tools" size={size} color= {color} />
                ),
            }}
                    />

            <tab.Screen
            name="CarScreen"
            component={CarScreen}
            options={{
                tabBarLabel: 'Vehiculo',
                tabBarIcon:({ color, size})=> (
                <AntDesign name="car" size={size} color={color} />                ),
            }}
                />
            
        </tab.Navigator>
    );

}

export default function Navigation(){
    return (
        <NavigationContainer>
            <Mytabs />
        </NavigationContainer>
    );
}