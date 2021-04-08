import React, { useRef } from 'react';
import { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image, Button } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import RBSheet from "react-native-raw-bottom-sheet";
// import { useRef } from 'react/cjs/react.production.min';
import Icon from 'react-native-vector-icons/dist/FontAwesome';


function Images(props) {


    //image state where an initaial image is set in state
    const [image, setImage] = useState('https://img.icons8.com/pastel-glyph/2x/upload-document--v2.png')


    // Tking image from camera function
    const takePhotoFromCamera = () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
        }).then(image => {
            setImage(image.path)
            console.log(image);
        });
    }
    
    // Tking image from Gallery function
    const takePhotoFromGallery = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            setImage(image.path)
            console.log(image);
        });
    }
    const refRBSheet = useRef();

    return (
        <>
            <View style={styles.setting}>
                <View style={{flex:2,alignSelf:'center',alignContent:"center",justifyContent:'center'}}>
                <Text style={{ color: '#000', fontSize: 25, marginTop:20,alignSelf:'center',textAlign:'center'}}>Image Upload using Camera & Gallery</Text>
                <Image 
                    style={styles.image} source={{ uri: image }} />
                </View>
                <View style={{flex:1,alignSelf:'center',alignContent:"center",justifyContent:'center'}}>
                    <TouchableOpacity onPress={() => refRBSheet.current.open()}
                        style={styles.buttonUpload}>
                        <Text style={{ color: '#fff', fontSize: 15, fontWeight: "bold" ,letterSpacing:2}}>Upload a Photo</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <RBSheet
                        ref={refRBSheet}
                        closeOnDragDown={true}
                        closeOnPressMask={false}
                        customStyles={{
                            wrapper: {
                                backgroundColor: "transparent"
                            },
                            draggableIcon: {
                                backgroundColor: "#000"
                            }
                        }} >
                        <View style={{ flexDirection: 'row', justifyContent: "space-around" }}>
                            <TouchableOpacity onPress={takePhotoFromCamera}
                                style={styles.button} >
                                <Icon name="camera" size={20} color="#fff" /><Text style={{ color: '#fff', fontSize: 15, fontWeight: "bold" }}>Camera</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={takePhotoFromGallery}
                                style={styles.button}  >
                                <Icon name="upload" size={20} color="#fff" /><Text style={{ color: '#fff', fontSize: 15, fontWeight: "bold" }}> Upload </Text>
                            </TouchableOpacity>
                        </View>
                    </RBSheet>

                </View>

            </View>
        </>
    );
}


export default Images;


const styles = StyleSheet.create({
    setting: {
        flex: 1,
        flexDirection: "column",
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center'
    },
    button: {
        alignItems: "center",
        backgroundColor: "#049abf",
        padding: 25,
        margin: 20,
        borderRadius: 60,
        marginTop: 40,
    },
    image: {
        height: 300,
        width: 300,
        flex:1,
        justifyContent: "center",
        alignItems: 'center',
        margin: 30,
        resizeMode: "contain",
    },
    buttonUpload: {
        alignItems: "center",
        backgroundColor: "#049abf",
        padding: 18,
        margin: 5,
        borderRadius: 10,
    },
});