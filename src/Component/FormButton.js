import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { windowHeight, windowWidth } from '../Constants/Strings';

const FormButton = ({ buttonTitle,backgroundColorButton, ...rest }) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} activeOpacity={0.7} {...rest}>
      <Text style={styles.buttonText} {...rest}>{buttonTitle}</Text>
    </TouchableOpacity>

  );
};

export default FormButton;

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 10,
    width: '100%',
    height: windowHeight / 12,
    backgroundColor: '#F2994A',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    // shadowColor: 'rgba(46, 229, 157, 0.4  )',
    // shadowOpacity: 1.5,
    // elevation: 8,
    // shadowRadius: 20 ,
    shadowOffset: { width: 1, height: 13 },
  },
  buttonText: {
    fontSize: 18,
    color: '#ffffff',
    fontFamily: 'DMSans-Bold',
    // textTransform: 'uppercase',
    letterSpacing: 1,
  },
});