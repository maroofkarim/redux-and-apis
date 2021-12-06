import React, {useState, useEffect} from 'react';
import {View, Text, Button, FlatList, ActivityIndicator} from 'react-native';
import axios from 'axios';
import {useQuery, useMutation, useQueryClient, QueryClient} from 'react-query';

export const NextScreen = ({navigation}) => {
  const queryClient=new useQueryClient()
  const {data, isLoading, isError} = useQuery('getData', async() =>
  await  axios.get('https://jsonplaceholder.typicode.com/posts'),
  );

  console.log({data, isLoading, isError});
const onRefresh=()=>{
 queryClient.invalidateQueries('getData')
}
  return (
    <View>
      {isLoading ? (
        <View style={{flex: 1, justifyContent: 'center', marginTop: 50}}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : isError ? (
        <View  style={{marginTop:50}}>
          <Button title="refresh" />
        </View>
      ) : (
        <FlatList
          data={data.data}
          onRefresh={onRefresh}
          refreshing={isLoading}
          renderItem={(item, index) => {
            return (
              <View
                style={{
                  margin: 20,
                  borderColor: 'red',
                  borderWidth: 2,
                  padding: 20,
                  backgroundColor: 'pink',
                }}>
                <Text style={{fontSize: 20, color: 'green'}}>
                  ID:{item.item.id}
                </Text>
                <Text style={{fontSize: 25, color: 'red'}}>
                  Title:{item.item.title}
                </Text>
                <Text style={{fontSize: 25, color: 'green'}}>
                  Body:{item.item.body}
                </Text>
              </View>
            );
          }}
        />
      )}
    </View>
  );
};
