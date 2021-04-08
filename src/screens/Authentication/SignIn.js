import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ImageBackground, ScrollView } from 'react-native';
import auth from '@react-native-firebase/auth';
import { useState } from 'react';




function SignIn(props) {
    
    
    // States for onchange on email, password and confirm password
    const [email, setEmail] = useState('')
    const [pwd, setPwd] = useState('')
    const [wait,setWait] = useState('SIGN IN')

    //Firebase email/password SignIn auth
    function FirebaseAuth() {
        if (email == '' || pwd == '') {
            alert('Please fill all input feilds!')
        } else {
            setWait('Please wait...')
            auth()
                .signInWithEmailAndPassword(email, pwd)
                .then(() => {
                    setWait('SIGN IN')
                    props.navigation.navigate('TabViewExample')
                })
                .catch(error => {
                    setWait('SIGN IN')
                    alert('Wrong Email Password!');
                });
        }
    }

    auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          props.navigation.navigate('TabViewExample')
        } else {
          // No user is signed in.
          props.navigation.navigate('SignIn')
        }
      });

    return (
        <>
            <View style={styles.setting}>
                <ImageBackground source={{ uri: "https://mobikul.com/wp-content/uploads/2018/02/gradient_1.png" }} style={styles.image}>
                    <View style={styles.midcont}>
                        <Image source={{ uri: "https://uilogos.co/img/logotype/hexa.png" }}
                            style={styles.splashscreenimage}
                        />
                        <ScrollView>
                            <Text style={styles.signuptext}>Sign In</Text>
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
                                <View style={{flexDirection:'row',alignItems:'stretch'}}>
                            <Text style={{ color: 'black', fontSize: 15, alignSelf: 'flex-start', paddingLeft: 15, textAlign: 'left',flex:1,alignContent:'flex-start'}} onPress={() => props.navigation.navigate('ForgetPwd')}>Reset password?
                            </Text>
                            <Text style={{ color: 'black', fontSize: 15, alignSelf: 'flex-end', paddingRight: 25, textAlign: 'right',flex:1,alignContent:'flex-end' }} onPress={() => props.navigation.navigate('SignUp')}>Sign Up
                            </Text>
                                </View>

                            <TouchableOpacity
                                onPress={() => FirebaseAuth()}
                                // onPress={() => props.navigation.navigate('TabViewExample')}
                                style={styles.button}
                            >
                                <Text style={{ color: 'white', fontWeight: 'bold' }}>{wait}</Text>
                            </TouchableOpacity>

                        </ScrollView>
                    </View>
                </ImageBackground>


            </View>
        </>
    );
}


export default SignIn;


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
        flex: 3,
        width: '90%',
        // height: 100,
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