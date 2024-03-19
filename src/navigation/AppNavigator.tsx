import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import { routes } from '@/constants/AppConstants';

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Profile">
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