import React from 'react';
import { useState } from 'react';
import { View, StyleSheet, Image, Text, ImageBackground, ScrollView, TextInput, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';


const TextTab = () => {

    //state for texfild onchange
    const [text, setText] = useState('')

    //state for rendring list/map 
    const [list, setList] = useState([])

//function for map
    function ListOfItem() {
        if (text == "") {
            alert("Enter some Text")
        } else {
            setList((prevVal) => {
                return [...prevVal, text]
            })
            setText('')
        }
    }

    return (
        <>
            <View style={styles.setting}>
                <ScrollView>
                    <Text style={{ color: '#000', fontSize: 25, marginTop: 20, alignSelf: 'center' }}>Your Awesome Todo</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <TextInput
                            placeholder="Enter a Text..."
                            placeholderTextColor="black"
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={setText}
                            value={text}
                        />
                        <TouchableOpacity onPress={() => ListOfItem()}
                            style={styles.button}
                        >
                            <Text style={{ color: '#fff' }}>Send</Text>
                        </TouchableOpacity>
                    </View>
                    {
                        list.map((val) => {
                            return (
                                <>
                                    <View style={styles.todoitem}>
                                        <View style={{ paddingLeft: 20 }}>
                                            <Text style={{ color: '#fff', letterSpacing: 1 }}>{val}</Text>
                                        </View>
                                    </View>
                                </>
                            )
                        })
                    }

                </ScrollView>
            </View>
        </>
    );
}


export default TextTab;


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
        margin: 5,
        borderRadius: 5,
        marginTop: 0,
        flex: 1,
        flexDirection: "row"
    },
    button: {
        alignItems: "center",
        backgroundColor: "#049abf",
        padding: 16,
        margin: 5,
        borderRadius: 10,
    },
    resetpwdtext: {
        fontSize: 20,
        alignSelf: 'center',
        paddingBottom: 50,
        textAlign: 'center',
        letterSpacing: 2
    },
    todoitem: {
        flexDirection: 'row',
        backgroundColor: '#51a0b0',
        paddingTop: 20,
        paddingBottom: 20,
        margin: 10,
        borderRadius: 10,
        letterSpacing: 2
    }
});