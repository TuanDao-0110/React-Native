import { View, StyleSheet, Text } from 'react-native';
import Constants from 'expo-constants';


const styles = StyleSheet.create({
    container: {
        alignContent : 'center ',
        backgroundColor: '#24292e',
        justifyContent:'center',
    },
    header1: {
        alignContent: 'center',
        alignItems:'center',
        color: '#fff',
        fontSize: 20,
        justifyContent: 'center',
        paddingBottom : Constants.statusBarHeight -30,
        paddingLeft: 20,

    }
});

const AppBar = () => {
    return <View style={styles.container}>
        <Text style={styles.header1}>Respositories</Text>
    </View>;
};

export default AppBar;