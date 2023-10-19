import {useContext} from 'react'
import AuthStorageContext from './authStorageContext'


const useAuthStorage = ()=> { 
    return useContext(AuthStorageContext)
}


export default useAuthStorage