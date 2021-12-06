import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';

import axios from 'axios';
import {Formik} from 'formik';
import {CustomButton} from './components/BottonComponent';
import {TextFeild} from './components/TextInputComponent';

export const editData = ({navigation, route}) => {
  const {title, body, id} = route.params;
  const [isLoading, setIsLoading] = useState(false);
  const putData = async ({title, body}) => {
    try {
      setIsLoading(true);
      const res = await axios({
        method: 'PUT',
        url: `https://jsonplaceholder.typicode.com/posts/${id}`,
        data: {
          title: title,
          body: body,
        },
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      console.log('here is patch data', res.data);
      setIsLoading(false);
      navigation.navigate('HomeScreen');
    } catch (error) {
      setIsLoading(false);
      console.log('you got error in patch data', error);
    }
  };

  return (
    <View>
      <Formik
        initialValues={{
          title: title,
          body: body,
        }}
        onSubmit={value => {
          putData({title: value.title, body: value.body});
          console.log('here is posteed data', value);
        }}>
        {({handleSubmit, values, handleChange}) => (
          <View>
            <View style={{marginTop: 50}}>
              <TextFeild
                label="Title"
                onChangeText={handleChange('title')}
                placeholder="title"
                value={values.title}
              />
            </View>
            <View>
              <TextFeild
                label="Body"
                onChangeText={handleChange('body')}
                placeholder="body"
                value={values.body}
              />
            </View>
            <View style={styles.btn}>
              <CustomButton
                title={'Update Data'}
                isLoading={isLoading}
                onPress={handleSubmit}
              />
            </View>
          </View>
        )}
      </Formik>
    </View>
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
