import React, { useContext, useEffect, useState } from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { ActivityIndicator, Button, Headline, IconButton, Snackbar, Text, TextInput } from 'react-native-paper'
import theme from '../../config/theme'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Auth } from '../../contexts/AuthContext'
const image = require('../../assets/signup.png')

const SignupScreen = ({ navigation }) => {

    const context = useContext(Auth)
 

    return (
        <View style={{ backgroundColor: theme.colors.background, flex: 1, alignItems: 'stretch' }}>
            <View style={{ flex: 1, height: '40%', }}>
                <View style={styles.imageWrapper}>
                    <View style={styles.buttonWrapper}>
                        <TouchableOpacity onPress={() => navigation.goBack()} >
                            <IconButton icon='chevron-left' color='white' centered={true} size={40} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.textWrapper}>
                        <Headline style={styles.text}>Create Account</Headline>
                        <Text style={styles.subText}>Start your business with sajilo POS</Text>
                    </View>
                    <Image source={image} style={{ width: '100%', resizeMode: 'cover', height: 350 }} />
                </View>

            </View>
            <View style={{ flex: 1, justifyContent: 'center', marginTop: 10, }}>
                <View style={{ alignItems: 'stretch', width: '100%', justifyContent: 'center', paddingHorizontal: 30 }}>

                    <TextInput
                        value={context.Username}
                        mode='outlined'
                        placeholder='Enter your username'
                        style={{ marginBottom: 10 }}
                        left={<TextInput.Icon name='account' color={theme.colors.accent} size={25} />}
                        onChangeText={(text) => context.setUsername(text)}
                        textContentType='username'
                        keyboardType='default'
                    />

                    <TextInput
                        value={context.Email}
                        mode='outlined'
                        placeholder='Enter Your Email'
                        style={{ marginBottom: 10 }}
                        left={<TextInput.Icon name='email' color={theme.colors.accent} size={25} />}
                        onChangeText={(text) => context.setEmail(text)}
                        keyboardType='email-address'
                        textContentType='emailAddress'

                    />
                    <TextInput
                        value={context.Password}
                        mode='outlined'
                        password={true}
                        placeholder='Enter password'
                        right={<TextInput.Icon name="eye" color={theme.colors.accent} size={25} onPress={() => context.setshowPass(!context.showPass)} />}
                        left={<TextInput.Icon name='lock' color={theme.colors.accent} size={25} />}
                        style={{ marginBottom: 10 }}
                        onChangeText={(text) => context.setPassword(text)}
                        textContentType='password'
                        autoCompleteType='password'
                        keyboardType='default'
                        passwordRules='[A-Z]{1}[a-z]{1}[0-9]{1}[!@#$%^&*]{1}'
                        passwordRulesDescription='Must contain at least one uppercase, lowercase, number and special character'
                        password={true}
                        passswordRules={true}
                        PasswordRulesDescription={true}
                        secureTextEntry={context.showPass}
                        
                    />

                    <TextInput
                        value={context.Password2}
                        mode='outlined'
                        password={true}
                        placeholder='Re-enter Password'
                        right={<TextInput.Icon name="eye" color={theme.colors.accent} size={25} onPress={() => context.setshowPass2(!context.showPass2)} />}
                        left={<TextInput.Icon name='lock' color={theme.colors.accent} size={25} />}
                        style={{ marginBottom: 10 }}
                        onChangeText={(text) => context.setPassword2(text)}
                        textContentType='password'
                        autoCompleteType='password'
                        keyboardType='default'
                        passwordRules='[A-Z]{1}[a-z]{1}[0-9]{1}[!@#$%^&*]{1}'
                        passwordRulesDescription='Must contain at least one uppercase, lowercase, number and special character'
                        password={true}
                        passswordRules={true}
                        PasswordRulesDescription={true}
                        secureTextEntry={context.showPass2}
                    />

                    {context.loading ? <ActivityIndicator size='small' animating={true} style={{ backgroundColor: theme.colors.primary, height: 40 }} color='white' /> :
                        <Button mode='contained' color={theme.colors.primary} style={{ height: 40, justifyContent: 'center' }} onPress={() => context.HandleRegister()}>
                            <Text style={{ color: 'white', fontWeight: '700' }}>Sign Up</Text>
                        </Button>}


                </View>
                {(context.hasErrors && context.errors!=={}) ? 
                <Snackbar style={{ justifyContent: 'center', marginBottom: 10 }} visible={true} onDismiss={() => context.setHasErrors(false)} action={{
                    label: 'Okay',
                    onPress: () => {
                        context.setHasErrors(false)
                    },
                }}>{ context?.errors }</Snackbar> 
                // console.log(context.errors)

: null}
            </View>

        </View>
    )
}

export default SignupScreen

const styles = StyleSheet.create({
    imageWrapper: {
        height: 30,
        width: '100%',
        backgroundColor: theme.colors.primary,
    },
    buttonWrapper: {
        height: 30,
        marginTop: 30,
        position: 'absolute',
        zIndex: 99
    },
    textWrapper: {
        height: 100,
        marginTop: 30,
        position: 'absolute',
        zIndex: 99,
        top: 80,
        paddingHorizontal: 30,
        height: 100,
    },
    text: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white',
        paddingTop: 30
    },
    subText: {
        fontSize: 23,
    }
})