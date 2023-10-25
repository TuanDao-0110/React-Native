import { useApolloClient, useMutation } from '@apollo/client'
import useAuthStorage from '../../context/authStorageContextHook'
import { CREATE_REVIEW } from '../mutation'

const useAddReview = () => {
    const authStorage = useAuthStorage()[0]
    const [createReview, { data, loading, error }]
        = useMutation(CREATE_REVIEW)
    return [createReview, data, loading, error, authStorage, useApolloClient().resetStore]
}


export default useAddReview