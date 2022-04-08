import { View, Text, SafeAreaView, Platform, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import FormInput from '../../Component/FormInput'
import FormButton from '../../Component/FormButton'
import WideHeader from '../../Component/Header/WideHeader'
import { colors } from '../../Constants/colors'
import { useNavigation } from '@react-navigation/native';
import NavigationStrings from '../../Constants/NavigationStrings'


const SignUp = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.LoginWrapper} >

            <WideHeader />
            <View style={styles.backColor} >
                <View style={styles.LoginContent}>
                    <ScrollView>
                        <Text style={styles.TextHeading} >Sign Up</Text>
                        <FormInput
                            // onChangeText={email => setEmailForPass(email)}
                            headingTextColor="#BFBFBF"
                            InputSubject="Name"
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
                        <FormInput
                            // onChangeText={email => setEmailForPass(email)}
                            headingTextColor="#BFBFBF"
                            InputSubject="Confirm Mobile Number"
                            fontsizes={16}
                            autoCapitalize="none"
                            autoCorrect={false}
                            secureTextEntry={true}
                            keyboardType={Platform.OS === 'ios' ? "number-pad" : "numeric"}
                            fontWeights={'500'}
                            iconType={'eye-off-outline'}
                            secondIconType={'eye-outline'}

                        />
                        <FormInput
                            // onChangeText={email => setEmailForPass(email)}
                            headingTextColor="#BFBFBF"
                            InputSubject="Chasis Number (Optional)"
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
                            buttonTitle="Add Bike"
                            onPress={() => navigation.navigate(NavigationStrings.ADD_BIKE)}
                        />
                        <View style={styles.downNavigate}>
                            <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate(NavigationStrings.LOGIN_SCREEN)} >
                                <Text style={styles.signUpText} >Already have an account? Log In instead</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>
            </View>

        </SafeAreaView>

    )
}

export default SignUp



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
        paddingBottom: ' 30%',
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

