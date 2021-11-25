import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import {
  DrawerItem,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {
  Drawer,
} from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const DrawerContent = ({ navigation }) => {
  return (
    <DrawerContentScrollView >
      <View
        style={
          styles.drawerContent
        }
      >
        <View style={styles.userInfoSection}>
          <View style={{ flexDirection: 'row', marginTop: 25, width: '100%', justifyContent: 'center' }}>
            <Image source={require('../assets/2.png')} style={styles.logo} />
          </View>
        </View>

        <View style={{ marginTop: 20 }}>
          <Drawer.Section style={styles.drawerSection} title='Management'>
            <DrawerItem
              icon={({ color, size }) => (
                <MaterialCommunityIcons
                  name='newspaper'
                  color={color}
                  size={size}
                />
              )}
              label="Product Management"
              onPress={() => { navigation.navigate('Test') }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <MaterialCommunityIcons
                  name="account-outline"
                  color={color}
                  size={size}
                />
              )}
              label="Customer Management"
              onPress={() => { navigation.navigate('Test') }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <MaterialCommunityIcons
                  name='page-layout-body'
                  color={color}
                  size={size}
                />
              )}
              label="Category Management"
              onPress={() => { navigation.navigate('Test') }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <MaterialCommunityIcons
                  name="playlist-check"
                  color={color}
                  size={size}
                />
              )}
              label="Catalog Management"
              onPress={() => { navigation.navigate('Test') }}
            />

          </Drawer.Section>
          <Drawer.Section title="Preferences">
            <DrawerItem
              icon={({ color, size }) => (
                <MaterialCommunityIcons
                  name="bitcoin"
                  color={color}
                  size={size}
                />
              )}
              label="Transactions"
              onPress={() => { navigation.navigate('Test') }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <MaterialCommunityIcons
                  name="home-analytics"
                  color={color}
                  size={size}
                />
              )}
              label="Analytics"
              onPress={() => { navigation.navigate('Test') }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <MaterialCommunityIcons
                  name="account-outline"
                  color={color}
                  size={size}
                />
              )}
              label="Users"
              onPress={() => { navigation.navigate('Test') }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <MaterialCommunityIcons
                  name="calendar-account"
                  color={color}
                  size={size}
                />
              )}
              label="Birthday"
              onPress={() => { navigation.navigate('Test') }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <MaterialCommunityIcons
                  name='database-settings'
                  color={color}
                  size={size}
                />
              )}
              label="Settings"
              onPress={() => { navigation.navigate('Test') }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <MaterialCommunityIcons
                  name='help-circle'
                  color={color}
                  size={size}
                />
              )}
              label="Help"
              onPress={() => { navigation.navigate('Test') }}
            />
          </Drawer.Section>
        </View>
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  logo: {
    height: 70,
    width: '60%',
    resizeMode: 'contain',
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    marginTop: 20,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    textAlign: 'center',
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});

export default DrawerContent;