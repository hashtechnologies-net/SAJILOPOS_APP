import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import  DrawerContent from '../components/Sidebar';
import theme from '../config/theme';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button } from 'react-native-paper';
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
            <View>
           <View style={{ display:'flex', flexDirection:'row', justifyContent:'space-around', backgroundColor:'white', borderTopColor:'black', height:60, alignContent:'center', alignItems:'center', paddingVertical:15 }}>
              <Button mode='' shouldRasterizeIOS={true} style={{ borderRadius:40, alignContent:'center', justifyContent:'center', width:30, height:50 }} >
                  <MaterialCommunityIcons name='home-analytics' size={35} color={theme.colors.accent} />
              </Button>

              <Button mode='' shouldRasterizeIOS={true} style={{ borderRadius:40, alignContent:'center', justifyContent:'center', width:30, height:50 }} >
                  <MaterialCommunityIcons name='calendar-outline' size={30} color={theme.colors.accent} />
              </Button>

              <Button mode='' shouldRasterizeIOS={true} style={{ borderRadius:40, alignContent:'center', justifyContent:'center', width:30, height:50, backgroundColor:theme.colors.primary }} >
                  <MaterialCommunityIcons name='home-outline' size={35} color={theme.colors.accent} />
              </Button>

              
              <Button mode='' shouldRasterizeIOS={true} style={{ borderRadius:40, alignContent:'center', justifyContent:'center', width:30, height:60 }} >
                  <MaterialCommunityIcons name='graph-outline' size={35} color={theme.colors.accent} style={{ }} />
              </Button>
              <Button mode='' shouldRasterizeIOS={true} style={{ borderRadius:40, alignContent:'center', justifyContent:'center', width:30, height:60 }} >
                  <MaterialCommunityIcons name='more' size={35} color={theme.colors.accent} />
              </Button>
           </View>
       </View>
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