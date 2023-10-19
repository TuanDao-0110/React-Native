/* eslint-disable no-unused-vars */
/* eslint-disable no-dupe-keys */
/* eslint-disable react-native/no-unused-styles */
import React from 'react';
import { StyleSheet, TextInput, View, Switch, Text, Platform, Alert } from 'react-native';
import { Formik, useField } from 'formik';
import Button from './Button';
import { useState } from 'react';
import * as yup from 'yup';
import useSignIn from '../graphQL/hooks/useSignIn';
import { useNavigate } from 'react-router-native';
import useMe from '../graphQL/hooks/useMe';
import { useLazyQuery, useQuery } from '@apollo/client';
import { ME } from '../graphQL/queries';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';
import { useEffect } from 'react';
const loginValidationSchema = yup.object().shape({
    email: yup
        .string()
        // .email('Please enter valid email')
        .required('Email Address is Required'),
    password: yup
        .string()
        .min(3, ({ min }) => `Password must be at least ${min} characters`)
        // .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
        .required('Password is required'),
})


const MyReactNativeForm = props => {
    const [signIn, data, loading, , authStorage, resetStore] = useSignIn()
    const [getMe, { data: dataMe, loading: loadingMe, called }] = useLazyQuery(ME, {
        fetchPolicy: 'cache-and-network'
    })
    const [userInfo, setUserInfo] = useState(null)
    const [isEnabled, setIsEnabled] = useState(false);
    const [user, setUser] = useState(null)
    const navigate = useNavigate()
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
            { fontSize: 10, color: 'red', paddingBottom: 10 }

    })
    const onSubmit = async (username, password) => {
        const credentials = { username, password }
        try {
            await signIn({ variables: { credentials } })
        } catch (error) {
            Alert.alert(error.message)
        }
    }
    // 1. set up if user already logged in
    useEffect(() => {
        onGetMe()
    }, [])
    // 2. set up to get user credentials
    useEffect(() => {
        if (!loadingMe) {
            dataMe && setUserInfo(dataMe.me)
        }
    }, [loadingMe])
    // 3. set up if new user login and keep waiting
    useEffect(() => {
        if (!loading && data) {
            resetStore()
            authStorage.setToken(data.authenticate.accessToken)
            onGetMe()
            Alert.alert('login successful')
        }
    }, [data])
    const onGetMe = async () => {
        try {
            const token = await authStorage.getToken()
            if (token) {
                await getMe()
            }
        } catch (error) {
            console.log(error)
        }
    }
    const onLogout = async () => {
        setUser(null)
        setUserInfo(null)
        await authStorage.deleteToken()
        resetStore()
        Alert.alert('logout successful')
    }

    return <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={values => onSubmit(values.email, values.password)}
        validationSchema={loginValidationSchema}
    >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
            <View
                style={styles.loginContainer}
            >
                {userInfo ?
                    <>
                        <Button content={'get me'} onPress={onGetMe} />
                        <Text>{userInfo && userInfo.id && userInfo.username}</Text>
                        <Button content={'Log out'} onPress={onLogout} />
                    </>
                    :
                    <>
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
                    </>}
            </View>
        )}
    </Formik>
}

export default MyReactNativeForm