import { View, StyleSheet, StatusBar } from 'react-native';
import Main from './components/Main';
import Constants from 'expo-constants';
import { NativeRouter } from 'react-router-native';


export default function App() {
  return (
    <>
      <NativeRouter>
        <View style={styles.container}>
          <Main key={'main'} />
        </View>
        <StatusBar />
      </NativeRouter>
    </>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#24292e',
    flexGrow: 1,
    paddingTop: Constants.statusBarHeight + 10,
  },
});





