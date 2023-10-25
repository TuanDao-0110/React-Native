import { useApolloClient, useMutation } from '@apollo/client';


import useAuthStorage from '../../context/authStorageContextHook';
import { useState } from 'react';
import { SIGN_UP } from '../mutation';

const useSignUp = () => {
    const [loginSuccess, setLoginSuccess] = useState(false)
    const [authStorage, login, setLogin] = useAuthStorage()

    const [signUp, { data, loading, error, called }] = useMutation(SIGN_UP);
    return [signUp, data, loading, error, authStorage, useApolloClient().resetStore, called, loginSuccess, setLoginSuccess, login, setLogin];
};

export default useSignUp