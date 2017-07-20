import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
} from 'react-native';
// const StyleSheet = require('react-native-debug-stylesheet');

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    zIndex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    width,
    height: 100,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Title = ({ index }) => {
  const color = index % 2 === 0 ? 'black' : 'white';
  return (
    <View style={styles.container}>
      <Text style={{
        color,
        fontWeight: 'bold',
      }}>CLASSPASS</Text>
    </View>
  )
};

export default Title
