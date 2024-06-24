import React from "react"
import { Button, StyleSheet, View } from "react-native"

import { Formik, useField } from "formik"
import StyledTextInput from "../components/StyledTextInput"

const initialValues = {
  username: '',
  password: ''
}

const styles = StyleSheet.create({
  form: {
    margin: 12
  }
})

const FormikInputValue = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name)


  return (
    <StyledTextInput
      placeholder="E-mail"
      value={field.value}
      //Decir cual es el campo que se va a cambiar
      onChangeText={value => helpers.setValue(value)}
      {...props}
    />
  )
}

export default function Login() {
  return (
    <Formik initialValues={initialValues} onSubmit={values => console.log(values)}>
      {({  handleSumbit }) => {
        return (
          <View style={styles.form}>
            <FormikInputValue
              name='email'
              placeholder="E-mail"
            />

            <FormikInputValue
              name='password'
              placeholder="Password"
              secureTextEntry
            />
            <Button onPress={handleSumbit} title="Login" />
          </View>
        )
      }}
    </Formik>
  )
}