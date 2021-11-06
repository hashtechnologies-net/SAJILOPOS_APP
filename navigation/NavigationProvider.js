import React, { useContext } from 'react'
import { View, Text } from 'react-native'
import { Auth } from '../contexts/AuthContext'
import AppStack from './AppFlow'
import AuthStack from './AuthFlow'

const NavigationProvider = () => {
    const AuthContext = useContext(Auth)
    const isSignedIn = AuthContext.token ? true : false;
    return isSignedIn ? <AppStack /> : <AuthStack />
}

export default NavigationProvider
