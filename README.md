# React-Native

1. [x] Introduction to React Native
<ul>
<li>set up

 </li>
 </ul>
2. [x] React Native basics
3. [x] Communication with server
4. [x] Testing and exteding our application

<h1> <a href =''>
The demo application:
 </a> </h1>

```javascript
var = 'react-native'
```

```typescript
const : string = 'string'
```

1. start react navtive by using <a>expo </a>

```terminal
 npx create-expo-app rate-repository-app --template expo-template-blank@sdk-46
```

```terminal
npx expo install react-native-web@~0.18.7 react-dom@18.2.0 @expo/webpack-config@^0.17.0
```
2. set up eslint: 

```terminal
npm install --save-dev eslint @babel/eslint-parser eslint-plugin-react eslint-plugin-react-native
```

by  following content: 

```json
{
  "plugins": ["react", "react-native"],
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "extends": ["eslint:recommended", "plugin:react/recommended"],
  "parser": "@babel/eslint-parser",
  "env": {
    "react-native/react-native": true
  },
  "rules": {
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off"
  }
}
```