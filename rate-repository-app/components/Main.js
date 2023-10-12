import { StyleSheet, View ,Text} from 'react-native';
import RepositoryList from './RepositoryList';
import AppBar from './NavBar';
import { Route, Routes, Navigate } from 'react-router-native'
import { singin } from '../utils/router';

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
                <Route path='/' element={<RepositoryList />}/>
                <Route path={`/${singin}`} element={<Text>Sign in</Text>}/>
                <Route path='*' element={<Navigate to={'/'} replace/>}/>
            </Routes>
        </View>

    );
};

export default Main;