import { configureFonts, DefaultTheme } from "react-native-paper";
import fonts from "./fonts";

const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#27BDBE',
      accent: '#FFCC32',
    },
    fonts:configureFonts(fonts)
  };

  export default theme;