import React, {useState} from 'react';
import {
  View,
  Button,
  TextInput,
  StyleSheet,
  SafeAreaView,
  Text,
  ActivityIndicator,
} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';
import {CustomButton} from './components/BottonComponent';
import {TextFeild} from './components/TextInputComponent';
import {useMutation} from 'react-query';
import axios from 'axios';

export const QueryPostScreen = () => {
  const token =
    'eed1728a508ef515adecfbac7cce85cb712c6e4db80bfd70b238293472d0ee8b';
  const config = {
    headers: {Authorization: `Bearer ${token}`},
    'Content-Type': 'application/json',
  };
  const {data, mutate, isLoading} = useMutation(
    mutate =>
      axios.post(
        'https://jsonplaceholder.typicode.com/posts/1/comments',
        mutate,
        config,
      ),
    {
      onSuccess: () => {
        alert('successfully done ');
      },
      onError: () => {
        alert('you gor an error');
      },
    },
  );

  console.log('here is data', data);

  const inputValidations = yup.object().shape({
    email: yup.string().email('Invalid email').required('Email is Required'),
    name: yup
      .string()
      .min(4, ({min}) => `password must be at last ${min} charaters`)
      .required('name is requried'),
  });

  return (
    <SafeAreaView>
      <Formik
        initialValues={{
          name: '',
          email: '',
        }}
        validationSchema={inputValidations}
        onSubmit={value => {
          const data = {
            postId: 1,
            id: 1,
            name: value.name,
            email: value.email,
            body: 'laudantium enim quasi est qu',
          };
          mutate(data);
        }}>
        {({handleSubmit, values, errors, handleChange, touched, isValid}) => (
          <View>
            <View style={{marginTop: 50}}>
              <TextFeild
                label={'name'}
                onChangeText={handleChange('name')}
                placeholder="name"
                value={values.name}
                errorMessage={touched.name && errors.name}
              />
            </View>
            <View>
              <TextFeild
                label={'email'}
                onChangeText={handleChange('email')}
                placeholder="email"
                value={values.email}
                errorMessage={touched.email && errors.email}
              />
            </View>
            <View style={styles.btn}>
              <CustomButton
                islodaing={isLoading}
                title="Qurey post data"
                onPress={handleSubmit}
              />
            </View>
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  btn: {
    marginLeft: 50,
    marginRight: 50,
    paddingTop: 20,
    paddingBottom: 20,
  },
});

// const {data, mutate, isLoading} = useMutation(
//   mutate =>
//     axios.post('https://gorest.co.in/public/v1/users', mutate, config),
//   {
//     onSuccess: () => alert('success'),
//     onError: () => alert('error'),
//   },
// );

// const payload = {
//   id: 43,
//   name: value.name,
//   email: value.email,
//   gender: 'female',
//   status: 'active',
// };

// mutate(payload);
