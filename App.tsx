import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
// import PositionUser from './components/Getposition';
// import MapHome from './screens/Maps';
import SommaireButton from './components/Sommaire';


export default class App extends Component {

  render() {
    return (
      <View style={styles.container}> 
        <SommaireButton />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
  }
});