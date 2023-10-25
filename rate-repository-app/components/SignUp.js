import { Alert, Platform, StyleSheet, View } from 'react-native'
import SignUpForm from './SignUpForm'
import useSignUp from '../graphQL/hooks/useSignUp'
import useSignIn from '../graphQL/hooks/useSignIn'
import { useEffect } from 'react'
import { useLazyQuery } from '@apollo/client'
import { ME } from '../graphQL/queries'
import { useNavigate } from 'react-router-native'

const SignUp = () => {
    const styles = StyleSheet.create({
        container: {
            width: '100%',
            height: '100%',
            alignItems: 'center',
            backgroundColor: Platform.OS === 'ios' ? 'white' : 'blue',
            padding: 10,
            paddingTop: 100,
        },
    })
    const navigate = useNavigate()
    const [signUp] = useSignUp()
    const [signIn, data, loading, , authStorage, resetStore, , , setLoginSuccess, , setLogin] = useSignIn()
    const [getMe, { data: dataMe, loading: loadingMe }] = useLazyQuery(ME, {
        fetchPolicy: 'cache-and-network'
    })
    const onSubmit = async (value) => {
        const { password, passwordConfirm } = value
        if (password !== passwordConfirm) {
            Alert.alert('Password Confirm not match')
            throw new Error('Password Confirm not match')
        }
        try {
            await signUp({ variables: { user: { password, username: value.username } } })
            await signIn({ variables: { credentials: { username: value.username, password } } })
            setLogin(true)
            Alert.alert('success')
            navigate('/')
            return
        } catch (error) {
            Alert.alert(error.message)
            throw error
        }
    }
    // 1. set up if user already logged in
    useEffect(() => {
        onGetMe()
    }, [])
    // 2. set up to get user credentials
    useEffect(() => {
        if (!loadingMe) {
            dataMe && setLoginSuccess(true)
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
    return <View style={styles.container}>
        <SignUpForm onSubmit={onSubmit} />
    </View>
}


export default SignUp