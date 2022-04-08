import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native'
import React from 'react'
import { colors } from '../../Constants/colors'
import Images from '../../Constants/Images'
import FormButton from '../../Component/FormButton'
import { useNavigation } from '@react-navigation/native';
import NavigationStrings from '../../Constants/NavigationStrings'


const LoadingScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.LoadingWrapper} >
      <View style={styles.LoadingContent} >
        <View style={styles.imageStylingView} >
          <Image style={styles.HeaderImage} source={Images.LOGO} resizeMode="contain" />
          <Text style={styles.TextStyling} >
            All motorcycle services on your fingertips.
          </Text>
        </View>
        <View style={styles.buttonView} >
          <View style={styles.LogInButton} >
            <FormButton buttonTitle="Log In" onPress={() => navigation.navigate(NavigationStrings.LOGIN_SCREEN)} />
          </View>
          <View style={styles.SignInButton} >
            <FormButton buttonTitle="Sign Up" onPress={() => navigation.navigate(NavigationStrings.SIGNUP_SCREEN)} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default LoadingScreen


const styles = StyleSheet.create({

  LoadingWrapper: {
    flex: 1,
    backgroundColor: colors.Black,
  },
  LoadingContent: {
    height: '100%',
    justifyContent: 'space-around',
  },
  imageStylingView: {
    top: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonView: {
    top: '10%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  TextStyling: {
    color: colors.Pure_White,
    fontSize: 16,
    marginBottom: 15,
    padding: 25,
    width: "80%",
    textAlign: 'center',
  },
  LogInButton: {
    width: '40%',
  },
  SignInButton: {
    width: '40%',
  },

})

