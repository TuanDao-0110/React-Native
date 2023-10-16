import { View, StyleSheet, StatusBar } from 'react-native';
import Main from './components/Main';
import Constants from 'expo-constants';
import { NativeRouter } from 'react-router-native';
import { ApolloProvider } from '@apollo/client'
import createApolloClient from './graphQL/apolloClient';



export default function App() {
  const apolloClient = createApolloClient()
  console.log('mainfest')
  console.log(
    Constants.manifest.extra.url
  )
  return (
    <NativeRouter>
      <ApolloProvider client={apolloClient}>
        <View style={styles.container}>
          <Main key={'main'} />
        </View>
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





