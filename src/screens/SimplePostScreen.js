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
import axios from 'axios';
import {Formik} from 'formik';
import * as yup from 'yup';
import {CustomButton} from './components/BottonComponent';
import {TextFeild} from './components/TextInputComponent';

export const SimplePostScreen = () => {
  const [isLoading, setIsloading] = useState(false);
  const inputValidations = yup.object().shape({
    email: yup.string().email('Invalid email').required('Email is Required'),
    name: yup
      .string()
      .min(4, ({min}) => `password must be at last ${min} charaters`)
      .required('name is requried'),
  });

  const postData = async ({name, email}) => {
    const token =
      'eed1728a508ef515adecfbac7cce85cb712c6e4db80bfd70b238293472d0ee8b';
    const config = {
      headers: {Authorization: `Bearer ${token}`},
      'Content-Type': 'application/json',
    };
    const values = {
      id: 43,
      name: name,
      email: email,
      gender: 'female',
      status: 'active',
    };
    try {
      console.log('in try');
      setIsloading(true);
      const respon = await axios.post(
        'https://gorest.co.in/public/v1/users',
        values,
        config,
      );
      setIsloading(false);
      console.log('here is your post response', respon.data);
    } catch (error) {
      setIsloading(false);
      alert(error);
      console.log('you got post erro', error);
    }
  };

  const deletPost = async ({email, name}) => {
    const token =
      'eed1728a508ef515adecfbac7cce85cb712c6e4db80bfd70b238293472d0ee8b';
    const config = {
      headers: {Authorization: `Bearer ${token}`},
      'Content-Type': 'application/json',
    };
    const values = {
      id: 43,
      name: name,
      email: email,
      gender: 'female',
      status: 'active',
    };

    try {
      const res = await axios.delete(
        'https://gorest.co.in/public/v1/users',
        values,
        config,
      );
    } catch (error) {
      console.log('here you got error in delet', error);
    }
  };

  const patchData = async ({email, name}) => {
    const token =
      'eed1728a508ef515adecfbac7cce85cb712c6e4db80bfd70b238293472d0ee8b';
    const config = {
      headers: {Authorization: `Bearer ${token}`},
      'Content-Type': 'application/json',
    };
    const values = {
      id: 43,
      name: name,
      email: email,
      gender: 'female',
      status: 'active',
    };

    try {
      const res = await axios.patch(
        'https://gorest.co.in/public/v1/users',
        values,
        config,
      );
    } catch (error) {
      console.log('here you got error in patch', error);
    }
  };

  return (
    <SafeAreaView>
      <Formik
        initialValues={{
          name: '',
          email: '',
        }}
        validationSchema={inputValidations}
        onSubmit={value => {
          postData({name: value.name, email: value.email});
          deletPost({name: value.name, email: value.email});
          patchData({name: value.name, email: value.email});
          console.log('here is posteed data', value);
        }}>
        {({handleSubmit, values, errors, handleChange, touched, isValid}) => (
          <View>
            <View style={{marginTop: 50}}>
              <TextFeild
                label="name"
                onChangeText={handleChange('name')}
                placeholder="name"
                value={values.name}
                errorMessage={touched.name && errors.name}
              />
            </View>
            <View>
              <TextFeild
                label="Email"
                onChangeText={handleChange('email')}
                placeholder="email"
                value={values.email}
                errorMessage={touched.email && errors.email}
              />
            </View>
            <View style={styles.btn}>
              <CustomButton
                title={'simple post data'}
                onPress={handleSubmit}
                isLoading={isLoading}
              />
            </View>
            <View style={styles.btn}>
              <CustomButton
                title={'Delete data'}
                isLoading={isLoading}
                onPress={handleSubmit}
              />
            </View>
            <View style={styles.btn}>
              <CustomButton
                title={'patching data'}
                isLoading={isLoading}
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
