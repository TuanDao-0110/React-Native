import { View, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import Main from './components/Main';
// import Constants from 'expo-constants';


export default function App() {
  return (
    <SafeAreaView style={styles.container} >
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <Main key={'main'} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#24292e',
    // flex: 0,
    // paddingTop: Constants.statusBarHeight,
  },
});





