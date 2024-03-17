import React, {useEffect, useState} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {globalStyles} from '@/styles/globalStyles';
import {RootState, useAppDispatch, useAppSelector} from "@/store/store";
import {home} from "@/styles/sreens/home";
import {useNavigation} from "@react-navigation/native";
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "@/interfaces/RootStackParamList";
import {useLoader} from "@/context/LoaderProvider";


const Home = () => {
    const dispatch = useAppDispatch();
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    const {showLoader, hideLoader} = useLoader();

    return (
        <ScrollView contentContainerStyle={globalStyles.scrollViewContainer}>
            <View style={globalStyles.container}>

            </View>
        </ScrollView>
    );
};

export default Home;