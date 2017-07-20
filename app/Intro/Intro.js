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
  slider: { screen: Slider },
  signup: { screen: Signup },
  confirmation: { screen: Confirmation },
};

const IntroNav = StackNavigator(routeConfig);

export default IntroNav;
