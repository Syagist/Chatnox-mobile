import React, {useEffect} from 'react';
import {Text} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import HomeIcon from "@/components/icons/HomeIcon";
import ProfileIcon from "@/components/icons/ProfileIcon";
import Profile from "@/screens/Profile";
import Home from "@/screens/Home";
import {createStackNavigator} from "@react-navigation/stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {globalStyles} from "@/styles/globalStyles";
import {COLOR_PRIMARY} from "@/constants/Colors";
import SignUp from "@/screens/SignUp";
import {loadUserData} from "@/store/slices/authSlice";
import {RootState, useAppDispatch, useAppSelector} from "@/store/store";


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AppNavigator = () => {

    const dispatch = useAppDispatch();
    const user = useAppSelector((state: RootState) => state.auth.userData);

    useEffect(() => {
        dispatch(loadUserData());
    }, [dispatch]);

    const MainStack = () => {
        return (
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="SignUp" component={SignUp}/>
            </Stack.Navigator>
        );
    };
    if (!user) {
        return <SignUp/>;
    }

    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({route}) => ({
                    tabBarActiveTintColor: COLOR_PRIMARY,
                    tabBarIcon: ({color}) => {
                        switch (route.name) {
                            case 'MainStack':
                                return <HomeIcon color={color}/>
                            case 'Profile':
                                return <ProfileIcon color={color}/>
                        }
                    },
                    tabBarLabel: ({color}) => {
                        return <Text
                            style={{
                                ...globalStyles.app_navigation_label,
                                color: color
                            }}
                        >{route.name === "MainStack" ? "Home" : route.name}</Text>
                    }
                })}>
                <Tab.Screen name="MainStack" component={MainStack}/>
                <Tab.Screen name="Profile"  component={Profile} />
            </Tab.Navigator>

        </NavigationContainer>
    );
};

export default AppNavigator;