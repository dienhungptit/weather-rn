import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

class Icon extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View >
        <Image style={{ width: 47, height: 41 }} source={require('app/assets/icon/Shape.png')} />
        <Text style={{
          marginTop: 10,
          textAlign: 'center',
          fontSize: 14,
          color: '#5866F6',
          fontFamily: 'SFProText'
        }}>
          Sunny
        </Text>
      </View>
    );
  }
}

export default Icon;
