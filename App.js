import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { useState } from 'react';
import { useFonts, Inter_400Regular, Inter_700Bold} from '@expo-google-fonts/inter';
import Home from './Home';
import Workout from './Workout';
import Library from './Library';
import BottomNav from './BottomNav';

export default function App() {

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  })

  const [activeScreen, setActiveScreen] = useState('Home');
  const renderScreen = () => {
    switch(activeScreen) {
      case 'Home': return <Home active={activeScreen} onNavigate={setActiveScreen}/>;
      case 'Workout': return <Workout active={activeScreen} onNavigate={setActiveScreen}/>;
      case 'Library': return <Library active={activeScreen} onNavigate={setActiveScreen}/>
      default: return <Home active={activeScreen} onNavigate={setActiveScreen}/>;
    }

    if (!fontsLoaded) return null;
  }
  return (
    <View style={{flex: 1}}>
      {renderScreen()}
      <BottomNav active={activeScreen} onNavigate={setActiveScreen}/>
    </View>
  );
}