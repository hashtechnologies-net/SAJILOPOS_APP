import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useContext, useEffect, useState } from 'react'
import { Auth } from '../contexts/AuthContext'
import AppStack from './AppFlow'
import AuthStack from './AuthFlow'

const NavigationProvider = () => {
    const [ready, setready] = useState(false)
    const [isSignedIn, setIsSignedIn] = useState(false)
    const { isLoggedIn } = useContext(Auth)
    useEffect(() => {
            if(isLoggedIn){
                console.log('signed in')
                setIsSignedIn(true)
                setready(true)
            }
            else{
                setIsSignedIn(false)
                setready(true)
            }
    }, [isLoggedIn])
    
    
    return isSignedIn ? <AppStack /> : <AuthStack />
}

export default NavigationProvider
