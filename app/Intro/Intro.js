import React from "react";
import {
  Text,
  View,
} from "react-native";
import { StackNavigator } from "react-navigation";
import Slider from "./IntroSlider";
import Signup from "./IntroSignup";
import Confirmation from "./IntroConfirmation";

const routeConfig = {
  signup: { screen: Signup },
  slider: { screen: Slider },
  confirmation: { screen: Confirmation },
};

const IntroNav = StackNavigator(routeConfig);

export default IntroNav;
