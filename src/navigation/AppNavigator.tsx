import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import SignIn from "@/screens/auth/SignIn";
import SignUp from "@/screens/auth/SignUp";
import Start from "@/screens/Start";


const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Start">
                <Stack.Screen name="Start" component={Start} options={{
                    header: () => null,
                }}/>
                <Stack.Screen name="SignIn" component={SignIn} options={{
                    header: () => null,
                }}/>
                <Stack.Screen name="SignUp" component={SignUp} options={{
                    header: () => null,
                }}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;