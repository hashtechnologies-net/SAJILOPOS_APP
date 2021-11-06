import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
import { pubClient } from '../config/api'

const Auth = createContext({})

const AuthContext= (props) => {
    
    const [Email, setEmail] = useState('')
    const [Password, setPassword ] = useState('')
    const [Username, setUsername] = useState('')
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [token, setToken] = useState('');
    const [Navigation, setNavigation] = useState({});
    const [showPass, setshowPass] = useState(true);

    useEffect(() => {
        async function getToken() {
            const token = await AsyncStorage.getItem('token')
            if (token) {
                setToken(token)
                setIsLoggedIn(true)
            }
        }
        getToken()
     } , [])    

    const HandleRegister = async () =>{
        const data = {
            email: Email,
            password: Password,
            username: Username,
            full_name: Username
        }
        
        try {
            await pubClient.post('/admins/register',data).then(async (res)=>{
                if(res.status === 200){
                    if (res.data.success) {
                        await AsyncStorage.setItem('@token', res.data.token)
                        setToken(res.data.token)
                        setIsLoggedIn(true)
                    }
                        
                    }
                    
            }).catch(err=>console.log(err.message))
            
        } catch (error) {
            console.log(error);
        }
    }
      
    
    const HandleLogout = async () => {
        try {
            await AsyncStorage.removeItem('@token',(err)=>console.log(err))
            setToken('')
            setIsLoggedIn(false)
        } catch (error) {
            console.log(error);
        }
    }
    

    const AuthContextValue = {
        Email,
        Password,
        Username,
        HandleRegister,
        setEmail,
        setPassword,
        setUsername,
        setNavigation,
        showPass,
        setshowPass,
        isLoggedIn,
        token,
        HandleLogout,
    }
    return <Auth.Provider value={AuthContextValue}>
        {props.children}
        </Auth.Provider>
}


export default AuthContext
export { Auth }

