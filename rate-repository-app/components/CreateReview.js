import { Alert, Platform, StyleSheet, View } from 'react-native'
import ReviewForm from './CreateReviewForm'
import useAddReview from '../graphQL/hooks/useAddReview'

const Review = () => {
    const styles = StyleSheet.create({
        container: {
            width: '100%',
            height: '100%',
            alignItems: 'center',
            backgroundColor: Platform.OS === 'ios' ? 'white' : 'blue',
            padding: 10,
            paddingTop: 100,
        },
    })
    const [createReview] = useAddReview()
    const onSubmit = async (value) => {
        let review = { ...value, rating: Number(value.rating) }
        try {
            await createReview({ variables: { review } })
            Alert.alert('success')
            return
        } catch (error) {
            Alert.alert(error.message)
            throw error
        }
    }

    return <View style={styles.container}>
        <ReviewForm onSubmit={onSubmit} />
    </View>
}


export default Review