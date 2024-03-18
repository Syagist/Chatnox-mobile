import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import SignIn from "@/screens/auth/SignIn";
import SignUp from "@/screens/auth/SignUp";
import Start from "@/screens/Start";
import ForgotPassword from "@/screens/auth/ForgotPassword";
import VerifyAccount from "@/screens/auth/VerifyAccount";


const Stack = createStackNavigator();

const routes = [
    {
        name: 'Start',
        component: Start
    },
    {
        name: 'SignIn',
        component: SignIn
    },
    {
        name: 'SignUp',
        component: SignUp
    },
    {
        name: 'ForgotPassword',
        component: ForgotPassword
    },
    {
        name: 'VerifyAccount',
        component: VerifyAccount
    }
]
const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Start">
                {routes.map((route) => (
                    <Stack.Screen
                        key={route.name}
                        name={route.name}
                        component={route.component}
                        options={{
                            header: () => null,
                        }}
                    />
                ))}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;