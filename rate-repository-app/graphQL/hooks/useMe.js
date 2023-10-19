import { useLazyQuery } from '@apollo/client'
import { ME } from '../queries'
import { useEffect } from 'react'

const useMe = () => {
    const [getMe, { error, data, loading }] = useLazyQuery(ME, {
        fetchPolicy: 'network-only',
    })
    useEffect(() => {
        getMe()
    }, [])
    return { data, error, loading }
}


export default useMe