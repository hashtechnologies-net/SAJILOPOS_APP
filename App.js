import * as React from "react";
import { Provider as PaperProvider} from 'react-native-paper'
import { SafeAreaProvider } from "react-native-safe-area-context";
import theme from "./config/theme";
import WelcomeScreen from "./screens/WelcomeScreen";


export default function App() {
 
  return (
    
    <PaperProvider theme={theme} >
      <SafeAreaProvider>
      <WelcomeScreen />
       </SafeAreaProvider>
    </PaperProvider>
    
  );
}
