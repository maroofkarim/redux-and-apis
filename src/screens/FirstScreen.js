import React from 'react';
import {View, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {CustomButton} from './components/BottonComponent';
import {fetchingApiData, GetApiAsyncData} from './redux/action';

export const FirstScreen = ({navigation}) => {
  const dispatch = useDispatch();
  // const data = useSelector(state => state.apiReducerData.ApiData);
  // onHandlepress = () => {
  //   dispatch(GetApiAsyncData());
  // };
  return (
    <View>
      <View style={{margin: 20}}>
        <CustomButton
          title="simple api data"
          // onPress={() => {
          //   onHandlepress();
          // }}
          onPress={() => navigation.navigate('HomeScreen')}
        />
      </View>
      <View style={{margin: 20}}>
        <CustomButton
          title="Query api data"
          onPress={() => navigation.navigate('NextScreen')}
        />
      </View>
      <View style={{margin: 20}}>
        <CustomButton
          title="Simple post"
          onPress={() => navigation.navigate('SimplePostScreen')}
        />
      </View>
      <View style={{margin: 20}}>
        <CustomButton
          title="Qurey post"
          onPress={() => navigation.navigate('QueryPostScreen')}
        />
      </View>
      <View style={{margin: 20}}>
        <CustomButton
          title="Fetching Id Data With Axios"
          onPress={() => navigation.navigate('FetchingIdData')}
        />
      </View>
      <View style={{margin: 20}}>
        <CustomButton
          title="Fetching Id Data With Qurey"
          onPress={() => navigation.navigate('FetchingIdQurey')}
        />
      </View>
      <View style={{margin: 20}}>
        <CustomButton
          title="Delete Data "
          onPress={() => navigation.navigate('DeletData')}
        />
      </View>
    </View>
  );
};
