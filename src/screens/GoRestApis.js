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
import {CardComponet} from './CardComponet';
import {CustomButton} from './components/BottonComponent';
import {TextFeild} from './components/TextInputComponent';
import {
  DeleteGoApiAsyncData,
  GetApiAsyncData,
  GetGoAPiAsyncData,
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
  const deleteData = () => {
    dispatch(DeleteGoApiAsyncData());
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
                        // onPress={handelPress}
                      />
                    </View>
                  </View>
                ) : (
                  <CardComponet
                    // onPress={() =>
                    //   navigation.navigate('FetchingIdData', {
                    //     id: item.id,
                    //   })
                    // }
                    id={item.id}
                    title={item.title}
                    body={item.body}
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
