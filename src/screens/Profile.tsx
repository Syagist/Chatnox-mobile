import React from 'react';
import {ScrollView, View} from "react-native";
import {globalStyles} from "@/styles/globalStyles";
import {profile} from "@/styles/sreens/profile";

const Profile = () => {

    return (
        <ScrollView contentContainerStyle={globalStyles.scrollViewContainer}>
            <View style={{
                ...globalStyles.container,
                ...profile.container
            }}>


            </View>
        </ScrollView>
    );
};

export default Profile;