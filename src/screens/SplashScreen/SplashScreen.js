import React from 'react';
import { View, StyleSheet, Image,ImageBackground , Button} from 'react-native';
// import TabViewExample from '../../navigation/TabNavigation';


function SplashScreen(props) {
    

    //After 3 secods the splashscreen will disaoera and redirect to Signup Screen
    setTimeout(() => {
    props.navigation.navigate('SignIn') 
     }, 3000);
   
   
   
    return (
        <>
        <ImageBackground source={{uri:"https://mobikul.com/wp-content/uploads/2018/02/gradient_1.png"}} style={styles.image}>

        <View style={styles.splashscreen}>
            <Image source={{uri:"https://uilogos.co/img/logotype/hexa.png"}}
            style={styles.splashscreenimage}
            />
        </View>
            </ImageBackground>
        </>
    );
}


export default SplashScreen;


const styles = StyleSheet.create({
    splashscreen: {
        flex: 1,
        height:'100%',
        width:'100%',
        // backgroundColor:'#7e95e0'
    },
    splashscreenimage:{
        resizeMode: 'contain',
        flex:1,
        width:'80%',
        alignSelf:'center'
        // height:50
    }, image: {
        // flex: 1,
        resizeMode: "contain",
        // justifyContent: "center",
        height: '100%'
    },
});