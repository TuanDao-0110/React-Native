/* eslint-disable no-unused-vars */
import { StyleSheet, View } from 'react-native';
import RepositoryList from './RepositoryList';
import AppBar from './NavBar';
import { Route, Routes, Navigate } from 'react-router-native'
import { myView, review, signup, singin } from '../utils/router';
import Signin from './Signin';
import RespositoryDetails from './RepositoryDetails';
import Review from './CreateReview';
import SignUp from './SignUp';
import MyView from './MyView';
import { useContext } from 'react';
import AuthStorageContext from '../context/authStorageContext';
import { useEffect } from 'react';
const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        flexShrink: 1,
    },
});
const Main = () => {

    const [authStorage, ,setLogin] = useContext(AuthStorageContext)
    useEffect(() => {
        onGetMe()
    }, [])
    const onGetMe = async () => {
        try {
            const token = await authStorage.getToken()
            if (token) {
                setLogin(true)
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <View style={styles.container}>
            <AppBar />
            <Routes>
                <Route path='/' >
                    <Route index element={<RepositoryList />} />
                    <Route path='/:id' element={<RespositoryDetails />} />
                </Route>
                <Route path={`/${singin}`} element={<Signin />} />
                <Route path={`/${review}`} element={<Review />} />
                <Route path={`/${signup}`} element={<SignUp />} />
                <Route path={`/${myView}`} element={<MyView />} />
                <Route path='*' element={<Navigate to={'/'} replace />} />
            </Routes>
        </View>

    );
};
export default Main;