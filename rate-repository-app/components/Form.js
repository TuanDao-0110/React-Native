/* eslint-disable no-dupe-keys */
import React from 'react';
import { StyleSheet, View,  Platform, Alert } from 'react-native';
import { useState } from 'react';
import useSignIn from '../graphQL/hooks/useSignIn';
import { useLazyQuery,  } from '@apollo/client';
import { ME } from '../graphQL/queries';
import { useEffect } from 'react';
import Logout from './GetMe';
import LogInForm from './LoginForm';



const MyReactNativeForm = () => {
    const [signIn, data, loading, , authStorage, resetStore] = useSignIn()
    const [getMe, { data: dataMe, loading: loadingMe }] = useLazyQuery(ME, {
        fetchPolicy: 'cache-and-network'
    })
    const [userInfo, setUserInfo] = useState(null)
    const styles = StyleSheet.create({
        loginContainer: {
            width: '100%',
            height: '100%',
            alignItems: 'center',
            backgroundColor: Platform.OS === 'ios' ? 'white' : 'blue',
            padding: 10,
            paddingTop: 100,
        },
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
        setUserInfo(null)
        await authStorage.deleteToken()
        resetStore()
        Alert.alert('logout successful')
    }

    return <View
        style={styles.loginContainer}
    >
        {!userInfo ?
            <LogInForm onSubmit={onSubmit}/>
            :
            <Logout onGetMe={onGetMe} onLogout={onLogout} userInfo={userInfo} key={'logout'} />}
    </View>
}

export default MyReactNativeForm


