import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { Button, Text } from 'react-native-paper';
import theme from '../config/theme';
const image = require('../assets/hello-screen.jpg');
const WelcomeScreen = () => {
    return (
        <>
        <StatusBar style='dark' />
        <View style={styles.wrapper}>
            <Image source={image} style={styles.welcomeImage} />
            <View style={styles.buttonWrapper}>
                <Button 
                    mode="contained" 
                    onPress={() => console.log('Pressed')} 
                    uppercase={false} 
                    children={<Text style={styles.btnLabel}>Log In</Text>}
                    style={styles.button} />
                   
               
                <Button 
                    mode="contained" 
                    onPress={() => console.log('Pressed')} 
                    style={styles.button} 
                    color={theme.colors.accent} 
                    children={<Text style={styles.btnLabel}>Sign Up</Text>}
                    uppercase={false} />
               
            </View>
        </View>
        </>
    )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    wrapper:{
        backgroundColor:'white', 
        flex:1
    },
    welcomeImage:{
        width: '100%', 
        height:'75%'
    },
    buttonWrapper:{
        padding: 20, 
        flexDirection:'column', 
        height:'24%', 
        justifyContent:'space-evenly'
    },
    button:{
        height:40,
        justifyContent:'center',
        alignContent:'center',
        fontWeight:'900',
    },
    btnLabel:{
        fontWeight:'600',
        color:'white',
        fontSize:20
    }

})