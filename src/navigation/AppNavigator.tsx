import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import SignIn from "@/screens/auth/SignIn";
import SignUp from "@/screens/auth/SignUp";
import Start from "@/screens/Start";
import ForgotPassword from "@/screens/auth/ForgotPassword";
import VerifyAccount from "@/screens/auth/VerifyAccount";
import { routes } from '@/constants/AppConstants';

const Stack = createStackNavigator();

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