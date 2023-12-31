import { View, StyleSheet, Text, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { useNavigate } from 'react-router-native';
import { myView, review, signup, singin } from '../utils/router';
import useAuthStorage from '../context/authStorageContextHook';

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
    const [, login] = useAuthStorage()
    return <View style={styles.container}>
        <ScrollView horizontal>
            <Text onPress={() => { navigate('/') }} style={styles.header1}>Respositories</Text>
            <Text onPress={() => { navigate(`/${singin}`) }} style={styles.header1}>{!login ? singin : 'Log Out'}</Text>
            {
                login && <Text onPress={() => { navigate(`/${review}`) }} style={styles.header1}>{review}</Text>
            }
            <Text onPress={() => { navigate(`/${signup}`) }} style={styles.header1}>{!login && signup}</Text>
            <Text onPress={() => { navigate(`/${myView}`) }} style={styles.header1}>{login && myView}</Text>
        </ScrollView>
    </View>;
};

export default AppBar;