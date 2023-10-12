
import { Pressable, StyleSheet } from 'react-native'
import Text from '../theme/Text'

const Button = ({ content, onPress }) => {
    const styles = StyleSheet.create({
        button: {
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 12,
            borderRadius: 4,
            elevation: 4,
            backgroundColor: 'blue',
            width: '50%',
        },
        textButton: {
            fontSize: 16,
            lineHeight: 21,
            fontWeight: 'bold',
            letterSpacing: 0.25,
            color: 'white',
        },
    })


    return <Pressable style={styles.button}
    onPress={onPress}
    >
        <Text  style={styles.textButton} >
            {content}
        </Text>
    </Pressable>
}


export default Button