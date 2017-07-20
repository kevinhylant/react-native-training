import React from 'react';
import {
  StyleSheet,
  View,
} from "react-native";
import Button from './Button';
// const StyleSheet = require('react-native-debug-stylesheet');

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 50,
    bottom: 0,
    left: 0,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
})

const dotColor = (index, activeIndex) => {
  console.log({ activeIndex });
  const opacity = index === activeIndex ? 1 : 0.3;
  return `rgba(63, 178, 191, ${opacity})`;
}

const Dots = ({ activeIndex }) => {
  const dots = [0, 1, 2];

  return (
    <View style={styles.container}>
      {
        dots.map((dot, index) => (
          <View
            key={index}
            style={[styles.dot, { backgroundColor: dotColor(index, activeIndex)}]} />
        ))
      }
    </View>
  )
};

export default Dots
