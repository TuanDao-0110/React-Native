import { Text } from 'react-native'
import Button from './Button'

const Logout = ({ onGetMe, userInfo, onLogout }) => {
    console.log(userInfo)
    return <>
        <Button content={'get me'} onPress={onGetMe} />
        <Text>{ userInfo.id} {userInfo.username}</Text>
        <Button content={'Log out'} onPress={onLogout} />
    </>
}


export default Logout