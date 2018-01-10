import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Gyroscope from './components/Gyroscope'
import Accelerometer from './components/Accelerometer'
import Pedometer from './components/Pedometer'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ marginLeft: 10 }}>
          Test App Gyroscope, Accelero, Pedo:
        </Text>
        <Gyroscope />
        <Accelerometer />
        <Pedometer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 50,
  },
});
