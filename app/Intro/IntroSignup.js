import React, { PureComponent } from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
// const StyleSheet = require('react-native-debug-stylesheet');

const styles = StyleSheet.create({    
  container: {                        
    padding: 15                       
  },  
  iconContainer: {    
    width: 40,                    
    alignItems: 'center',                        
  },                                  
  icon: {                        
  },                                  
  headerTitleStyle: {     
    alignItems: 'center',
    paddingBottom: 10,            
  },                                  
  buttonContainer: {                           
    flexDirection: 'row',          
    alignItems: 'center',   
    justifyContent: 'center',
    backgroundColor: '#415f9d',
    height: 50,
    borderRadius: 4,                  
  },   
  button: {                      
    flex: 1,
    alignItems: 'center',
  },                                 
  buttonText: {                      
    color: 'white',
    fontSize: 16,
  },                                 
});

const HeaderTitle = () => (
  <View style={styles.headerTitleStyle}>
    <Text style={{ fontSize: 16, color: 'white'}}>
      3 Class Plan
    </Text>
    <Text style={{ fontSize: 14, color: 'white' }}>
      San Francisco Bay Area
    </Text>
  </View>
)

class Signup extends PureComponent {
  static navigationOptions = {
    headerTintColor: '#20c8b1',
    headerStyle: {
      backgroundColor: '#18233e',
    },
    headerTitle: <HeaderTitle />,
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <TouchableHighlight>
          <View style={styles.buttonContainer}>
            <View style={styles.iconContainer}>
              <Icon
                style={styles.icon}
                size={16}
                name='facebook'
                color='white'
              />
            </View>
            <View style={styles.button}>
              <Text style={styles.buttonText}>SIGN UP WITH FACEBOOK</Text>
            </View>
          </View>
        </TouchableHighlight>
      </View>
    )
  }
}

export default Signup;