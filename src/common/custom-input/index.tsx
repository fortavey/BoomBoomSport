import React from 'react';

import {
  StyleProp,
  Text,
  TextInput,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';

import {COLORS} from 'shared';

import {styles} from './style';

type CustomInputProps = {
  inputValue: string;
  onChangeInputValue(val: string): void;
  placeholder?: string;
  label?: string;
  wrapperStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  inputRef?: React.RefObject<TextInput>;
};
export const CustomInput: React.FC<CustomInputProps> = ({
  inputValue,
  onChangeInputValue,
  placeholder,
  label,
  wrapperStyle,
  textStyle,
  inputRef,
}) => {
  return (
    <View style={styles.container}>
      {!!label && (
        <View style={styles.labelContainer}>
          <Text style={styles.labelText}>{label}</Text>
        </View>
      )}
      <View style={[styles.inputContainer, wrapperStyle]}>
        <TextInput
          value={inputValue}
          ref={inputRef}
          placeholder={placeholder}
          onChangeText={onChangeInputValue}
          placeholderTextColor={COLORS.dark_100}
          style={[styles.textInputStyle, textStyle]}
        />
      </View>
    </View>
  );
};
