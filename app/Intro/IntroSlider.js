import React, { PureComponent } from 'react';
import {
  Dimensions,
  Image,
  Text,
  TouchableHighlight,
  View,
  StyleSheet,
} from "react-native";
import Carousel from 'react-native-snap-carousel';
// const StyleSheet = require('react-native-debug-stylesheet');
import Title from './components/Title';
import Footer from './components/Footer';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  carouselContainer: {
    flex: 1,
    alignItems: 'center',
  },
  slideContainer: {
    width,
    height,
  },
});


class Slider extends PureComponent {
  static navigationOptions = {
    header: null,
  }

  state = {
    index: 0,
  }

  onSnapToItem = (index) => {
    this.setState({
      index,
    })
  } 

  render() {
    return (
      <View style={styles.carouselContainer}>
        <Title index={this.state.index} />
        <Carousel
          onSnapToItem={this.onSnapToItem}
          inactiveSlideScale={1}
          sliderWidth={width}
          sliderHeight={height}
          itemWidth={width}
          itemHeight={height}
        >
          <Slide1 />
          <Slide2 />
          <Slide3 />
        </Carousel>
        <Footer activeIndex={this.state.index} />
      </View>
    )
  }
}

const Slide1 = () => (
  <Image
    source={require('../../assets/images/slide-1.gif')}
    style={[styles.slideContainer]}>
    <View></View>
    <View></View>
  </Image>
);

const Slide2 = () => (
  <Image
    source={require('../../assets/images/slide-2.jpg')}
    style={[styles.slideContainer]}>
    <View></View>
    <View></View>
  </Image>
);

const Slide3 = () => (
  <Image
    source={require('../../assets/images/slide-1.gif')}
    style={[styles.slideContainer]}>
    <View></View>
    <View></View>
  </Image>
);

export default Slider;