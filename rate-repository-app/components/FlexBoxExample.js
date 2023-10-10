import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    flexContainer: {
        display: 'flex',
    },
    flexItemA: {
        backgroundColor: 'green',
        flexGrow: 0,
    },
    flexItemB: {
        backgroundColor: 'blue',
        flexGrow: 1,
    },
});

const FlexboxExample = () => {
    return (
        <View style={styles.flexContainer}>
            <View style={styles.flexItemA}>
                <Text>Flex item A</Text>
            </View>
            <View style={styles.flexItemB}>
                <Text>Flex item B</Text>
            </View>
        </View>
    );
};


export default FlexboxExample