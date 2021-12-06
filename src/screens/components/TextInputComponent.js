import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Text} from 'react-native';

export const TextFeild = ({
  onChangeText,
  placeholder,
  value,
  label,
  errorMessage,
  numberOfLines,
  multiline,
  maxLength,
}) => {
  const [heightsize, setHeightSize] = useState();
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.lable}>{label}</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder={placeholder}
        value={value}
        multiline={true}
        height={heightsize}
        onContentSizeChange={e =>
          setHeightSize(e.nativeEvent.contentSize.height)
        }
      />
      <Text style={{color: 'red', left: 10}}>{errorMessage}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
  lable: {
    left: 15,
  },
  inputContainer: {margin: 10},
});
