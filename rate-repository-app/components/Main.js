import Constants from 'expo-constants';
import { Text, StyleSheet, View } from 'react-native';
import PressableText from './PressableText';
import RepositoryList from './RepositoryList';

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'blue',
        flexGrow: 1,
        flexShrink: 1,
        marginTop: Constants.statusBarHeight,
    },
    text: {
        fontSize: 50
    }
});
const Main = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>rating</Text>
            <PressableText/>
            <RepositoryList />

        </View>
    );
};

export default Main;