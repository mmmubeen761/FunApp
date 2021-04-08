import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ImageBackground, ScrollView } from 'react-native';
import { useState } from 'react';
import firebase from '@react-native-firebase/app'


function ForgetPwd(props) {

    // State for taking email 
    const [email, setEmail] = useState('')
    const [wait,setWait] = useState('Reset Password')

    //Firebase forget Password auth
    const FirebaseAuth = (email) => {
        setWait('Please wait...')
        firebase.auth().sendPasswordResetEmail(email)
            .then(function (user) {
                setWait('Reset Password')
                alert('Please check your email to reset password...')
            }).catch(function (e) {
                if (e) {
                    setWait('Reset Password')
                    alert('There is no user record corresponding to this identifier. The user may have been deleted.')
                }
            })
    }
    return (
        <>
            <View style={styles.setting}>
                <ImageBackground source={{ uri: "https://mobikul.com/wp-content/uploads/2018/02/gradient_1.png" }} style={styles.image}>
                    <View style={styles.midcont}>
                        <ScrollView>
                            <Image source={{ uri: "https://uilogos.co/img/logotype/hexa.png" }}
                                style={styles.splashscreenimage}
                            />
                            <Text style={styles.resetpwdtext}>Reset Password</Text>
                            <TextInput
                                placeholder="Email Address"
                                placeholderTextColor="black"
                                style={styles.textInput}
                                autoCapitalize="none"
                                onChangeText={setEmail}
                            />
                            <TouchableOpacity onPress={() => FirebaseAuth(email)}
                                style={styles.button}
                            >
                                <Text style={{ color: 'white', fontWeight:'bold' }}>{wait}</Text>
                            </TouchableOpacity>

                        </ScrollView>
                    </View>
                </ImageBackground>


            </View>
        </>
    );
}


export default ForgetPwd;


const styles = StyleSheet.create({
    container: {
        // height: '100%',
        flex: 1,
        alignSelf: 'center'
    }, image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    setting: {
        flex: 1,
        backgroundColor: '#fff'
    },
    textInput: {
        color: 'black',
        borderColor: 'black',
        borderWidth: 1,
        paddingLeft: 10,
        margin: 15,
        borderRadius: 5,
        marginTop: 0,
    },
    button: {
        alignItems: "center",
        backgroundColor: "#05a8a8",
        padding: 15,
        margin: 20,
        borderRadius: 5,
        marginTop: 40
    }, midcont: {
        flex: 1,
        marginTop: '20%',
        marginBottom: '0%',
        marginLeft: '0%',
        marginRight: '0%',
        backgroundColor: 'white',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        shadowColor: 'black',
        shadowRadius: 100,
        shadowOpacity: 1,
    }, splashscreenimage: {
        resizeMode: 'contain',
        flex: 1,
        width: '70%',
        height: 100,
        alignSelf: 'center',
        marginTop: 30,
        marginBottom: 30
    },
    resetpwdtext: {
        fontSize: 20,
        alignSelf: 'center',
        paddingBottom: 50,
        textAlign: 'center'
    }
});