import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { windowHeight, windowWidth } from '../Constants/Strings';
import AntDesign from 'react-native-vector-icons/Feather';
import MIIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';

// onChangeText={changedText}
const FormInput = ({ InputSubject, labelValue, placeholderText, iconType, secondIconType, changedText, isPassword, headingTextColor, fontsizes, fontWeights, ...rest }) => {
  const [show, setshow] = useState(false)

  const secure = () => {
    setshow(!show)
    console.log(show);
  }

  return (
    <>
      <Text style={[styles.Subjectstyle, { color: headingTextColor, fontSize: fontsizes, fontWeight: fontWeights }]} >{InputSubject} </Text>
      <View style={styles.inputContainer}>
        {iconType && show === true ?
          <TextInput
            value={labelValue}
            onChangeText={changedText}
            style={styles.input}
            numberOfLines={1}
            placeholder={placeholderText}
            placeholderTextColor="#666"
            {...rest}
            secureTextEntry={false}
          >
          </TextInput>
          : show === false ?
            < TextInput
              value={labelValue}
              onChangeText={changedText}
              style={styles.input}
              numberOfLines={1}
              placeholder={placeholderText}
              placeholderTextColor="#666"
              {...rest}
              secureTextEntry={true}
            >
            </TextInput>
            :
            <TextInput
              value={labelValue}
              onChangeText={changedText}
              style={styles.input}
              numberOfLines={1}
              placeholder={placeholderText}
              placeholderTextColor="#666"
              {...rest}
            >
            </TextInput>
        }
        {
          iconType ?

            <View style={styles.iconStyle}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => { secure() }} >
                {show === false ?
                  <MIIcon name={iconType} size={20} color="#666" />
                  :
                  show === true ?
                    <MIIcon name={secondIconType} size={20} color="#666" />
                    :
                    <MIIcon name={iconType} size={20} color="#666" />

                }
              </TouchableOpacity>
            </View>
            :
            null
        }

      </View>
    </>
  );
};

export default FormInput;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 5,
    marginBottom: 20,
    width: '100%',
    height: windowHeight / 15,
    // borderColor: '#fff',
    // borderRadius: 5,
    // borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: '#FFFFFF',
  },
  Subjectstyle: {
    color: '#000',
    fontSize: 16,
  },
  iconStyle: {
    padding: 10,
    height: '100%',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightColor: '#ccc',
    width: 40,
    right: '-2%',
  },
  input: {
    flex: 1,
    fontSize: 16,
    fontFamily: 'DM Sans',
    color: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#BFBFBF',
  },
  inputField: {
    padding: 10,
    marginTop: 5,
    marginBottom: 10,
    width: windowWidth / 1.5,
    height: windowHeight / 15,
    fontSize: 16,
    borderRadius: 8,
    borderWidth: 1,
  },
});
