import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
import { pubClient } from '../config/api'
import { validator } from '../config/helpers'

const Auth = createContext({})

const AuthContext= (props) => {
    
    const [Email, setEmail] = useState('')
    const [Password, setPassword ] = useState('')
    const [Username, setUsername] = useState('')
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [token, setToken] = useState('');
    const [showPass, setshowPass] = useState(true);
    const [showPass2, setshowPass2] = useState(true);
    const [Password2, setPassword2] = useState('');
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const[ hasErrors, setHasErrors] = useState(false);


    useEffect(() => {
        async function getToken() {
            const token = await AsyncStorage.getItem('@token')
            if (token) {
                setToken(token)
                setIsLoggedIn(true)
            }
        }
        return getToken()
     } , [])    

    const HandleRegister = async () =>{
       
        if(Password !== Password2){
            setErrors( 'Passwords do not match'
            )
            setHasErrors(true)
            return
        }
        const data = {
            email: Email,
            password: Password,
            username: Username,
            full_name: Username
        }
        if(!data.email || !data.password || !data.username){
            setErrors( 'Please fill all fields'
            )
            setHasErrors(true)
            return
        }
        
        try {
            setLoading(true)
            await pubClient.post('/admins/register',data).then(async (res)=>{
                
                if(res.status === 200){
                    if (res.data.success) {
                        await AsyncStorage.setItem('@token', res.data.token)
                        setToken(res.data.token)
                        setIsLoggedIn(true)
                        setLoading(false)
                    }else{
                        console.log(res.data.reason)
                        if(!res.data.status){
                            setHasErrors(true)
                            setErrors(res.data.reason)
                            setLoading(false)
                        }
                    }
                        
                    }else{
                        setHasErrors(true)
                        setErrors(res.data.reason)
                        setLoading(false)
                    }
                    
            }).catch((err)=>{
                console.log(err)
            setLoading(false)

            })
            
        } catch (error) {
            setLoading(false)
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

    const HandleLogin = async () => {
        try {
            setLoading(true)
            const data = {
                email: Email,
                password: Password,
     
            }
            if(!data.email || !data.password ){
                setErrors( 'Please fill all fields'
                )
                setHasErrors(true)
                return
            }
            await pubClient.post('/admins/login',data).then(async (res)=>{
                if(res.status === 200){
                    if (res.data.success) {
                        await AsyncStorage.setItem('@token', res.data.token)
                        setToken(res.data.token)
                        setIsLoggedIn(true)
                        setLoading(false)
                    }else{
                        
                        if(!res.data.Status){
                            setHasErrors(true)
                            setErrors(res.data.reason)
                            setLoading(false)
                        
                        }
                    }
                        
                    }else{
                        setHasErrors(true)
                        setErrors(res.data.reason)
                        setLoading(false)
                    }
                    
            }).catch((err)=>{console.log(err); setLoading(false)})
            
            
            
        } catch (error) {
            setLoading(false)
            console.log(error.message);
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
        showPass,
        setshowPass,
        isLoggedIn,
        token,
        HandleLogout,
        showPass2,
        Password2,
        loading,
        setPassword2,
        setErrors,
        errors,
        hasErrors,
        setHasErrors,
        setLoading,
        HandleLogin,
    }
    return <Auth.Provider value={AuthContextValue}>
        {props.children}
        </Auth.Provider>
}


export default AuthContext
export { Auth }

