import {StyleSheet} from 'react-native';
import {COLORS} from 'shared';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    backgroundColor: COLORS.loadingBG,
  },
});
