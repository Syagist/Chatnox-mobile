import React from 'react';
import {View} from "react-native";
import {globalStyles} from "@/styles/globalStyles";
import {profile} from "@/styles/sreens/profile";
import {User} from "@/interfaces/user/AuthState";

const user: User = {
    id: 1,
    name: 'Samvel',
    phone: '+37498942042',
    gender: 'male',
    image:'https://picsum.photos/200/300',
    token: '',
    contacts: [
         {
            id: 2,
            name: 'Adil Adnan',
            phone: '+37498272721',
            gender: 'male',
            image:'https://picsum.photos/200/300',
        },
        {
            id: 3,
            name: 'Bristy Haque',
            phone: '+37498272929',
            gender: 'male',
            image:'https://picsum.photos/333/300',
        }
    ]
}


const Profile = () => {

    return (
        <View style={globalStyles.container}>
            <View style={profile.profile_wrapper}>
                <View style={profile.profile_info_wrapper}>
                    {/*<Image source={user.image} style={profile.profile_image}/>*/}
                    {/*<View style={profile.profile_info}>*/}
                    {/*    <Text style={profile.profile_name}>{user.firstName} {user.lastName}</Text>*/}
                    {/*    <Text style={profile.profile_gender}>{user.gender}</Text>*/}
                    {/*</View>*/}
                </View>

            </View>
        </View>

    );
};

export default Profile;