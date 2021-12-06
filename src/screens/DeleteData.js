import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {CustomButton} from './components/BottonComponent';
import axios from 'axios';
export const deleteData = () => {
  const [islodaing, setIsloading] = useState(false);
  const deletFetchData = async () => {
    try {
      setIsloading(true);
      const res = await axios({
        url: 'https://jsonplaceholder.typicode.com/comments?postId=1',
        params: {
          id: 2,
        },
      });
      console.log('the delete response', res);
      setIsloading(false);
    } catch (error) {
      setIsloading(false);
      console.log('here is error in delete', error);
    }
  };

  return (
    <View>
      <View style={style.btn}>
        <CustomButton
          title={'Delete Data'}
          onPress={deletFetchData}
          isLoading={islodaing}
        />
      </View>
      <View style={style.btn}>
        <CustomButton title={'Delete Qurey Data'} />
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  btn: {
    marginLeft: 50,
    marginRight: 50,
    paddingTop: 20,
    paddingBottom: 20,
  },
});
