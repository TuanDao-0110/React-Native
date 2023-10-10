import { View, StyleSheet, Text } from 'react-native';


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#24292e',
    },
    header1: {
        alignContent:'center',
        color: '#fff',
        fontSize: 40,
        justifyContent: 'center',
        paddingLeft: 20,

    }
});

const AppBar = () => {
    return <View style={styles.container}>
        <Text style={styles.header1}>Respositories</Text>
    </View>;
};

export default AppBar;