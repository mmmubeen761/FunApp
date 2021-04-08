import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ImageBackground, ScrollView } from 'react-native';
import auth from '@react-native-firebase/auth';
import { useState } from 'react';
import PassMeter from "react-native-passmeter";




function SignUp(props) {


    // States for onchange on email, password and confirm password
    const [email, setEmail] = useState('')
    const [pwd, setPwd] = useState('')
    const [cpwd, setcPwd] = useState('')

    //changing text when the signup operation performs
    const [wait, setWait] = useState('SIGN UP')


    //password validation
    const MAX_LEN = 10,
        MIN_LEN = 6,
        PASS_LABELS = ["Too Short", "Weak", "Normal", "Strong", "Secure"];


    //Firebase email/password Signup auth
    function FirebaseAuth() {
        if (email == '' || pwd == '') {
            alert('Please fill all input feilds!')
        } else if (pwd !== cpwd) {
            alert('Password Mismatch!')

        } else {
            setWait('Please wait...')
            auth()
                .createUserWithEmailAndPassword(email, pwd)
                .then(() => {
                    setWait('SIGN UP')
                    props.navigation.navigate('TabViewExample')
                })
                .catch(error => {
                    setWait('SIGN UP')
                    alert(error);
                });
        }
    }
    return (
        <>
            <View style={styles.setting}>
                <ImageBackground source={{ uri: "https://mobikul.com/wp-content/uploads/2018/02/gradient_1.png" }} style={styles.image}>
                    <View style={styles.midcont}>
                        <Image source={{ uri: "https://uilogos.co/img/logotype/hexa.png" }}
                            style={styles.splashscreenimage}
                        />
                        <ScrollView>
                            <Text style={styles.signuptext}>{wait}</Text>

                            <TextInput
                                placeholder="Email Address"
                                placeholderTextColor="black"
                                style={styles.textInput}
                                autoCapitalize="none"
                                onChangeText={setEmail}
                            />
                            <TextInput
                                placeholder="Password"
                                placeholderTextColor="black"
                                style={styles.textInput}
                                autoCapitalize="none"
                                onChangeText={setPwd}
                                secureTextEntry
                                maxLength={10}
                            />
                            {pwd.length == 0 ?
                                null
                                : <PassMeter
                                    showLabels
                                    password={pwd}
                                    maxLength={MAX_LEN}
                                    minLength={MIN_LEN}
                                    labels={PASS_LABELS}
                                />}
                            <TextInput
                                placeholder="Password"
                                placeholderTextColor="black"
                                style={styles.textInput}
                                autoCapitalize="none"
                                onChangeText={setcPwd}
                                secureTextEntry
                                maxLength={10}
                            />
                            <Text style={{ color: 'black', fontSize: 15, alignSelf: 'flex-start', paddingLeft: 15, textAlign: 'right', }} onPress={() => props.navigation.navigate('ForgetPwd')}>Reset password?
                            </Text>
                            <TouchableOpacity
                                onPress={() => FirebaseAuth()}
                                // onPress={() => props.navigation.navigate('TabViewExample')}
                                style={styles.button}
                            >
                                <Text style={{ color: 'white', fontWeight: 'bold' }}>SIGN UP</Text>
                            </TouchableOpacity>

                        </ScrollView>
                    </View>
                </ImageBackground>


            </View>
        </>
    );
}


export default SignUp;


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
    signuptext: {
        fontSize: 20,
        alignSelf: 'center',
        paddingBottom: 30,
        textAlign: 'center'
    },
});