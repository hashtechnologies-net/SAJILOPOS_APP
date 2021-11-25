import React, { useContext } from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { ActivityIndicator, Button, Headline, IconButton, Snackbar, Text, TextInput } from 'react-native-paper'
import theme from '../../config/theme'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Auth } from '../../contexts/AuthContext'
const image = require('../../assets/login.png')

const LoginScreen = ({ navigation }) => {
   
    const context = useContext(Auth)

    return (
        <View style={{ backgroundColor:theme.colors.background, flex:1, alignItems:'stretch' }}>
        <View style={{ flex:1, height:'60%',  }}>
         <View style={styles.imageWrapper}>
         <View style={styles.buttonWrapper}>
         <TouchableOpacity  onPress={()=>navigation.goBack()} >
             <IconButton icon='chevron-left' color='white' centered={true} size={40}  />
             </TouchableOpacity>
            </View>
            <View style={styles.textWrapper}>
                <Headline style={styles.text}>Welcome Back</Headline>
                <Text style={styles.subText}>Please login to continue</Text>
            </View>
            <Image source={image} style={{width:'100%',resizeMode:'cover', height:500}} />
        </View>
       
        </View>
         <View style={{ flex: 1, justifyContent:'center', marginTop:10,  }}>
         <View style={{ alignItems:'stretch', width:'100%', justifyContent:'center', paddingHorizontal:30 }}>
             
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
   {context.loading ? <ActivityIndicator size='small' animating={true} style={{ backgroundColor: theme.colors.primary, height: 40 }} color='white' /> :
                        <Button mode='contained' color={theme.colors.primary} style={{ height: 40, justifyContent: 'center' }} onPress={() => context.HandleLogin()}>
                            <Text style={{ color: 'white', fontWeight: '700' }}>Log in</Text>
                        </Button>}
    <TouchableOpacity>
        <Text style={{ color:theme.colors.accent, textAlign:'center', marginTop:15 }}>Forgot password?</Text>
    </TouchableOpacity>
         </View>

         {context.hasErrors ? <Snackbar style={{ justifyContent: 'center', marginBottom: 10 }} visible={true} onDismiss={() => context.setHasErrors(false)} action={{
                    label: 'Okay',
                    onPress: () => {
                        context.setHasErrors(false)
                    },
                }}>{context.errors}</Snackbar> : null}
     </View>
     </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    imageWrapper:{
        height:50,
        width:'100%',
        backgroundColor:theme.colors.primary,
    },
    buttonWrapper:{
        height:30, 
        marginTop:30, 
        position:'absolute', 
        zIndex:99
    },
    textWrapper:{
        height:100, 
        marginTop:30, 
        position:'absolute', 
        zIndex:99, 
        top:80,
        paddingHorizontal:30,
        height:100,
    },
    text:{
        fontSize:40, 
        // fontWeight:'bold',
        color:'white',
        paddingTop:30,
        fontFamily:'gotham-black'
    },
    subText:{
        fontSize:23,
    }
})