/* eslint-disable react-native/no-raw-text */
import { StatusBar } from 'expo-status-bar'
import { Alert, SafeAreaView, StyleSheet, Text } from 'react-native'
import { FlatList, View } from 'react-native'
import { Review } from './RepositoryDetails'
import useGetMyReview from '../graphQL/hooks/useGetMyReview'
import { useState } from 'react'
import { Button, Dialog, Portal } from 'react-native-paper';
import useDeteleReview from '../graphQL/hooks/useDeleteReview'


const styles = StyleSheet.create({
    viewContainer: {
        backgroundColor: '#FFFFFF',
        height: '100%',
        marginTop: StatusBar.currentHeight || 0,
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20
        // backgroundColor: 'red'

    },
    separator: {
        height: 10,
        backgroundColor: 'blue'
    },
    dialogHeader: {
        textAlign: 'center',
        color: 'purple',
        paddingBottom: 10
    },
    buttonGroup: {
        justifyContent: 'center',
    },
    cancelBtn: {
        backgroundColor: 'red',
        borderRadius: 5,
        width: '30%'
    },
    confirmBtn: {
        backgroundColor: 'blue',
        borderRadius: 5,
        width: '30%'
    }
    ,
    updateReviewBtn: {
        backgroundColor: 'blue'
    }
})
const ItemSeparator = () => <View style={styles.separator} key={'separator'} />;
const ConfirmDialog = ({ visible, setVisible, confirmDelete }) => {
    const hideDialog = () => {
        setVisible(false)
    };

    return (
        <Portal>
            <Dialog visible={visible} onDismiss={hideDialog}>
                <Text style={styles.dialogHeader}>Are you sure to delete ?</Text>
                <Dialog.Actions style={styles.buttonGroup} >
                    <Button onPress={() => {
                        hideDialog()
                    }} style={styles.cancelBtn} textColor='white'>Cancel</Button>
                    <Button onPress={confirmDelete} style={styles.confirmBtn} textColor='white' >Confirm</Button>
                </Dialog.Actions>
            </Dialog>
        </Portal>
    );
}
const MyView = () => {
    const [getMyReview, , , , myReview, setMyReview] = useGetMyReview()
    const [deleteReview,] = useDeteleReview()
    const [visible, setVisible] = useState(false);
    const [deleteId, setDeleteId] = useState()
    const onSubmitGetMyReview = async () => {
        try {
            const { data } = await getMyReview()

            setMyReview(data?.me.reviews.edges)
        } catch (error) {
            Alert.alert(error.message)
        }
    }
    const openDialog = (id) => {
        setDeleteId(id)
        setVisible(true)
    }
    const confirmDelete = async () => {
        try {
            await deleteReview({ variables: { deleteReviewId: deleteId } })
            await onSubmitGetMyReview()
            setVisible(false)
            Alert.alert(`Delete id ${deleteId} successfully`)
        } catch (error) {
            console.log(error.message)
        }
    }
    return <>
        <SafeAreaView
            style={styles.viewContainer}>
            <View style={styles.header}>
                <Button style={styles.updateReviewBtn} textColor='#fff' onPress={() => onSubmitGetMyReview()} >Update My Review</Button>
            </View>
            <ConfirmDialog setVisible={setVisible} visible={visible} key={'dialog'} confirmDelete={confirmDelete} />

            {myReview && <FlatList
                data={myReview}
                renderItem={({ item }) => <Review key={item.id} review={item} deleteFn={openDialog} />
                }
                keyExtractor={({ id }) => id}
                ItemSeparatorComponent={ItemSeparator}
                key={'flatlist'}
            />}
        </SafeAreaView>
    </>
}


export default MyView