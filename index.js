console.ignoredYellowBox = ['Remote debugger is in a background tab', 'Using <Image> with children'];
import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  View,
} from "react-native";
import Intro from "./app/Intro/Intro";
import Main from "./app/Main/Main";
// const StyleSheet = require('react-native-debug-stylesheet');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default class RNClassPass extends Component {
  state = {
    loggedIn: false,
  }

  createAccount = () => {
    console.log('create account called');
  }
  
  subscribe = () => {
    console.log('create account called');
  }

  render() {
    return (
      <View style={styles.container}>
        {
          !this.state.loggedIn ? (
            <Intro
              screenProps={{
                createAccount: this.createAccount,
                subscribe: this.subscribe,
              }}
            />
          ) : (
            <Main />
          )
        }
      </View>
    );
  }
}

AppRegistry.registerComponent("RNClassPass", () => RNClassPass);
