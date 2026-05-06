import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, Image, View } from 'react-native';
import BottomNav from './BottomNav';

const {width, height} = Dimensions.get('window');

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.topText}>Hey, Raph</Text>
        <View style={styles.streak}>
          <Text>
            6
          </Text>
          <Image
            source={require('./assets/flame.png')}
            style={styles.flame}
          />
        </View>
      </View>
      <Text>Open up App.js to start working on your</Text>
      <StatusBar style="auto" />
      <BottomNav/>
      <Text>Testing</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fbfaf5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  top: {
    position: 'absolute',
    top: height * 0.1,
    height: height * 0.14,
    backgroundColor: '#A4CDF7',
    width: width * 0.98,
    borderRadius: 12,
  },
  topText: {
    width: width * 0.2,
    height: height * 0.1,
    marginTop: 16,
    marginLeft: 16,
    fontFamily: 'Helvetica Neue',
    fontWeight: 'bold',
    fontSize: '35',
    color: 'white',
  },
  flame: {
    opacity: 0.8,
    width: 31,
    height: 38,
  }
});
