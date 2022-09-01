import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import RandomNumForm from './components/RandomNumForm';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class App extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          Random Number Generator
        </Text>
        <Card style = {styles.card}>
          <RandomNumForm />
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  card:{
    width: 300,
    height: 300,
    alignSelf: 'center'
  }
});
