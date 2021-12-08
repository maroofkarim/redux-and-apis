import React, {useEffect, useState} from 'react';
import {
  View,
  Button,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  Text,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {ItemComponent} from './components/ItemComponent';
import {
  DeleteGoApiAsyncData,
  GetApiAsyncData,
  GetGoAPiAsyncData,
  PostGoApiAsyncData,
} from './redux/action';

export const GoRestApis = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const dispatch = useDispatch();
  const data = useSelector(state => state.apiReducerData.GoApiData);
  console.log('dasdasdadasdasdad', data);

  useEffect(() => {
    dispatch(GetGoAPiAsyncData());
  }, []);
  const onRefresh = () => {
    dispatch(GetGoAPiAsyncData());
  };

  const onEditpress = ({id, title, body}) => {
    setEditMode(true);
  };
  return (
    <View>
      {isLoading ? (
        <View style={{flex: 1, justifyContent: 'center', marginTop: 50}}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : isError ? (
        <View style={{marginTop: 50}}>
          <Button title="refresh" onPress={getData} />
        </View>
      ) : (
        <FlatList
          data={data}
          onRefresh={onRefresh}
          refreshing={isLoading}
          renderItem={({item, index}) => {
            return (
              <View>
                <ItemComponent
                  compnetId={item.id}
                  componentBody={item.body}
                  componentTitle={item.title}
                  onChangeBody={value => setBody(value)}
                  onChangeBodyValue={body}
                  onChangeTitle={value => setTitle(value)}
                  onChangeTitleValue={title}
                  deleteButtonPress={() => {
                    dispatch(DeleteGoApiAsyncData({id: item.id}));
                  }}
                  updateData={() => {
                    dispatch(
                      PostGoApiAsyncData({
                        title: title,
                        body: body,
                        id: item.id,
                      }),
                    );
                  }}
                />
              </View>
            );
          }}
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
