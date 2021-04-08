import React from 'react';
import { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { extra } from './NotificationConfig'


function Notification(props) {


//firebase notification auth
    const FirebaseNotificationAuth = () => {
        extra.configure();
        extra.buatChannel("1");
        extra.kirimNotifikasi("1", "Hello This is Mubeen,", "Its an test notification...");
    }



    return (
        <>
            <Text style={{ color: '#000', fontSize: 25, marginTop: 20, alignSelf: 'center', textAlign: 'center' }}>Click Button for instant Notification</Text>
            <View style={styles.setting}>
                <View style={styles.button}>
                    <TouchableOpacity onPress={FirebaseNotificationAuth}
                        style={styles.Notibutton}
                    >
                        <Text style={{ color: 'white', fontSize: 20 }}>Notification 🔔</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );
}


export default Notification;


const styles = StyleSheet.create({
    setting: {
        flex: 1,
        // flexDirection: "column",
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center'
    },
    button: {
        alignItems: "center",
        padding: 25,
        margin: 20,
        borderRadius: 60,
        marginTop: 40,
    },
    Notibutton: {
        alignItems: "center",
        backgroundColor: "red",
        padding: 28,
        borderRadius: 20,
    },
});