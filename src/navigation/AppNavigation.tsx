import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import UserRoutes from "@/navigation/routes/UserRoutes";
import GuestRoutes from "@/navigation/routes/GuestRoutes";

const AppNavigation = () => {
    const isAuth = false;

    return (
        <NavigationContainer>
            {isAuth ? (
                <GuestRoutes/>
            ) : (
                <UserRoutes/>
            )}
        </NavigationContainer>
    );
};

export default AppNavigation;
