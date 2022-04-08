import { View, Text, SafeAreaView, Platform, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import FormInput from '../../Component/FormInput'
import FormButton from '../../Component/FormButton'
import WideHeader from '../../Component/Header/WideHeader'
import { colors } from '../../Constants/colors'
import { useNavigation } from '@react-navigation/native';
import NavigationStrings from '../../Constants/NavigationStrings'

const AddBike = () => {
    const navigation = useNavigation();


    return (
        <SafeAreaView style={styles.LoginWrapper} >

            <WideHeader />
            <View style={styles.backColor} >
                <View style={styles.LoginContent}>
                    <ScrollView>
                        <Text style={styles.TextHeading} >Add Bike</Text>
                        <FormInput
                            // onChangeText={email => setEmailForPass(email)}
                            headingTextColor="#BFBFBF"
                            InputSubject="Vehicle Registration Number"
                            fontsizes={16}
                            autoCapitalize="none"
                            autoCorrect={false}
                            keyboardType={Platform.OS === 'ios' ? "number-pad" : "numeric"}
                            fontWeights={'500'}
                        />
                        <FormInput
                            // onChangeText={email => setEmailForPass(email)}
                            headingTextColor="#BFBFBF"
                            InputSubject="Chasis Number"
                            fontsizes={16}
                            autoCapitalize="none"
                            autoCorrect={false}
                            secureTextEntry={true}
                            keyboardType={Platform.OS === 'ios' ? "number-pad" : "numeric"}
                            fontWeights={'500'}
                        />
                        <FormInput
                            // onChangeText={email => setEmailForPass(email)}
                            headingTextColor="#BFBFBF"
                            InputSubject="Make"
                            fontsizes={16}
                            autoCapitalize="none"
                            autoCorrect={false}
                            secureTextEntry={true}
                            fontWeights={'500'}
                            iconType={'eye-off-outline'}
                            secondIconType={'eye-outline'}
                        />
                        <FormInput
                            // onChangeText={email => setEmailForPass(email)}
                            headingTextColor="#BFBFBF"
                            InputSubject="Model"
                            fontsizes={16}
                            autoCapitalize="none"
                            autoCorrect={false}
                            secureTextEntry={true}
                            fontWeights={'500'}
                            iconType={'eye-off-outline'}
                            secondIconType={'eye-outline'}
                        />
                        <FormInput
                            // onChangeText={email => setEmailForPass(email)}
                            headingTextColor="#BFBFBF"
                            InputSubject="Date of Registration (Optional)"
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
                            InputSubject="COE Expiery Date (Optional)"
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
                            buttonTitle="Next"
                        />
                    </ScrollView>
                </View>
            </View>

        </SafeAreaView>
    )
}

export default AddBike



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

