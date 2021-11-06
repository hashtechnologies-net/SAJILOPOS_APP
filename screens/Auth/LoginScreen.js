import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { Button, Headline, IconButton, Text, TextInput } from 'react-native-paper'
import theme from '../../config/theme'
import { TouchableOpacity } from 'react-native-gesture-handler'




const image = require('../../assets/login.png')

const LoginScreen = ({ navigation }) => {
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
      value=''
      mode='outlined'
      placeholder='Enter your email'
      style={{ marginBottom:10 }}
      left={<TextInput.Icon name='email' color={theme.colors.accent } size={25} />}
    />
    <TextInput
      value=''
      mode='outlined'
      password={true}
      placeholder='**********'
      right={<TextInput.Icon name="eye" color={theme.colors.accent } size={25} />}
      left={<TextInput.Icon name='lock' color={theme.colors.accent } size={25} />}
      style={{ marginBottom:15 }}

    />
    <Button mode='contained' color={ theme.colors.primary } style={{ height:40, justifyContent:'center' }}>
        <Text style={{ color:'white', fontWeight:'700' }}>Login</Text>
    </Button>
    <TouchableOpacity>
        <Text style={{ color:theme.colors.accent, textAlign:'center', marginTop:15 }}>Forgot password?</Text>
    </TouchableOpacity>
         </View>
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
        fontWeight:'bold',
        color:'white',
        paddingTop:30
    },
    subText:{
        fontSize:23,
    }
})