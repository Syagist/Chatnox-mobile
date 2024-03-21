import React from 'react';
import {authRoutes} from "@/constants/Routes";
import {createStackNavigator} from "@react-navigation/stack";

const Stack = createStackNavigator();

const GuestRoutes = () => (
    <Stack.Navigator initialRouteName="Start">
        {authRoutes.map((route) => (
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
);

export default GuestRoutes;