import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class FixedDirectionBasics extends Component {
  render () {
    return(
      <View style={{flex: 1, flexDirection: 'row-reverse'}}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}}/>
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}}/>
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: '#333',
    fontWeight: 'bold',
    fontSize: 30,
  }
});
