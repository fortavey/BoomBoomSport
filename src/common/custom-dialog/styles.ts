import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  dialogContainer: {
    zIndex: 1,
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  dialogBackground: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: '#D9D9D99E',
  },
  dialogContent: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});
