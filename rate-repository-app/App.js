import { View, StyleSheet, StatusBar } from 'react-native';
import Main from './components/Main';
import Constants from 'expo-constants';
import { NativeRouter } from 'react-router-native';
import { ApolloProvider } from '@apollo/client'
import createApolloClient from './graphQL/apolloClient';
import { Token } from './utils/localStore';
import AuthStorageContext from './context/authStorageContext';
import { useState } from 'react';
import { PaperProvider } from 'react-native-paper';


export default function App() {
  const authStorage = new Token()
  const [login, setLogin] = useState(false)
  const apolloClient = createApolloClient(authStorage)
  return (
    <NativeRouter>
      <ApolloProvider client={apolloClient}>
        <AuthStorageContext.Provider value={[authStorage, login, setLogin]}>
          <PaperProvider>
            <View style={styles.container}>
              <Main key={'main'} />
            </View>
          </PaperProvider>
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





