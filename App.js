import 'react-native-gesture-handler';
import { View, Text, StatusBar } from 'react-native'
import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './src/Routes/MainStack';
import AuthStack from './src/Routes/AuthStack';
import { colors } from './src/Constants/colors';


const App = () => {
  const [user, setuser] = useState(true)

  return (
    <NavigationContainer>
      <StatusBar backgroundColor={colors.Black} />
      {
        user === false ?
          <MainStack />
          :
          <AuthStack />
      }
    </NavigationContainer>
  )
}

export default App