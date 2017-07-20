import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
} from "react-native";
// const StyleSheet = require('react-native-debug-stylesheet');

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 0.7,
    height: 46,
    backgroundColor: '#3FB2BF',
    borderRadius: 4,
  },
  text: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
})

const Button = ({ index, onPress }) => {
  return (
    <TouchableHighlight
      onPress={onPress}
      underlayColor={'#2a747c'}
      style={styles.button}
    >
      <Text style={styles.text}>START CLASSPASS</Text>
    </TouchableHighlight>
  )
};

export default Button
