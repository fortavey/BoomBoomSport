import {StyleSheet} from 'react-native';

import {COLORS} from 'shared';

export const styles = StyleSheet.create({
  container: {},
  chip: {
    paddingHorizontal: 6,
    paddingVertical: 12,
    alignItems: 'center',
    flex: 1,
    elevation: 3,
    borderRadius: 5,
    borderBottomWidth: 5,
    borderRightWidth: 4,
    borderTopLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  titleStyle: {
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.text_primary,
  },
});
