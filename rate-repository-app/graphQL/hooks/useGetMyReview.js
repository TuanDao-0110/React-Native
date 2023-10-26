import { useLazyQuery } from '@apollo/client'
import { GET_CURRENT_USER } from '../queries'
import { useContext } from 'react'
import AuthStorageContext from '../../context/authStorageContext'

const useGetMyReview = () => {
    const [, , , myReview, setMyReview,] = useContext(AuthStorageContext,)
    const [getMyReview, { data, called, loading }] = useLazyQuery(GET_CURRENT_USER, {
        fetchPolicy: 'cache-and-network'
    })
    return [getMyReview, data, called, loading, myReview, setMyReview,]
}


export default useGetMyReview 