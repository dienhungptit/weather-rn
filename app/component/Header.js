import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{
          paddingLeft: 15,
          justifyContent: 'center',
          alignContent: 'center',
        }}>
          <SimpleLineIcons name="menu" size={24} color="black" />
        </View>

        <View style={{
          flex: 5,
          justifyContent: 'center',
          alignContent: 'center'
        }}>
          <Text style={styles.textHeader}>Weather Forecast</Text>
        </View>
        <View style={{
          flex: 1,
        }}>
        </View>
      </View>
    );
  }
}

export default Header;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 63,
    width: '100%',
    justifyContent: 'center',
    alignContent: 'center'
  },
  textHeader: {
    textAlign: 'center',
    fontSize: 18,
    color: '#333333',
    fontFamily: 'SFProText'
  },
})
