import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { View } from 'react-native'
import { Text } from 'react-native-paper'
import HomeScreen from '../screens/HomeScreen'
import ProfileScreen from '../screens/ProfileScreen'

const Stack = createStackNavigator()

const ScreenOption = {
    headerShown:false,
}


export const AppStack = () =>
     (
         <>
       <NavigationContainer>
           <Stack.Navigator initialRouteName='HomeScreen' screenOptions={ScreenOption}>
               <Stack.Screen name='HomeScreen' component={HomeScreen} />
               <Stack.Screen name='ProfileScreen' component={ProfileScreen} />
           </Stack.Navigator>
       </NavigationContainer>
      
       </>
    )



export default AppStack
