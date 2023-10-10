import Constants from 'expo-constants';
import { StyleSheet, View } from 'react-native';
import PressableText from './PressableText';
import RepositoryList from './RepositoryList';
import Text from '../theme/Text';
import FlexboxExample from './FlexBoxExample';



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
            <PressableText />
            <RepositoryList />
            <FlexboxExample/>
        </View>

    );
};

export default Main;