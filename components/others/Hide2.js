import React, { useState } from "react";
import {TextInput,View,StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
//import eye from '../images/eyecross.png';

const Hide = () => {
const [hidePass,setHidePass] = useState(true);
 
return (
  <>
      <View>
        <TextInput placeholder="enter mobile number again"
           secureTextEntry={hidePass ? true:false}
           style={styles.textInput}
           keyboardType='numeric'/>
          <Icon name={hidePass ? 'eye-slash':'eye'} size={17} color='grey'
           onPress={() => setHidePass(!hidePass)}
           style={styles.closeButton}/>
      </View>
      </>
  );
};


const styles = StyleSheet.create({
  textInput: {
    top:10,
    left:10
  },
  closeButton: {
    left:275,
    bottom:20
  },
})

export default Hide;