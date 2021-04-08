import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import SplashScreen from '../screens/SplashScreen/SplashScreen'
import TabViewExample from './TabNavigation';
import SignUp from '../screens/Authentication/SignUp';
import SignIn from '../screens/Authentication/SignIn';
import ForgetPwd from '../screens/Authentication/ForgetPwd'


//Stack Navigation

const Stack = createStackNavigator();

function StackNavigation() {

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="SplashScreen" component={SplashScreen} />
                <Stack.Screen name="TabViewExample" component={TabViewExample} />
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="SignIn" component={SignIn} />
                <Stack.Screen name="ForgetPwd" component={ForgetPwd} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}


export default StackNavigation;

