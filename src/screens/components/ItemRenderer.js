import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {CardComponet} from '../CardComponet';
import {CustomButton} from './BottonComponent';
import {TextFeild} from './TextInputComponent';
import axios from 'axios';

export const ItemRenderer = ({data, navigation}) => {
  console.log('here is data', data);
  const [editMode, setEditMode] = useState(false);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const putData = async ({title, body, id}) => {
    console.log('here is your putdata', id);
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
      //   console.log('here is json data', res.data);
      console.log('dasdasdasdasdas', id);
      setIsLoading(false);
      setEditMode(false);

      navigation.navigate('HomeScreen');
    } catch (error) {
      setIsLoading(false);
      console.log('you got error in patch data', error);
    }
  };

  const deleteData = async ({id}) => {
    console.log('your id ', id);

    try {
      setIsLoading(true);
      const res = await axios({
        method: 'DELETE',
        url: `https://jsonplaceholder.typicode.com/posts/${id}`,

        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      console.log('here is deleted data', res.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log('you got error in delete data', error);
    }
  };
  const onEditpress = ({id, title, body}) => {
    setEditMode(true);
  };
  return (
    <View style={{padding: 30}}>
      {editMode ? (
        <View>
          <View style={{marginTop: 50}}>
            <TextFeild
              label="Title"
              onChangeText={value => setTitle(value)}
              placeholder="title"
              value={title}
            />
          </View>
          <View>
            <TextFeild
              label="Body"
              onChangeText={value => setBody(value)}
              placeholder="body"
              value={body}
            />
          </View>
          <View style={style.btn}>
            <CustomButton
              title={'Update Data'}
              isLoading={isLoading}
              onPress={() =>
                putData({
                  title: title,
                  body: body,
                })
              }
            />
          </View>
        </View>
      ) : (
        <CardComponet
          onPress={() =>
            navigation.navigate('FetchingIdData', {
              id: data.id,
            })
          }
          id={data.id}
          title={data.title}
          body={data.body}
          renderData={
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
              }}>
              <View style={style.btn}>
                <CustomButton
                  title={'Edit Form'}
                  onPress={() => onEditpress(data)}
                />
              </View>
              <View style={style.btn}>
                <CustomButton
                  title={'Delete data'}
                  onPress={() => deleteData({id: data.id})}
                  isLoading={isLoading}
                />
              </View>
            </View>
          }
        />
      )}
    </View>
  );
};
const style = StyleSheet.create({
  btn: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  cardView: {flexDirection: 'row'},
});
