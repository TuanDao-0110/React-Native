# React-Native

## 1. Introduction to React Native

<ul>
<li>set up by using <a href='https://expo.dev/'>Expo</a></li>
</ul>

## 2.React Native basics

<h1> <a href =''>
The demo application:
 </a> </h1>

```javascript
var = 'react-native'
```

```typescript
const : string = 'string'
```

a. start react navtive by using <a>expo </a>

```terminal
 npx create-expo-app rate-repository-app --template expo-template-blank@sdk-46
```

```terminal
npx expo install react-native-web@~0.18.7 react-dom@18.2.0 @expo/webpack-config@^0.17.0
```

b. set up eslint:

```terminal
npm install --save-dev eslint @babel/eslint-parser eslint-plugin-react eslint-plugin-react-native
```

by following content:

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

c. connect to React native Debugger

In simulator press:

```
cmd + d
```

In React Native Debugger:

```
Command+T on macOS, Ctrl+T on Linux/Windows
```

and set up connec to port to " 19000 "

#### Core components:

```javascript
import { Text } from 'react-native';

const HelloWorld = (props) => {
  return <Text>Hello world!</Text>;
};
```

### There are more <a href='https://reactnative.dev/docs/components-and-apis'> core components</a>:

```
 Text component is the only React Native component that can have textual children. It is similar to for example the <strong> and the <h1> elements.
```

<a href='https://reactnative.dev/docs/pressable'> Press component: </a>

```jsx padded
<Pressable onPress={onPressFunction}>
  <Text>I'm pressable!</Text>
</Pressable>
```

<a href='https://reactnative.dev/docs/flatlist'> FlatList component</a>

## 3. Communication with server

<ul>
<li>
Use ENV:

```
import Constants from 'expo-constants';
```

and get properties "extra" from "app.config.js":

```js
   'extra': {
      url: process.env.APOLLO_URI
    }
```

create ".env" file

</li>
<li>
Connect server with localhost, React Native connect localhost with Host: http://192.168.1.165 or host name can be found when run start "Expo":

</li>
</ul>

## 4. Testing and exteding our application

Using <a href='https://jestjs.io/'>Jest</a>

```
npm install --save-dev jest jest-expo eslint-plugin-jest
```

Set up <a href='https://callstack.github.io/react-native-testing-library/'>React Native Testing Library </a> .These matchers are provided by the <a href ='https://github.com/testing-library/jest-native'> jest-native </a> library.

```
npm install --save-dev --legacy-peer-deps react-test-renderer@18.2.0 @testing-library/react-native @testing-library/jest-native
```

Most of the popular React Native Testing concepts are:

<ul>
<li> <a href='https://callstack.github.io/react-native-testing-library/docs/api-queries'> Queries</a></li>
<li> <a href='https://callstack.github.io/react-native-testing-library/docs/api#fireevent'> Fire Events</a></li>
</ul>

## 5. Extend application:

<ul>
<li>
Applied <a href='https://github.com/Kaltsoon/rate-repository-api'>GrapQl API Rate-Repositories API</a>
</li>
<li>
Applied <a href='https://formik.org/docs/guides/react-native'>Yup</a> and <a href='https://formik.org/'>Formik</a>
</li>
<li>
Applied <a href='https://fullstackopen.com/en/part10/testing_and_extending_our_application#infinite-scrolling'>Infinite scrolling</a>
</li>
<li>
Additional Resources: <a href='https://reactnativepaper.com/'>React Native Paper</a>, <a href='https://www.react-spring.dev/docs'>React-Spring</a>, <a href='https://styled-components.com/'>Styled Component</a>
</li>
</ul>

## 6. Aplication UI:

<li> Get All Repositories, Seaching, Sorting functions: </li>
<img src='./Screenshot 2023-10-27 at 6.04.40.png' height='500'/>
<img src='./Screenshot 2023-10-27 at 6.05.59.png' height='500'/>

<li>Login, Sign Up, Logout</li>
<img src='./Screenshot 2023-10-27 at 6.06.59.png' height='500'/>
<img src='./Screenshot 2023-10-27 at 6.07.33.png' height='500'/>

<li>Add User's own Review </li>
<img src='./Screenshot 2023-10-27 at 6.10.14.png' height='500'/>
<li>Check My Review, Delete, Check My Review's Repository</li>
<img src='./Screenshot 2023-10-27 at 6.10.38.png' height='500'/>
<img src='./Screenshot 2023-10-27 at 6.11.43.png' height='500'/>




## Require Backend: 

Please Download backend from this <a href='https://github.com/Kaltsoon/rate-repository-api'> Repository </a> before run Application: 