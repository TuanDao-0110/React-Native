import { View, StyleSheet, Text, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { useNavigate } from 'react-router-native';
import { singin } from '../utils/router';


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#24292e',
        justifyContent: 'flex-start',
        flexDirection: 'row'
    },
    header1: {
        alignContent: 'center',
        alignItems: 'center',
        color: '#fff',
        fontSize: 20,
        justifyContent: 'center',
        paddingBottom: Constants.statusBarHeight - 30,
        paddingLeft: 20,

    }
});

const AppBar = () => {
    const navigate = useNavigate()

    return <View style={styles.container}>
        <ScrollView horizontal>
            <Text onPress={() => { navigate('/') }} style={styles.header1}>Respositories</Text>
            <Text onPress={() => { navigate(`/${singin}`) }} style={styles.header1}>Sign in</Text>
        </ScrollView>
    </View>;
};

export default AppBar;