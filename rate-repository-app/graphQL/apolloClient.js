/* eslint-disable no-unused-vars */
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Constants from 'expo-constants';
import { relayStylePagination } from '@apollo/client/utilities';

const httpLink = createHttpLink({
    uri: Constants.manifest.extra.url,
});
const cache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                // delay fetching
                repositories: relayStylePagination(),
            },
        },
        Repository: {
            fields: {
                reviews: relayStylePagination(),
            },
        },
    },
});
const createApolloClient = (authStorage) => {
    const authLink = setContext(async (_, { headers }) => {
        try {
            const accessToken = await authStorage.getToken();
            return {
                headers: {
                    ...headers,
                    authorization: accessToken ? `Bearer ${accessToken}` : '',
                },
            };
        } catch (e) {
            console.log(e);
            return {
                headers,
            };
        }
    });
    return new ApolloClient({
        link: authLink.concat(httpLink),
        cache
    });
};

export default createApolloClient;




