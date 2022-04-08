import { View, Text, Easing } from 'react-native'
import React from 'react'
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import HomeScreen from '../../screens/HomeScreen';
import BottomTabRoutes from './BottomTabRoutes';
import NavigationStrings from '../Constants/NavigationStrings';
import { Listing } from '../Screens';

const MainStack = () => {
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
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen name={NavigationStrings.TABS} component={BottomTabRoutes} />
      <Stack.Screen name={NavigationStrings.LISTING_SCREEN} component={Listing} />
    </Stack.Navigator>
  )
}

export default MainStack