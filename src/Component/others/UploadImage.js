import React, { useState, useEffect } from 'react';
import { Image, View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function UploadImage() {
  const [image, setImage] = useState(null);
  const addImage=()=>{};
 
  return (
            <View style={imageUploaderStyles.container}>
                {
                    image  && <Image/>
                }
                    <View style={imageUploaderStyles.uploadBtnContainer}>
                        <TouchableOpacity onPress={addImage} style={imageUploaderStyles.uploadBtn} >
                        <Image style={imageUploaderStyles.img} source={require('../images/uploadicon.png')}/>
                        </TouchableOpacity>
                    </View>
            </View>
   
  );
}

const imageUploaderStyles=StyleSheet.create({
    container:{
        height:89,
        width:100, 
        backgroundColor:'#efefef',
        position:'relative',
        overflow:'hidden',
        top:-460,
        left:231
    },
    uploadBtnContainer:{
        opacity:0.7,
        position:'absolute',
        right:0,
        bottom:0,
        backgroundColor:'#f1f1f1',
        width:'100%',
        height:'100%',
    },
    uploadBtn:{
        display:'flex',
        alignItems:"center",
        justifyContent:'center'
    },
    img:{
        width:60,
        height:65,
        top:10
    },
});