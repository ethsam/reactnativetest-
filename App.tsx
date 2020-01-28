import React, { Component } from 'react';
import PositionUser from './components/Getposition';
import SommaireButton from './components/Sommaire';
import { View } from 'react-native';

export default class App extends Component {

  render() {
    return (
      <View>
        <SommaireButton />
        
        <PositionUser />
      
      </View>
    );
  }

}