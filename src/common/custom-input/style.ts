import {StyleSheet} from 'react-native';

import {COLORS} from 'shared';

export const styles = StyleSheet.create({
  container: {},
  inputContainer: {
    backgroundColor: '#DCDFE566',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderRadius: 12,
  },
  labelContainer: {
    marginBottom: 12,
  },
  textInputStyle: {
    fontSize: 17,
    fontWeight: '500',
    color: COLORS.dark_100,
  },
  labelText: {
    color: COLORS.dark_000,
    fontWeight: '500',
  },
});
