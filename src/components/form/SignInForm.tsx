import React from 'react';
import {Controller, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {View} from "react-native";
import InputText from "@/components/form/InputText";
import * as yup from "yup";
import {UserSignInRequest} from "@/interfaces/user/AuthState";
import ButtonPrimary from "@/components/form/ButtonPrimary";
import ButtonTransparent from "@/components/form/ButtonTransparent";
import {signIn} from "@/styles/sreens/auth/signIn";

interface SignInFromProps {
    onSignInSubmit: (userSignInRequest: UserSignInRequest) => void
}

const SignInForm = ({onSignInSubmit}: SignInFromProps) => {
    const schema = yup.object().shape({
        email: yup.string().email('Invalid email').required('Email is required'),
        password: yup.string().required('Password is required'),
    });

    const {control, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data: UserSignInRequest) => {
        onSignInSubmit(data)
    };

    return (
        <View style={signIn.sign_in_form}>
            <View>
                <Controller
                    control={control}
                    render={({field: {onChange, onBlur, value}}) => (
                        <InputText label={'Your email'}
                                   type={'email'}
                                   error={errors.email}
                                   onBlur={onBlur}
                                   onChange={onChange}/>
                    )}
                    name="email"
                    defaultValue=""
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
                <ButtonPrimary text='Sign up withn mail'
                               onPress={handleSubmit(onSubmit)}/>
                <ButtonTransparent text='Forgot password?'
                                   onPress={handleSubmit(onSubmit)}/>
            </View>

        </View>
    );
};


export default SignInForm;