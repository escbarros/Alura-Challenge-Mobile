import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import HomeScreen from "./src/pages/HomeScreen"
import { useFonts } from 'expo-font';


export default function App() {

  const [fontsLoaded] = useFonts({
    'BebasNeue': require('./src/assets/fonts/BebasNeue-Regular.ttf'),
  });



  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={{backgroundColor: "#222222"}}>
      <HomeScreen/>
    </View>
  );
}

