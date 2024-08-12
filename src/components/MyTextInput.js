import React, { forwardRef } from 'react';
import { Platform, StyleSheet, TextInput } from 'react-native';
import { defaultColor, descriptionColorVer2 } from '../constant/colors';
import { defaultFontFamily } from '../constant/fonts';

const MyTextInput = forwardRef((props, ref) => {
  const {
    style: textInputStyle = {},
    placeholder = '직접입력:',
    ...restProps
  } = props;
  return (
    <TextInput
      style={[styles.textInput, textInputStyle]}
      textAlignVertical="top"
      placeholder={placeholder}
      placeholderTextColor={descriptionColorVer2}
      ref={ref}
      returnKeyType="done"
      {...restProps}
    />
  );
});

export default MyTextInput;

const styles = StyleSheet.create({
  textInput: {
    fontFamily: defaultFontFamily,
    paddingTop: 19.5,
    paddingBottom: 17.5,
    color: defaultColor,
    fontSize: 16,
    borderBottomColor: 'rgb(232,232,232)',
    borderBottomWidth: 1,
    width: '100%',
  },
});
