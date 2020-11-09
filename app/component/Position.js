import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';


class Header extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={{ width: '20%' }}>
          <Image style={{ width: 14, height: 14 }} source={require('app/assets/icon/Icon.png')} />

        </View>
        <Text style={styles.textPosition}>Hanoi, Vietnam</Text>
      </View>
    );
  }
}

export default Header;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EEEEF1',
    height: 40,
    width: 185,
    borderRadius: 20,
    marginLeft: 15,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  textPosition: {
    textAlign: 'center',
    fontSize: 14,
    color: '#333333',
    fontFamily: 'SFProText'
  },


})
