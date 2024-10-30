import React from 'react';

import {StyleProp, Text, TouchableOpacity, ViewStyle} from 'react-native';

import {styles} from './style';

interface RouteItemProps {
  route: any;
  onItemPress(): void;
  wrapperStyle?: StyleProp<ViewStyle>;
}

export const RouteItem: React.FC<RouteItemProps> = ({
  route,
  onItemPress,
  wrapperStyle,
}) => {
  return (
    <TouchableOpacity style={[styles.item, wrapperStyle]} onPress={onItemPress}>
      <Text style={styles.itemText}>{route.title}</Text>
    </TouchableOpacity>
  );
};
