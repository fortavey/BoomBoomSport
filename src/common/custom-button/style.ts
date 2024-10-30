import {StyleSheet} from 'react-native';

import {COLORS} from 'shared';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.red_primary,
    paddingHorizontal: 36,
    paddingVertical: 10,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderColor: COLORS.dark_100,
    borderWidth: 2,
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: 24,
    fontWeight: '800',
    color: COLORS.text_primary,
    textTransform: 'uppercase',
  },
});
