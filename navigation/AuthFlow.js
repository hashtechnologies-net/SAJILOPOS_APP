import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import LoginScreen from '../screens/Auth/LoginScreen'
import SignupScreen from '../screens/Auth/SignupScreen'
import HomeScreen from '../screens/WelcomeScreen'

const Stack = createStackNavigator()

const ScreenOption = {
    headerShown:false,
}

export const AuthStack = () =>
     (
       <NavigationContainer>
           <Stack.Navigator initialRouteName='HomeScreen' screenOptions={ScreenOption}>
               <Stack.Screen name='HomeScreen' component={HomeScreen} />
               <Stack.Screen name='LoginScreen' component={LoginScreen} />
               <Stack.Screen name='SignupScreen' component={SignupScreen} />
           </Stack.Navigator>
       </NavigationContainer>
    )



export default AuthStack
