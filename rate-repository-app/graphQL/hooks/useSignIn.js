import { useApolloClient, useMutation } from '@apollo/client';
import { SIGN_IN } from '../mutation';

import useAuthStorage from '../../context/authStorageContextHook';

const useSignIn = () => {
    const authStorage = useAuthStorage()
    const [signIn, { data, loading, error }] = useMutation(SIGN_IN);
    return [signIn, data, loading, error, authStorage, useApolloClient().resetStore];
};

export default useSignIn