import { View, Text, StyleSheet, Image, Dimensions } from 'react-native'
import React from 'react'
import Images from '../../Constants/Images'
import { windowHeight, windowWidth } from '../../Constants/Strings'
import { colors } from '../../Constants/colors'

const WideHeader = () => {
    return (
        <>
            <View style={styles.WideHeaderWrapper}>
                <Image style={styles.HeaderImage} source={Images.LOGO} resizeMode="contain" />
            </View>
        </>
    )
}

export default WideHeader


const styles = StyleSheet.create({
    WideHeaderWrapper: {
        backgroundColor: colors.Black,
        height: windowHeight / 7,
        width: windowWidth,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: '5%',
        zIndex: -1,
    },
    HeaderImage: {
        height: "100%",
        width: '100%',
    }
})

