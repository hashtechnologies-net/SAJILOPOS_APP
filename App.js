import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { Provider as PaperProvider} from 'react-native-paper'
import { SafeAreaProvider } from "react-native-safe-area-context";
import theme from "./config/theme";
import AuthStack from "./navigation/AuthFlow";
import AuthContext, { Auth } from './contexts/AuthContext';
import NavigationProvider from "./navigation/NavigationProvider";


export default function App() {
 
  return (
    
    
      <SafeAreaProvider>
        <PaperProvider theme={theme} >
        <AuthContext>
           <NavigationProvider />
        </AuthContext>
        </PaperProvider>
       </SafeAreaProvider>
   
    
  );
}
