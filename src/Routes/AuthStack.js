import { View, Text, Easing } from 'react-native'
import React from 'react'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import Anim4 from '../../screens/Anim4';
import NavigationStrings from '../Constants/NavigationStrings';
import { AddBike, LoadingScreen, Login, SignUp } from '../Screens';


const AuthStack = () => {
  const Stack = createStackNavigator();

  const config = {
    animation: 'timing',
    config: {
      duration: 250,
      easing: Easing.linear,
    }
  }

  const closeConfig = {
    animation: 'timing',
    config: {
      duration: 200,
      easing: Easing.linear,
    }
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        transitionSpec: {
          open: config,
          close: closeConfig,
        },
        cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
      }}>
      <Stack.Screen name={NavigationStrings.LOADING_SCREEN} component={LoadingScreen} />
      <Stack.Screen name={NavigationStrings.LOGIN_SCREEN} component={Login} />
      <Stack.Screen name={NavigationStrings.SIGNUP_SCREEN} component={SignUp} />
      <Stack.Screen name={NavigationStrings.ADD_BIKE} component={AddBike} />
    </Stack.Navigator>
  )
}

export default AuthStack