/* eslint-disable no-unused-vars */
import * as yup from 'yup'
import { Formik } from 'formik'
import { StyleSheet, Text, TextInput } from 'react-native'
import Button from './Button'

const validationSchema = yup.object().shape({
    username: yup
        .string()
        .required('Owner name  is Required'),
    password: yup
        .string()
        .required('Password  is Required'),
    passwordConfirm: yup
        .string()
        .required('Password confirm  is Required'),

})

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
const SignUpForm = ({ onSubmit }) => {
    return <Formik
        initialValues={{ username: '', password: '', passwordConfirm: '', }}
        onSubmit={(values, { resetForm }) => {
            onSubmit(values).then(
                e =>
                    resetForm({
                        username: '', password: '', passwordConfirm: ''
                    })
            )
        }}
        validationSchema={validationSchema}
    >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
            <>
                <TextInput
                    onChangeText={handleChange('username')}
                    onBlur={handleBlur('username')}
                    value={values.username}
                    style={styles.textInput}
                    keyboardType='username'
                    placeholder='User name'
                />
                {errors.username && <Text style={styles.errors}>
                    {errors.username}
                </Text>}
                <TextInput
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    style={styles.textInput}
                    keyboardType='password'
                    placeholder='Password '
                />
                {errors.password && <Text style={styles.errors}>
                    {errors.password}
                </Text>}
                <TextInput
                    onChangeText={handleChange('passwordConfirm')}
                    onBlur={handleBlur('passwordConfirm')}
                    value={values.passwordConfirm}
                    style={styles.textInput}
                    keyboardType='passwordConfirm'
                    placeholder='PasswordConfirm'
                />
                {errors.passwordConfirm && <Text style={styles.errors}>
                    {errors.passwordConfirm}
                </Text>}
                <Button content={'Submit'} onPress={handleSubmit} />
            </>
        )}
    </Formik>
}


export default SignUpForm