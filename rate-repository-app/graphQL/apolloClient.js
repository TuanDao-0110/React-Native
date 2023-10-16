import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Constants from 'expo-constants';
import { Token } from '../utils/localStore';


const httpLink = createHttpLink({
    uri: Constants.manifest.extra.url,
});


const authLink = setContext((_, { headers }) => {

    const temp = new Token()
    temp.getToken().then(e => {
        return {
            headers: {
                ...headers,
                authorization: `Bearer ${e}` 
            }
        }
    }
    ).catch (e => { 
        return {
            headers: {
                ...headers,
                // authorization: `Bearer ${e}`
            }
        }

    })

    // return {
    //     headers: {
    //         ...headers,
    //         authorization: token ? `Bearer ${token}` : '',
    //     }
    // }
});

const createApolloClient = () => {
    return new ApolloClient({
        link: authLink.concat(httpLink),
        cache: new InMemoryCache(),
    });
};

export default createApolloClient;




