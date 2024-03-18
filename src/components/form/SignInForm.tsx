import React from 'react';
import {Controller, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {View} from "react-native";
import InputText from "@/components/form/ui/InputText";
import * as yup from "yup";
import {UserSignInRequest} from "@/interfaces/user/AuthState";
import ButtonPrimary from "@/components/form/ui/ButtonPrimary";
import ButtonTransparent from "@/components/form/ui/ButtonTransparent";
import {signIn} from "@/styles/sreens/auth/signIn";
import {useNavigation} from "@react-navigation/native";
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "@/interfaces/RootStackParamList";

interface SignInFromProps {
    onSignInSubmit: (userSignInRequest: UserSignInRequest) => void
}

const SignInForm = ({onSignInSubmit}: SignInFromProps) => {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    const schema = yup.object().shape({
        phone: yup.string()
            .matches(/^[0-9]{10}$/, 'Phone number must be exactly 10 digits')
            .required('Phone is required'),
        password: yup.string().required('Password is required'),
    });

    const {control, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data: UserSignInRequest) => {
        onSignInSubmit(data)
    };

    const openForgotPasswordPage = () => {
        navigation.navigate('ForgotPassword');
    };

    return (
        <View style={signIn.sign_in_form}>
            <View>
                <Controller
                    control={control}
                    name="phone"
                    render={({field: {onChange, onBlur, value}}) => (
                        <InputText label={'Your phone'}
                                   type={'phone'}
                                   error={errors.phone}
                                   onBlur={onBlur}
                                   onChange={onChange}/>
                    )}
                />

                <Controller
                    control={control}
                    render={({field: {onChange, onBlur, value}}) => (
                        <InputText label={'Password'}
                                   type={'password'}
                                   error={errors.password}
                                   onBlur={onBlur}
                                   onChange={onChange}/>
                    )}
                    name="password"
                    defaultValue=""
                />
            </View>
            <View>
                <ButtonPrimary text='Sign up withn phone'
                               onPress={handleSubmit(onSubmit)}/>
                <ButtonTransparent text='Forgot password?'
                                   onPress={openForgotPasswordPage}/>
            </View>

        </View>
    );
};


export default SignInForm;