/* eslint-disable react-native/no-raw-text */
import * as React from 'react';
import { Button, Dialog, Portal } from 'react-native-paper';
import { highestRate, lastestRepo, lowestRate } from '../utils/router';
import { Platform, StyleSheet, View } from 'react-native';

const SelectDiago = ({ visible, setVisible, setSort }) => {
    const hideDialog = () => setVisible(false);
    const styles = StyleSheet.create({
        container: {
            backgroundColor: Platform.OS === 'ios' ? 'white' : 'blue',
            width: '100%',
            height: '100%'

        },
        diagoAction: {
            // backgroundColor: 'blue'
        },
        header: {
            backgroundColor: 'white'
        }
    })
    const setUpSort = (sortType) => {
        setSort(sortType)
        setVisible(false)
    }
    return (
        <Portal>
            <Dialog visible={visible} onDismiss={hideDialog} style={styles.header}>
                <Dialog.Actions style={styles.diagoAction}>
                    <View style={styles.container} >
                        <Button onPress={() => setUpSort(lastestRepo)}>{lastestRepo}</Button>
                        <Button
                            onPress={() => setUpSort(highestRate)}
                        >{highestRate}</Button>
                        <Button
                            onPress={() => setUpSort(lowestRate)}
                        >{lowestRate}</Button>
                    </View>
                </Dialog.Actions>
            </Dialog>
        </Portal>
    );
};

export default SelectDiago;