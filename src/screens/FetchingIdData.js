import React, {useState, useEffect} from 'react';
import {
  View,
  Button,
  Text,
  FlatList,
  ActivityIndicator,
  Alert,
} from 'react-native';
import axios from 'axios';
import {CardComponet} from './CardComponet';

export const FetchingIdData = ({navigation, route}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState('');
  const [isError, setIsError] = useState(false);

  const {id} = route.params;
  console.log('route data', route);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      setIsLoading(true);
      const resp = await axios({
        method: 'get',
        url: 'https://jsonplaceholder.typicode.com/posts/',
        params: {
          id: id,
        },
      });
      setIsLoading(false);
      setResult(resp.data[0]);
      console.log('here is reponse', resp);
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
    }
  };

  const onRefresh = () => {
    getData();
  };
  console.log(result, 'dadasdas');

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
          onRefresh={onRefresh}
          refreshing={isLoading}
          ListHeaderComponent={
            <CardComponet
              id={`result:${result.id}`}
              title={`Title:${result.title}`}
              body={`body:${result.body}`}
            />
          }
        />
      )}
    </View>
  );
};
