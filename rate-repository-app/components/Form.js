/* eslint-disable no-unused-vars */
/* eslint-disable no-dupe-keys */
/* eslint-disable react-native/no-unused-styles */
import React from 'react';
import { StyleSheet, TextInput, View, Switch, Text, Platform } from 'react-native';
import { Formik } from 'formik';
import Button from './Button';
import { useState } from 'react';
import * as yup from 'yup';
const loginValidationSchema = yup.object().shape({
    email: yup
        .string()
        .email('Please enter valid email')
        .required('Email Address is Required'),
    password: yup
        .string()
        .min(8, ({ min }) => `Password must be at least ${min} characters`)
        .required('Password is required'),
})


const MyReactNativeForm = props => {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const styles = StyleSheet.create({
        loginContainer: {
            width: '100%',
            height: '100%',
            alignItems: 'center',
            backgroundColor: Platform.OS === 'ios' ? 'white' : 'blue',
            padding: 10,
            paddingTop: 100,
            // elevation: 10,
        },
        textInput: {
            height: 40,
            width: '80%',
            margin: 10,
            backgroundColor: 'white',
            borderColor: 'gray',
            borderWidth: StyleSheet.hairlineWidth,
            borderRadius: 10,
        },
        toggle: {
            marginTop: 5
        }, errors:
            { fontSize: 10, color: 'red',paddingBottom : 10 }

    })
    return <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={values => console.log(values)}

        validationSchema={loginValidationSchema}
    >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
            <View
                style={styles.loginContainer}
            >
                <TextInput
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    style={styles.textInput}
                    keyboardType='email-address'
                    placeholder='Email Address'
                />
                {errors.email &&
                    <Text style={styles.errors}>{errors.email}</Text>
                }
                <TextInput
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    secureTextEntry={!isEnabled}
                    style={styles.textInput}
                    placeholder='Password'
                />
                {errors.password &&
                    <Text style={styles.errors}>{errors.password}</Text>
                }
                <Button content={'Submit'} onPress={handleSubmit} />
                <Switch
                    trackColor={{ false: '#767577', true: '#81b0ff' }}
                    thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                    ios_backgroundColor='#3e3e3e'
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                    style={styles.toggle}
                />
                <Text>show the password </Text>
            </View>
        )}
    </Formik>
}

export default MyReactNativeForm