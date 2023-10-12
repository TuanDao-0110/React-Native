/* eslint-disable no-unused-vars */
/* eslint-disable no-dupe-keys */
/* eslint-disable react-native/no-unused-styles */
import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { Formik } from 'formik';
import Button from './Button';

const MyReactNativeForm = props => {
    const styles = StyleSheet.create({
        loginContainer: {
            width: '100%',
            height: '100%',
            alignItems: 'center',
            backgroundColor: 'white',
            padding: 10,
            paddingTop: 100,
            // elevation: 10,
            backgroundColor: '#e6e6e6',
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
    })
    return <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={values => console.log(values)}
    >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
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

                <TextInput
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    secureTextEntry
                    style={styles.textInput}
                    placeholder='Password'
                />
                <Button content={'Submit'} onPress={handleSubmit} />
            </View>
        )}
    </Formik>
}

export default MyReactNativeForm