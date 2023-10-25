/* eslint-disable no-unused-vars */
import * as yup from 'yup'
import { Formik } from 'formik'
import { StyleSheet, Text, TextInput } from 'react-native'
import Button from './Button'

const validationSchema = yup.object().shape({
    ownerName: yup
        .string()
        .required('Owner name  is Required'),
    repositoryName: yup
        .string()
        .required('Password is required'),
    rating: yup
        .number()
        .min(0,)
        .max(100, 'not over 100')
        .required('rating required'),
    text: yup
        .string()
        .min(3, ({ min }) => `repository ${min} characters`)
        .required('review required')

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
const ReviewForm = ({ onSubmit }) => {
    return <Formik
        initialValues={{ ownerName: '', rating: '', repositoryName: '', text: '' }}
        onSubmit={(values, { resetForm }) => {
            onSubmit(values).then(
                e =>
                    resetForm({
                        ownerName: '', rating: '', repositoryName: '', text: ''
                    })
            )
        }}
        validationSchema={validationSchema}
    >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
            <>
                <TextInput
                    onChangeText={handleChange('ownerName')}
                    onBlur={handleBlur('ownerName')}
                    value={values.ownerName}
                    style={styles.textInput}
                    keyboardType='ownerName'
                    placeholder='Owner Name'
                />
                {errors.ownerName && <Text style={styles.errors}>
                    {errors.ownerName}
                </Text>}
                <TextInput
                    onChangeText={handleChange('repositoryName')}
                    onBlur={handleBlur('repositoryName')}
                    value={values.repositoryName}
                    style={styles.textInput}
                    keyboardType='repositoryName'
                    placeholder='Repository Name'
                />
                {errors.repositoryName && <Text style={styles.errors}>
                    {errors.repositoryName}
                </Text>}
                <TextInput
                    onChangeText={handleChange('rating')}
                    onBlur={handleBlur('rating')}
                    value={values.rating}
                    style={styles.textInput}
                    keyboardType='rating'
                    placeholder='Rating'
                />
                {errors.rating && <Text style={styles.errors}>
                    {errors.rating}
                </Text>}
                <TextInput
                    onChangeText={handleChange('text')}
                    onBlur={handleBlur('text')}
                    value={values.text}
                    style={styles.textInput}
                    keyboardType='review'
                    placeholder='Review'
                />
                {errors.review && <Text style={styles.errors}>
                    {errors.review}
                </Text>}
                <Button content={'Submit'} onPress={handleSubmit} />
            </>
        )}
    </Formik>
}


export default ReviewForm