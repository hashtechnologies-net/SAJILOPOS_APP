import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { Button, Text } from 'react-native-paper';
import theme from '../config/theme';
const image = require('../assets/welcome.png');
const WelcomeScreen = ({ navigation }) => {
    return (
        <>
            <StatusBar />
            <View style={styles.wrapper}>
                <View style={{ width: '100%', height: '75%' }}>
                    <Image source={image} style={styles.welcomeImage} />
                </View>
                <View style={styles.buttonWrapper}>
                    <Button
                        mode="contained"
                        uppercase={false}
                        onPress={() => navigation.push('LoginScreen')}
                        children={<Text style={styles.btnLabel}>Log In</Text>}
                        style={styles.button} />


                    <Button
                        mode="contained"
                        onPress={() => navigation.push('SignupScreen')}
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
    wrapper: {
        backgroundColor: 'white',
        flex: 1
    },
    welcomeImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
    buttonWrapper: {
        padding: 20,
        flexDirection: 'column',
        height: '24%',
        justifyContent: 'space-evenly'
    },
    button: {
        height: 40,
        justifyContent: 'center',
        alignContent: 'center',
        fontWeight: '900',
    },
    btnLabel: {
        fontWeight: '600',
        color: 'white',
        fontSize: 20
    }

})