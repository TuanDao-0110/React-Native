import { View, StyleSheet } from 'react-native';
import Main from './components/Main';
import Constants from 'expo-constants';


export default function App() {
  return (
    <View style={styles.container}>
      <Main key={'main'} />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#24292e',
    flexGrow: 1,
    paddingTop: Constants.statusBarHeight + 10,
  },
});





