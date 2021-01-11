import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import Searchscreen from './screens/Searchscreen'
import Booktransactions from './screens/Booktransactions'

export default class App extends React.Component {
  render(){
  return (
    
      <Appcontainer/>
    
  );
}
}
const tabnavigator = createBottomTabNavigator({
Transaction:{screen:Booktransactions},
search:{screen:Searchscreen}
})
const Appcontainer = createAppContainer(tabnavigator)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
