import { View, Text, SafeAreaView, Platform, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import WideHeader from '../../Component/Header/WideHeader'
import FormInput from '../../Component/FormInput'
import FormButton from '../../Component/FormButton'
import { colors } from '../../Constants/colors'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';
import NavigationStrings from '../../Constants/NavigationStrings'



const Login = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.LoginWrapper} >
            <WideHeader />
            <View style={styles.backColor} >
                <View style={styles.LoginContent}>
                    <Text style={styles.TextHeading} >Log In</Text>
                    <FormInput
                        // onChangeText={email => setEmailForPass(email)}
                        headingTextColor="#BFBFBF"
                        InputSubject="Vehcile Registration Number"
                        fontsizes={16}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorrect={false}
                        fontWeights={'500'}
                    />
                    <FormInput
                        // onChangeText={email => setEmailForPass(email)}
                        headingTextColor="#BFBFBF"
                        InputSubject="Mobile Number"
                        fontsizes={16}
                        autoCapitalize="none"
                        autoCorrect={false}
                        secureTextEntry={true}
                        keyboardType={Platform.OS === 'ios' ? "number-pad" : "numeric"}
                        fontWeights={'500'}
                        iconType={'eye-off-outline'}
                        secondIconType={'eye-outline'}
                    />
                    <FormButton
                        buttonTitle="Log In"
                        onPress={() => navigation.navigate(NavigationStrings.SIGNUP_SCREEN)}
                    />
                    <View style={styles.downNavigate}>
                        <TouchableOpacity activeOpacity={0.7} >
                            <Text style={styles.ForgotPass} >Forgot password?</Text>
                        </TouchableOpacity>

                        <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate(NavigationStrings.SIGNUP_SCREEN)} >
                            <Text style={styles.signUpText} >Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        </SafeAreaView>

    )
}

export default Login



const styles = StyleSheet.create({

    LoginWrapper: {
        flex: 1,
        backgroundColor: colors.Pure_White,
    },
    backColor: {
        backgroundColor: colors.Black,
    },
    TextHeading: {
        fontSize: 24,
        fontWeight: '700',
        color: colors.Black,
        fontFamily: 'popins',
        marginBottom: '10%',
    },
    LoginContent: {
        backgroundColor: colors.Pure_White,
        paddingTop: '15%',
        paddingHorizontal: '7%',
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
        height: '100%',
    },
    downNavigate: {
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '30%',
        top: 10,
        marginVertical: 20,
    },
    ForgotPass: {
        color: "#808083",
        fontWeight: '500',
        fontSize: 16,
    },
    signUpText: {
        color: "#007AFF",
        fontWeight: '500',
        fontSize: 16,
    },
})

