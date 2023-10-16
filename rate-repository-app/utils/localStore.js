import AsyncStorage from '@react-native-async-storage/async-storage';



export class Token {
    nameToken = 'userToken'
    token
    constructor(token) {
        this.token = token
    }
    showNameToken() {
        return this.nameToken
    }
    async setToken() {
        await AsyncStorage.setItem(`${this.nameToken}`, JSON.stringify(this.token))
    }
    async getToken() {
        const data = await AsyncStorage.getItem(`${this.nameToken}`)

        return JSON.parse(data)
    }
    async deleteToken() {
        await AsyncStorage.removeItem(`${this.nameToken}`)
    }
}