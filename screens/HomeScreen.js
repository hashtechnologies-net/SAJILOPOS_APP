import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import  DrawerContent from '../components/Sidebar';
import { StatusBar } from 'expo-status-bar';
import theme from '../config/theme';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
const image = require('../assets/4v2.png')
const Drawer = createDrawerNavigator();



const HomeScreen = () => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
        </View>
    );
}
const TestScreen = () => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Test Screen</Text>
        </View>
    );
}

const headerRight = (navigation) => {
    return (
        <View style={{ flexDirection: 'row', marginRight: 10 }}>
            <TouchableOpacity onPress={() => {navigation.navigate('ProfileScreen')}}>
            <MaterialCommunityIcons
                name='account-circle-outline'
                color='white'
                size={30}
            />
            </TouchableOpacity>
           
        </View>
    )
}


const headerCenter = (navigation) => {
    return (
        <View style={{ flexDirection: 'row', width: 180, justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>

            <Image source={image} style={styles.HeaderImage} />

        </View>
    )
}


const RootNavigator = ({ navigation }) => {
    return (
        <>
            {/* <StatusBar /> */}
            <Drawer.Navigator
                drawerContent={()=><DrawerContent navigation={navigation} />}
                screenOptions={{
                    drawerStyle: {
                        width: 280,
                        drawerStatusBarAnimation: 'fade',
                    },
                    swipeEnabled: true,
                    gestureEnabled: true,
                    headerTitleStyle: { display: 'none' },
                    headerRight: () => headerRight(navigation),
                    headerTintColor: 'white',
                    headerStyle: {
                        backgroundColor: theme.colors.primary,
                        height: 60,
                    },
                    headerTitle: () => headerCenter(),
                    headerTitleAlign: 'center'

                }}

            >
                <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name="Test" component={TestScreen} />
            </Drawer.Navigator>
        </>
    );
};


const styles = StyleSheet.create({
    HeaderImage: {
        width: '52%',
        height: 40,
        justifyContent: 'center',
        alignContent: 'center'
    }
})
export default RootNavigator;