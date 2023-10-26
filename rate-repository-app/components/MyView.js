import { StatusBar } from 'expo-status-bar'
import { Alert, SafeAreaView, StyleSheet } from 'react-native'
import { FlatList, View } from 'react-native'
import { Review } from './RepositoryDetails'
import Button from './Button'
import useGetMyReview from '../graphQL/hooks/useGetMyReview'

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
})
const ItemSeparator = () => <View style={styles.separator} />;

const MyView = () => {
    const [getMyReview, , , , myReview, setMyReview] = useGetMyReview()
    const onSubmitGetMyReview = async () => {
        try {
            const { data } = await getMyReview()
            setMyReview(data?.me.reviews.edges)
        } catch (error) {
            Alert.alert(error.message)
        }
    }
    return <SafeAreaView
        style={styles.viewContainer}

    >
        <View style={styles.header}>
            <Button content={'Update My Review'} onPress={() => onSubmitGetMyReview()} />
        </View>

        {myReview && <FlatList
            data={myReview}
            renderItem={({ item }) => <Review key={item.id} review={item} />
            }
            keyExtractor={({ id }) => id}
            ItemSeparatorComponent={ItemSeparator}
        />}
    </SafeAreaView>
}


export default MyView