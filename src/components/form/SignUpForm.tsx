import React from 'react';
import {Controller, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {Text, View} from "react-native";
import InputText from "@/components/form/ui/InputText";
import * as yup from "yup";
import {UserSignUpRequest} from "@/interfaces/user/AuthState";
import ButtonPrimary from "@/components/form/ui/ButtonPrimary";
import {signUp} from "@/styles/sreens/auth/signUp";
import {inputText} from "@/styles/components/form/ui/inputText";
import InputPhone from "@/components/form/ui/InputPhone";

interface SignUpFromProps {
    onSignUpSubmit: (userSignUpRequest: UserSignUpRequest) => void
}

const SignUpForm = ({onSignUpSubmit}: SignUpFromProps) => {
    const schema = yup.object().shape({
        phone: yup.string().required('Phone is required'),
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
                    name="name"
                    render={({field: {onChange, onBlur}}) => (
                        <InputText label={'Your name'}
                                   type={'text'}
                                   error={errors.name}
                                   onBlur={onBlur}
                                   onChange={onChange}/>
                    )}
                />
                <Controller
                    control={control}
                    name="phone"
                    render={({field: {onChange}}) => (
                        <InputPhone label={"Your Phone"} error={errors.phone} onChange={onChange}/>
                    )}
                />

                <Controller
                    control={control}
                    name="password"
                    render={({field: {onChange, onBlur}}) => (
                        <InputText label={'Password'}
                                   type={'password'}
                                   error={errors.password}
                                   onBlur={onBlur}
                                   onChange={onChange}/>
                    )}
                />

                <Controller
                    control={control}
                    name="confirmPassword"
                    render={({field: {onChange, onBlur}}) => (
                        <InputText label={'Confirm Password'}
                                   type={'password'}
                                   error={errors.confirmPassword}
                                   onBlur={onBlur}
                                   onChange={onChange}/>
                    )}
                />
            </View>
            <View>
                <ButtonPrimary text='Sign up withn phone'
                               onPress={handleSubmit(onSubmit)}/>
            </View>

        </View>
    );
};


export default SignUpForm;