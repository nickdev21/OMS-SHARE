import React, { useState } from "react";
import {SafeAreaView,StyleSheet,View,TextInput,TouchableOpacity,Image,} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

const Hide3 = () => {
  const [hidePass, setHidePass] = useState(true);
  return (
    <>
        <View>
          <TextInput
            placeholder="enter chassis number"
            style={styles.textInput}
            secureTextEntry={hidePass ? true:false} 
            keyboardType='numeric'
          />
          <Icon name={hidePass ? 'eye-slash':'eye'} size={17} color='grey'
           onPress={() => setHidePass(!hidePass)}
           style={styles.closeButton}/>
        </View>
      </>
  );
};

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    width: "90%",
    marginHorizontal:10
  },
  closeButton: {
    position:'absolute',
    left:275,
    bottom:13
  },
});

export default Hide3;