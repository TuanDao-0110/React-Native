import Constants from 'expo-constants';
import { StyleSheet, View } from 'react-native';
import RepositoryList from './RepositoryList';
import AppBar from './NavBar';

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'blue',
        flexGrow: 1,
        flexShrink: 1,
        marginTop: Constants.statusBarHeight,
    },

});
const Main = () => {
    return (
        <View style={styles.container}>
            <AppBar />
            <RepositoryList />
        </View>

    );
};

export default Main;