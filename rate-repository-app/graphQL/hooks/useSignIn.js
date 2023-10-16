import { useMutation } from '@apollo/client';
import { SIGN_IN } from '../mutation';


const useSignIn = () => {
    const [signIn, { data, loading, error }] = useMutation(SIGN_IN);
    return [signIn, data, loading, error];
};


export default useSignIn