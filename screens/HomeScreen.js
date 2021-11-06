import React, { useContext } from 'react'
import { View, Text } from 'react-native'
import { Button } from 'react-native-paper'

import { Auth } from '../contexts/AuthContext'

const HomeScreen = () => {
    const {HandleLogout} = useContext(Auth)
    // console.log(HandleLogout);
    return (
        <View>
            <Text>Welcome</Text>
            <Button onPress={()=>HandleLogout()} title="Logout">Logout</Button>
        </View>
    )
}

export default HomeScreen
