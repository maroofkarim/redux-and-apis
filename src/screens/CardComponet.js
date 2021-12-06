import React from 'react';
import {Children} from 'react';
import {TouchableOpacity, View, StyleSheet, Text} from 'react-native';

export const CardComponet = ({
  onPress,
  title = '',
  body = '',
  id,
  renderData,
}) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <View style={style.textContainer}>
          <View style={style.cardView}>
            <Text style={{fontSize: 20, color: 'red'}}>Id:</Text>
            {id && <Text style={{fontSize: 20, color: 'green'}}>{id}</Text>}
          </View>
          <View>
            <Text style={{fontSize: 20, color: 'red'}}>title:</Text>
            <Text style={{fontSize: 18}}>{title}</Text>
          </View>
          <View>
            <Text style={{fontSize: 17, color: 'red'}}>Body:</Text>
            <Text style={{fontSize: 15}}>{body}</Text>
          </View>
        </View>
      </TouchableOpacity>
      {renderData}
    </View>
  );
};
const style = StyleSheet.create({
  btn: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  cardView: {flexDirection: 'row'},
  textContainer: {
    margin: 20,
    borderColor: 'red',
    borderWidth: 2,
    padding: 20,
  },
});
