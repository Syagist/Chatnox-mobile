import React, {useEffect} from 'react';
import {COLOR_DARKER_GREY, COLOR_PRIMARY} from "@/constants/Colors";
import {bottomNavigator} from "@/styles/appNavigator";
import MessageIcon from "@/components/icons/MessageIcon";
import PhoneIcon from "@/components/icons/PhoneIcon";
import ContactsIcon from "@/components/icons/ContactsIcon";
import SettingsIcon from "@/components/icons/SettingsIcon";

import {Text} from "react-native";
import Calls from "@/screens/Calls";
import Contacts from "@/screens/Contacts";
import Settings from "@/screens/Settings";
import {routes} from "@/constants/Routes";
import {createStackNavigator} from "@react-navigation/stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {useRoute} from "@react-navigation/native";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const UserRoutes = () => {

    const MainStack = () => (
        <Stack.Navigator>
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
    );

    return (
        <Tab.Navigator screenOptions={({route}) => ({
            tabBarActiveTintColor: COLOR_PRIMARY,
            tabBarInactiveTintColor: COLOR_DARKER_GREY,
            tabBarStyle: {...bottomNavigator.navigator_item},
            tabBarIconStyle: {...bottomNavigator.navigator_icon},
            tabBarIcon: ({color}) => {
                switch (route.name) {
                    case 'Messages':
                        return <MessageIcon color={color}/>
                    case 'Calls':
                        return <PhoneIcon color={color}/>
                    case 'Contacts':
                        return <ContactsIcon color={color}/>
                    case 'Settings':
                        return <SettingsIcon color={color}/>
                }
            },
            tabBarLabel: ({color}) => {
                return <Text
                    style={{
                        color: color,
                        ...bottomNavigator.navigator_text
                    }}>{route.name}</Text>
            }
        })}>
            <Tab.Screen
                name="Messages"
                component={MainStack}
                options={{header: () => null}}
            />
            <Tab.Screen
                name="Calls"
                component={Calls}
                options={{header: () => null}}
            />
            <Tab.Screen
                name="Contacts"
                component={Contacts}
                options={{header: () => null}}
            />
            <Tab.Screen
                name="Settings"
                component={Settings}
                options={{header: () => null}}
            />
        </Tab.Navigator>
    );

}


export default UserRoutes;