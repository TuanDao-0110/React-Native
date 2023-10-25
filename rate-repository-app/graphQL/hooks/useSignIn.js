import { useApolloClient, useMutation } from '@apollo/client';
import { SIGN_IN } from '../mutation';

import useAuthStorage from '../../context/authStorageContextHook';
import { useState } from 'react';

const useSignIn = () => {
    const [loginSuccess, setLoginSuccess] = useState(false)
    const [authStorage,login,setLogin] = useAuthStorage()

    const [signIn, { data, loading, error, called }] = useMutation(SIGN_IN);
    return [signIn, data, loading, error, authStorage, useApolloClient().resetStore, called, loginSuccess, setLoginSuccess, login, setLogin];
};

export default useSignIn