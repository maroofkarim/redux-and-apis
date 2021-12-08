import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {CardComponet} from '../CardComponet';
import {CustomButton} from './BottonComponent';
import {useDispatch} from 'react-redux';
import {TextFeild} from './TextInputComponent';

export const ItemComponent = ({
  compnetId,
  componentTitle,
  componentBody,
  deleteButtonPress,
  onPress,
  updateData,
  onChangeBody,
  onChangeBodyValue,
  onChangeTitle,
  onChangeTitleValue,
}) => {
  const [editMode, setEditMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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
              onChangeText={onChangeTitle}
              placeholder="title"
              value={onChangeTitleValue}
            />
          </View>
          <View>
            <TextFeild
              label="Body"
              onChangeText={onChangeBody}
              placeholder="body"
              value={onChangeBodyValue}
            />
          </View>
          <View style={style.btn}>
            <CustomButton
              title={'Update Data'}
              isLoading={isLoading}
              onPress={updateData}
            />
          </View>
        </View>
      ) : (
        <CardComponet
          onPress={onPress}
          id={compnetId}
          title={componentTitle}
          body={componentBody}
          renderData={
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
              }}>
              <View style={style.btn}>
                <CustomButton
                  title={'Edit Form'}
                  onPress={onEditpress}
                  isLoading={isLoading}
                />
              </View>
              <View style={style.btn}>
                <CustomButton
                  title={'Delete data'}
                  onPress={deleteButtonPress}
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
