import React, {useState, useEffect} from 'react';
import {
  View,
  Button,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import {ItemRenderer} from './components/ItemRenderer';
import {useDispatch, useSelector} from 'react-redux';
import {fetchingApiData, GetApiAsyncData} from './redux/action';

export const HomeScreen = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState([]);
  const [isError, setIsError] = useState(false);
  const dispatch = useDispatch();
  const data = useSelector(state => state.apiReducerData.ApiData);
  // console.log(data, 'asdasdasdasd');
  useEffect(() => {
    dispatch(GetApiAsyncData());
  }, []);

  const onRefresh = () => {
    dispatch(GetApiAsyncData());
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
          renderItem={({item, index}) => <ItemRenderer data={item} />}
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
