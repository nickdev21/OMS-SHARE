import * as React from 'react';
import { Text, View, Image } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/HomeScreen';
import LoanScreen from '../../components/others/LoanScreen';
import Screen14 from '../../screens/Screen14';
import Screen16 from '../../screens/Screen16';
import NavigationStrings from '../Constants/NavigationStrings';
import Images from '../Constants/Images';


const BottomTabRoutes = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: 'white',
        headerShown: false,
        tabBarActiveBackgroundColor: '#f2994a',
        tabBarInactiveTintColor: 'grey',
        tabBarHideOnKeyboard: true
      }}
    >
      <Tab.Screen
        name={NavigationStrings.HOME_SCREEN}
        component={HomeScreen}

        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused }) => (
            <>
              {focused ?
                <Image source={Images.HOME_WHITE} style={{
                  width: 20,
                  height: 20,
                  margin: 5,
                }} />
                :
                <Image source={Images.HOME_GREY} style={{
                  width: 20,
                  height: 20,
                  margin: 5,
                }} />

              }
            </>
          ),
        }}
      />
      <Tab.Screen
        name={NavigationStrings.LOAN_SCREEN}
        component={LoanScreen}
        options={{
          tabBarLabel: 'Loan',
          tabBarIcon: ({ focused }) => (
            <>
              {focused ?
                <Image source={Images.LOAN_WHITE} style={{
                  width: 20,
                  height: 20,
                  margin: 2,
                }} />
                :
                <Image source={Images.LOAN_GREY} style={{
                  width: 20,
                  height: 20,
                  margin: 5,
                }} />

              }
            </>
          ),
        }}
      />

      <Tab.Screen
        name={NavigationStrings.BOOKINGS_SCREEN}
        component={Screen14}
        options={{
          tabBarLabel: 'Bookings',
          tabBarIcon: ({ focused }) => (
            <>
              {focused ?
                <Image source={Images.BOOKING_WHITE} style={{
                  width: 20,
                  height: 20,
                  margin: 5,
                }} />
                :
                <Image source={Images.BOOKING_GREY} style={{
                  width: 20,
                  height: 20,
                  margin: 5,
                }} />

              }
            </>
          ),
        }}
      />
      <Tab.Screen
        name={NavigationStrings.PROFILE_SCREEN}
        component={Screen16}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ focused }) => (
            <>
              {focused ?
                <Image source={Images.PROFILE_WHITE} style={{
                  width: 20,
                  height: 20,
                  margin: 5,
                }} />
                :
                <Image source={Images.PROFILE_GREY} style={{
                  width: 20,
                  height: 20,
                  margin: 5,
                }} />

              }
            </>
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default BottomTabRoutes