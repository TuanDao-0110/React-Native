/* eslint-disable no-unused-vars */
import { Text, Pressable, Alert, StyleSheet } from 'react-native';

const PressableText = props => {
    return (
        <Pressable
            onPress={() => Alert.alert('You pressed the text!')}
        >
            <Text style={styles.text}>You can press me</Text>

        </Pressable>
    );
};



const styles = StyleSheet.create({
    text: {
        backgroundColor: 'white',
        color: 'black',
        padding:10
    }
})
export default PressableText