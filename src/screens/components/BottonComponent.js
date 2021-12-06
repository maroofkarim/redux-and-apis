import React from 'react';
import {
  Button,
  View,
  TouchableOpacity,
  Text,
  ActivityIndicator,
} from 'react-native';

export const CustomButton = ({title, onPress, isLoading}) => {
  return (
    <TouchableOpacity
      disabled={isLoading}
      onPress={onPress}
      style={{
        backgroundColor: 'lightblue',
        justifyContent: 'center',
        padding: 12,
        alignItems: 'center',
      }}>
      {isLoading ? (
        <ActivityIndicator size="large" color="green" />
      ) : (
        <Text>{title}</Text>
      )}
    </TouchableOpacity>
  );
};
