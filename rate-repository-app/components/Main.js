/* eslint-disable no-unused-vars */
import { StyleSheet, View } from 'react-native';
import RepositoryList from './RepositoryList';
import AppBar from './NavBar';
import { Route, Routes, Navigate } from 'react-router-native'
import { review, signup, singin } from '../utils/router';
import Signin from './Signin';
import RespositoryDetails from './RepositoryDetails';
import Review from './CreateReview';
import SignUp from './SignUp';
const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        flexShrink: 1,
    },
});
const Main = () => {
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
                <Route path='*' element={<Navigate to={'/'} replace />} />
            </Routes>
        </View>

    );
};
export default Main;