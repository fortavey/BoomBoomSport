import React from 'react';

import {Pressable, StyleProp, Text, TextStyle, ViewStyle} from 'react-native';

import {styles} from './style';
import {COLORS} from 'shared';

interface CustomShipType {
  onPress(): void;
  isSelected: boolean;
  title: string;
  wrapperStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
}
// () => onChangeFilter(item.title)
export const Ship: React.FC<CustomShipType> = ({
  onPress,
  title,
  wrapperStyle,
  titleStyle,
  isSelected,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.chip,
        wrapperStyle,
        isSelected
          ? {
              backgroundColor: COLORS.red_primary,
              borderColor: COLORS.red_primary_darker,
            }
          : {
              backgroundColor: COLORS.yellow_primary,
              borderColor: COLORS.yellow_primary_darker,
            },
      ]}>
      <Text style={[styles.titleStyle, titleStyle]}>{title}</Text>
    </Pressable>
  );
};

export const CustomShip = React.memo(Ship);
