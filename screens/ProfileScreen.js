import { StatusBar } from 'expo-status-bar'
import React, { useContext } from 'react'
import { View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Appbar, Button, IconButton, Text } from 'react-native-paper'
import theme from '../config/theme'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {Auth} from '../contexts/AuthContext'

const ProfileScreen = ({navigation}) => {
    const { HandleLogout } = useContext(Auth)
    return (
        <>
       <Appbar style={{ backgroundColor:'transparent', display:'flex', shadowColor:'transparent'}}>
       <View style={{ display:'flex', flex:1, flexDirection:'row', alignContent:'center', alignItems:'center'}}>
       <TouchableOpacity  onPress={()=>navigation.goBack()} >
             <IconButton icon='chevron-left' color={theme.colors.primary} centered={true} size={40} style={{ width: 40}}  />
             </TouchableOpacity>
             <Text style={{
                 fontSize:25,
                 fontWeight:'700',
                 color:theme.colors.primary,
                 flex:1,
             }}>
                 Business Info
                </Text>
                <TouchableOpacity  onPress={()=>navigation.goBack()} >
                <MaterialCommunityIcons
                name='dots-vertical'
                color={theme.colors.primary}
                size={30}
                style={{
                    marginRight:'auto'
                }}
              />
             </TouchableOpacity>

        </View>
       </Appbar>
       <View>
           <Button mode="contained" style={{}} onPress={()=>HandleLogout()}>LOG THE FUCK OUT</Button>
       </View>
        
        </>
       
    )
}

export default ProfileScreen
