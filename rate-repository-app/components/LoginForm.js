import { Formik } from 'formik'
import { useState } from 'react';
import { StyleSheet, Switch, Text, TextInput } from 'react-native'
import Button from './Button';
import * as yup from 'yup'
const loginValidationSchema = yup.object().shape({
    email: yup
        .string()
        // .email('Please enter valid email')
        .required('Email Address is Required'),
    password: yup
        .string()
        .min(3, ({ min }) => `Password must be at least ${min} characters`)
        // .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
        .required('Password is required'),
})
const LogInForm = ({onSubmit}) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  
    const styles = StyleSheet.create({
        textInput: {
            height: 40,
            width: '80%',
            margin: 10,
            backgroundColor: 'white',
            borderColor: 'gray',
            borderWidth: StyleSheet.hairlineWidth,
            borderRadius: 10,

        },
        errors:
            { fontSize: 10, color: 'red', paddingBottom: 10 }
    })
    
    return <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={values => onSubmit(values.email, values.password)}
        validationSchema={loginValidationSchema}
    >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
            <>
                <TextInput
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    style={styles.textInput}
                    keyboardType='email-address'
                    placeholder='Email'
                />
                {errors.email &&
                    <Text style={styles.errors}>{errors.email}</Text>
                }
                <TextInput
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    secureTextEntry={!isEnabled}
                    style={styles.textInput}
                    placeholder='Password'
                />
                {errors.password &&
                    <Text style={styles.errors}>{errors.password}</Text>
                }
                <Button content={'Submit'} onPress={handleSubmit} />
                <Switch
                    trackColor={{ false: '#767577', true: '#81b0ff' }}
                    thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                    ios_backgroundColor='#3e3e3e'
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                    style={styles.toggle}
                />
                <Text>show the password </Text>
            </>
        )}
    </Formik>
}



export default LogInForm