import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import Main from './components/Main';



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
    backgroundColor: 'red',
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
});





