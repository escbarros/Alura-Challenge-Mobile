import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import HomeScreen from "./src/pages/HomeScreen"
import { useFonts } from 'expo-font';

import 'react-native-gesture-handler';
import StackNavigator from './src/router/StackNavigator';

export default function App() {

  const [fontsLoaded] = useFonts({
    'BebasNeue': require('./src/assets/fonts/BebasNeue-Regular.ttf'),
  });



  if (!fontsLoaded) {
    return null;
  }

  return (
    <StackNavigator/>
  );
}

