import AsyncStorage from '@react-native-async-storage/async-storage';



export class Token {
    nameToken = 'userToken'

    constructor() {

    }
    showNameToken() {
        return this.nameToken
    }
    async setToken(token) {
        await AsyncStorage.setItem(`${this.nameToken}`, JSON.stringify(token))
        return
    }
    async getToken() {
        const data = await AsyncStorage.getItem(`${this.nameToken}`)

        return JSON.parse(data)
    }
    async deleteToken() {
        await AsyncStorage.removeItem(`${this.nameToken}`)
        return
    }
}