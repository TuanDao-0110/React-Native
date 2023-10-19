import { View, StyleSheet, StatusBar } from 'react-native';
import Main from './components/Main';
import Constants from 'expo-constants';
import { NativeRouter } from 'react-router-native';
import { ApolloProvider } from '@apollo/client'
import createApolloClient from './graphQL/apolloClient';
import { Token } from './utils/localStore';
import AuthStorageContext from './context/authStorageContext';



export default function App() {
  const authStorage = new Token()
  const apolloClient = createApolloClient(authStorage)
  return (
    <NativeRouter>
      <ApolloProvider client={apolloClient}>
        <AuthStorageContext.Provider value={authStorage}>
          <View style={styles.container}>
            <Main key={'main'} />
          </View>
        </AuthStorageContext.Provider>
        <StatusBar />
      </ApolloProvider>
    </NativeRouter>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#24292e',
    flexGrow: 1,
    paddingTop: Constants.statusBarHeight + 10,
  },
});





