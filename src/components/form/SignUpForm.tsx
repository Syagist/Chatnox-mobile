import React from 'react';
import {Controller, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {View} from "react-native";
import InputText from "@/components/form/ui/InputText";
import * as yup from "yup";
import {UserSignUpRequest} from "@/interfaces/user/AuthState";
import ButtonPrimary from "@/components/form/ui/ButtonPrimary";
import ButtonTransparent from "@/components/form/ui/ButtonTransparent";
import {signUp} from "@/styles/sreens/auth/signUp";

interface SignUpFromProps {
    onSignUpSubmit: (userSignUpRequest: UserSignUpRequest) => void
}

const SignUpForm = ({onSignUpSubmit}: SignUpFromProps) => {
    const schema = yup.object().shape({
        email: yup.string().email('Invalid email').required('Email is required'),
        name: yup.string().required('Name is required'),
        password: yup.string().required('Password is required'),
        confirmPassword: yup.string().required('Confirm Password is required'),
    });

    const {control, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data: UserSignUpRequest) => {
        onSignUpSubmit(data)
    };

    return (
        <View style={signUp.sign_up_form}>
            <View>
                <Controller
                    control={control}
                    render={({field: {onChange, onBlur}}) => (
                        <InputText label={'Your name'}
                                   type={'text'}
                                   error={errors.name}
                                   onBlur={onBlur}
                                   onChange={onChange}/>
                    )}
                    name="name"
                />
                <Controller
                    control={control}
                    render={({field: {onChange, onBlur}}) => (
                        <InputText label={'Your email'}
                                   type={'email'}
                                   error={errors.email}
                                   onBlur={onBlur}
                                   onChange={onChange}/>
                    )}
                    name="email"
                />


                <Controller
                    control={control}
                    render={({field: {onChange, onBlur}}) => (
                        <InputText label={'Password'}
                                   type={'password'}
                                   error={errors.password}
                                   onBlur={onBlur}
                                   onChange={onChange}/>
                    )}
                    name="password"
                />

                <Controller
                    control={control}
                    render={({field: {onChange, onBlur}}) => (
                        <InputText label={'Confirm Password'}
                                   type={'password'}
                                   error={errors.confirmPassword}
                                   onBlur={onBlur}
                                   onChange={onChange}/>
                    )}
                    name="confirmPassword"
                />
            </View>
            <View>
                <ButtonPrimary text='Sign up withn mail'
                               onPress={handleSubmit(onSubmit)}/>
            </View>

        </View>
    );
};


export default SignUpForm;