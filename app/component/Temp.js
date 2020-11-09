import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';


class Temp extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textPosition}>33ºC</Text>
      </View>
    );
  }
}

export default Temp;
const styles = StyleSheet.create({
  container: {
    height: 60,
    width: 125,
    borderRadius: 20,
    marginLeft: 15,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  textPosition: {
    textAlign: 'center',
    fontSize: 50,
    color: '#333333',
    fontFamily: 'SFProText'
  },


})
