import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Picker, ScrollView, Alert } from 'react-native';
import { useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';



function Calculator(props) {


    //States for num1, num2, result, and sign
    const [num1, setNum1] = useState('')
    const [num2, setNum2] = useState('')
    const [sign, setSign] = useState('+')
    const [result, setResult] = useState('')

    //Function for result 
    function Calculate() {
        if (num1 == "" || num2 == "" || sign == "") {
            alert("Fill all Feilds...")
        } else {
            setResult(eval(num1 + sign + num2))
        }
    }

    return (
        <>
            <View style={styles.setting}>
                <Text style={{ color: '#000', fontSize: 25, marginTop: 20, alignSelf: 'center' }}>Calculator</Text>
                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                    <TextInput
                        placeholder="Number 1"
                        placeholderTextColor="black"
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={setNum1}
                        keyboardType="number-pad"
                    />
                     <TextInput
                        placeholderTextColor="black"
                        style={styles.textInput}
                        autoCapitalize="none"
                        keyboardType="number-pad"
                        defaultValue={sign}
                        editable={false}
                    />
                    <TextInput
                        placeholder="Number 2"
                        placeholderTextColor="black"
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={setNum2}
                        keyboardType="number-pad"
                    />
                </View>
                    <DropDownPicker dropDownStyle={{ backgroundColor: '#fafafa', marginTop: 5 }} labelStyle={{ fontSize: 15, color: '#000' }} activeLabelStyle={{ color: 'red' }}
                        items={[
                            { label: 'Addition ( + )', value: '+' },
                            { label: 'Subtraction ( - )', value: '-' },
                            { label: 'Multiplication ( * )', value: '*' },
                        ]}
                        defaultIndex={0} placeholder='+'
                        containerStyle={{ height: 40,marginLeft:20,marginRight:20 }}
                        onChangeItem={item => setSign(item.value)}
                    />
                {result ? <View style={styles.todoitem}>
                    <View style={{ paddingLeft: 20 }}>
                        <Text style={{ color: '#000', fontSize: 30, alignSelf: 'center' }}>{num1 + " " + sign + " " + + num2 + " " + " = "}{result ? result : ' --'}</Text>
                    </View>
                </View> : null}
                <TouchableOpacity onPress={() => Calculate()}
                    style={styles.button}
                >
                    <Text style={{ color: 'white', fontWeight: 'bold', letterSpacing: 2 }}>Calculate</Text>
                </TouchableOpacity>
            </View>
        </>
    );
}


export default Calculator;


const styles = StyleSheet.create({
    container: {
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
        borderBottomWidth: 1,
        paddingLeft: 10,
        margin: 15,
        borderRadius: 5,
        marginTop: 0,
        flex: 1,
        textAlign:"center"
    },
    button: {
        alignItems: "center",
        backgroundColor: "#049abf",
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
        textAlign: 'center',
        letterSpacing: 2
    }, todoitem: {
        flexDirection: 'row',
        backgroundColor: '#c4c4c4',
        paddingTop: 10,
        paddingBottom: 20,
        margin: 10,
        borderRadius: 10,

    }
});