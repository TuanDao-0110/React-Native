/* eslint-disable no-unused-vars */
import { StyleSheet, View } from 'react-native';
import RepositoryList from './RepositoryList';
import AppBar from './NavBar';
import { Route, Routes, Navigate } from 'react-router-native'
import { singin } from '../utils/router';
import Signin from './Signin';

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
                <Route path='/' element={<RepositoryList />} />
                <Route path={`/${singin}`} element={<Signin />} />
                <Route path='*' element={<Navigate to={'/'} replace />} />
            </Routes>
        </View>

    );
};
export default Main;