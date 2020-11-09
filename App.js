import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
//Header --
import Header from 'app/component/Header'
import Position from 'app/component/Position'
import Temp from 'app/component/Temp'
import Icon from 'app/component/Icon'


import { AppLoading } from 'expo';
import { useFonts } from 'expo-font';

export default function App() {

  let [fontsLoaded] = useFonts({
    'SFProText': require('app/assets/fonts/SFProText-Regular.ttf'),
  });

  let data = [
    { "id": 1, "time": "8:30", "temp": "24º" },
    { "id": 2, "time": "9:30", "temp": "28º" },
    { "id": 3, "time": "10:30", "temp": "32º" },
    { "id": 4, "time": "11:30", "temp": "33º", "chose": true },
    { "id": 5, "time": "12:30", "temp": "32º" },
    { "id": 6, "time": "1:30", "temp": "30º" },

  ]
  const renderRecipes = ({ item }) => {
    if (item.chose) {
      return (<TouchableOpacity
        style={{
          flexDirection: 'column',
          width: 40,
          marginHorizontal: 15,
          alignItems: 'center',
          marginTop: 30
        }}
      >
        <Text style={{
          textAlign: 'center',
          fontSize: 14,
          color: '#5866F6',
          fontFamily: 'SFProText'
        }}>
          {item.time}
        </Text>

        <Text style={{
          marginTop: 23,
          textAlign: 'center',
          fontSize: 14,
          color: '#5866F6',
          fontFamily: 'SFProText'
        }}>
          {item.temp}
        </Text>
        <Image style={{ width: 16, height: 14, marginTop: 33 }} source={require('app/assets/icon/Shape.png')} />
      </TouchableOpacity>)
    }
    else {
      return (
        <TouchableOpacity
          style={{
            flexDirection: 'column',
            width: 40,
            marginHorizontal: 15,
            alignItems: 'center',
            marginTop: 30
          }}
        >
          <Text style={{
            textAlign: 'center',
            fontSize: 14,
            fontFamily: 'SFProText'
          }}>
            {item.time}
          </Text>

          <Text style={{
            marginTop: 23, textAlign: 'center',
            fontSize: 14,
            fontFamily: 'SFProText'
          }}>
            {item.temp}
          </Text>
          <Image style={{ width: 16, height: 14, marginTop: 33 }} source={require('app/assets/icon/IconBlue.png')} />
        </TouchableOpacity>
      );
    }
  }

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <Header />
        <Position />
        <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', marginTop: 35 }}>
          <Temp />
        </View>
        <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
          <Icon />
        </View>
        <View style={{ borderWidth: 1, borderColor: '#EEEEF1', marginHorizontal: 14, marginTop: 39 }} />
        <View style={{ height: 164 }}>
          <FlatList
            style={{
            }}
            horizontal={true}
            data={data}
            renderItem={renderRecipes}
            keyExtractor={item => `${item.id}`}
          />
        </View>
        <View style={{ borderWidth: 1, borderColor: '#EEEEF1', marginHorizontal: 14 }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    paddingTop: 47
  },
});
