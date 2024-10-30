import React from 'react';

import {
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';

import {styles} from './style';

interface CustomButtonProps
  extends Omit<TouchableOpacityProps, 'onPress' | 'style'> {
  wrapperStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  label: string;
  onPress(): void;
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  onPress,
  wrapperStyle,
  titleStyle,
  label,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, wrapperStyle]}
      onPress={onPress}
      {...props}>
      <Text style={[styles.buttonText, titleStyle]}>{label}</Text>
    </TouchableOpacity>
  );
};
