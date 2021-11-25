import { useEffect } from "react";
import { configureFonts, DefaultTheme } from "react-native-paper";
import  fontConfig from "./fonts";
import * as Font from 'expo-font';
  async function loadFonts() {
    await Font.loadAsync({
      'gotham-black': require('../assets/fonts/Gotham-Black.otf'),
      'gotham-medium': require('../assets/fonts/GothamMedium.ttf'),
      'gotham-bold': require('../assets/fonts/GothamBold.ttf'),
      'gotham-light': require('../assets/fonts/GothamLight.ttf'),
      'gotham-thin': require('../assets/fonts/Gotham-Thin.otf'),
    });
  }

  loadFonts();

const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#27BDBE',
      accent: '#FFCC32',
    },
    fonts:configureFonts(fontConfig),
  };

  export default theme;