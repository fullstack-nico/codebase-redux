import React, {Component} from 'react';
import {
    TextInput,
    Text,
    TouchableNativeFeedback,
    View,
    StyleSheet,
} from 'react-native';

import * as yup from 'yup';

import { useSelector, useDispatch } from 'react-redux'

import {
    username,
    password,
    incrementAsync,
} from './formSlice'

export default function FormValidation() {

    // Redux hooks
    const id = useSelector((state) => state.formLogin.username)
    const pass = useSelector((state) => state.formLogin.password)
    const errorUsername = useSelector((state) => state.formLogin.errorUsername)
    /*const errorPassword = useSelector((state) => state.formLogin.errorPassword)*/
    const dispatch = useDispatch()





    const validate = () => {

        // Yup validation
        let schema = yup.object().shape({
            username: yup.string().required(),
            password: yup.number().required().positive().integer().typeError("uwu :V"),
        });

        schema
            .validate({
                password: pass,
            })
        /*    .then(function (valid) {
                alert(valid);
            })*/
            .catch(function (err) {
                console.log(err);
        });

    }



    return (
        <View>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>

                <Text>username: {id}</Text>
                <TextInput
                    style={{ borderWidth:1, width: 300}}
                    value={id}
                    onChangeText={(text)=> dispatch(incrementAsync({text:text}))}
                />
                <Text>{errorUsername}</Text>

                <Text>password: {pass}</Text>
                <TextInput
                    style={{ borderWidth:1, width: 300}}
                    value={pass}
                    onChangeText={(text)=> dispatch(password(text))}
                />
                {/*<Text>{errorPassword}</Text>*/}
                <TouchableNativeFeedback
                    onPress={()=>validate()}>
                    <View style={styles.button}>
                        <Text>Reset</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    button:{
        height: 50,
        backgroundColor: 'red',
        width: 300,
        margin:10,
    }
});
