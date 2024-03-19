import React from 'react';
import {Image, ScrollView, View} from "react-native";
import {globalStyles} from "@/styles/globalStyles";
import {profile} from "@/styles/sreens/profile";
import {User} from "@/interfaces/user/AuthState";
import SearchWithButtonNav from "@/navigation/SearchWithButtonNav";
import RoundedButton from "@/components/form/ui/RoundedButton";

const user: User = {
    id: 1,
    name: 'Samvel',
    phone: '+37498942042',
    gender: 'male',
    image: 'https://picsum.photos/200/300',
    token: '',
    contacts: [
        {
            id: 2,
            name: 'Adil Adnan',
            phone: '+37498272721',
            gender: 'male',
            image: 'https://picsum.photos/200/300',
        },
        {
            id: 3,
            name: 'Bristy Haque',
            phone: '+37498272929',
            gender: 'male',
            image: 'https://picsum.photos/333/300',
        }
    ]
}


const Profile = () => {

    const navigateToSettingsPage = () => {

    };

    return (
        <ScrollView contentContainerStyle={globalStyles.scrollViewContainer}>
            <View style={{
                ...globalStyles.container,
                ...profile.container
            }}>
                <SearchWithButtonNav
                    text={'Home'}
                    button={
                        <RoundedButton
                            onPress={navigateToSettingsPage}
                            image={user.image}
                        />}
                />

            </View>
        </ScrollView>
    );
};

export default Profile;