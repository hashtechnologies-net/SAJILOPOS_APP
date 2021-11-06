import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import HomeScreen from '../screens/HomeScreen'

const Stack = createStackNavigator()

const ScreenOption = {
    headerShown:false,
}

export const AppStack = () =>
     (
       <NavigationContainer>
           <Stack.Navigator initialRouteName='HomeScreen' screenOptions={ScreenOption}>
               <Stack.Screen name='HomeScreen' component={HomeScreen} />
           </Stack.Navigator>
       </NavigationContainer>
    )



export default AppStack
