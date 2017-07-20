import React from 'react';
import {
  StyleSheet,
  View,
} from "react-native";
import Button from './Button';
import Dots from './Dots';
// const StyleSheet = require('react-native-debug-stylesheet');

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: 200,
    bottom: 0,
    left: 0,
  },
})

const dotColor = (index, activeIndex) => {
  const opacity = index === activeIndex ? 1 : 0.3;
  return `rgba(63, 178, 191, ${opacity})`;
}

const Footer = ({ activeIndex }) => {
  const dots = [0, 1, 2];

  return (
    <View style={styles.container}>
      <Dots activeIndex={activeIndex} />
      <View>
        <Button />
      </View>

      <View>
      </View>
    </View>
  )
};

export default Footer
