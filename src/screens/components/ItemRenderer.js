import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {CardComponet} from '../CardComponet';
import {CustomButton} from './BottonComponent';
import {TextFeild} from './TextInputComponent';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import {
  DeletingAPiData,
  DeletingAsyncData,
  GetPostAsycnData,
  GetPostData,
} from '../redux/action';

export const ItemRenderer = ({data, navigation}) => {
  console.log('here is data', data);
  const [editMode, setEditMode] = useState(false);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const handelPress = () => {
    dispatch(GetPostAsycnData({title: title, body: body, id: data.id}));
    setEditMode(false);
  };
  const deleteData = () => {
    dispatch(DeletingAsyncData({id: data.id}));
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
              onPress={handelPress}
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
                  isLoading={isLoading}
                />
              </View>
              <View style={style.btn}>
                <CustomButton
                  title={'Delete data'}
                  onPress={deleteData}
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
