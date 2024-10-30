import React, {useEffect, useMemo} from 'react';
import {View, Animated} from 'react-native';
import {styles} from './style';

export const CustomLoading: React.FC = () => {
  const rotateAnim = useMemo(() => new Animated.Value(0), []);

  useEffect(() => {
    Animated.loop(
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true,
      }),
    ).start();
  }, [rotateAnim]);

  const spin = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('shared/assets/images/loading.png')}
        style={[{width: 100, height: 100}, {transform: [{rotate: spin}]}]}
      />
    </View>
  );
};
