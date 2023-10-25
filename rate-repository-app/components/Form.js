import React from 'react';
import { StyleSheet, View, Platform, Alert } from 'react-native';
import { useState } from 'react';
import { useLazyQuery, } from '@apollo/client';
import { ME } from '../graphQL/queries';
import { useEffect } from 'react';
import Logout from './GetMe';
import LogInForm from './LoginForm';
import useSignIn from '../graphQL/hooks/useSignIn';



const MyReactNativeForm = () => {
    const [signIn, data, loading, , authStorage, resetStore, , , setLoginSuccess, , setLogin] = useSignIn()

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
            setLogin(true)
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
            dataMe && setUserInfo(dataMe.me) && setLoginSuccess(true)
        }
    }, [loadingMe])
    // 3. set up if new user login and keep waiting
    useEffect(() => {
        if (!loading && data) {
            resetStore()
            setLoginSuccess(true)
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
                setLogin(true)
            }
        } catch (error) {
            console.log(error)
        }
    }
    const onLogout = async () => {
        await authStorage.deleteToken()
        setUserInfo(null)
        setLoginSuccess(false)
        resetStore()
        Alert.alert('logout successful')
        setLogin(false)
    }

    return <View
        style={styles.loginContainer}
    >
        {!userInfo ?
            <LogInForm onSubmit={onSubmit} />
            :
            <Logout onGetMe={onGetMe} onLogout={onLogout} userInfo={userInfo} key={'logout'} />
        }
    </View>
}

export default MyReactNativeForm


