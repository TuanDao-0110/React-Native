import { useMutation } from '@apollo/client'
import { DELETE_REVIEW } from '../mutation'

const useDeteleReview = () => {
    const [deleteReview, { loading, data, called }] = useMutation(DELETE_REVIEW)
    return [deleteReview, loading, data, called]
}

export default useDeteleReview