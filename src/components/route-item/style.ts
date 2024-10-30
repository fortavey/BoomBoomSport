import {StyleSheet} from 'react-native';

import {COLORS} from 'shared';

export const styles = StyleSheet.create({
  container: {},
  item: {
    paddingVertical: 10,
    marginBottom: 10,
    alignItems: 'center',
    backgroundColor: COLORS.yellow_primary,
    elevation: 3,
    borderRadius: 5,
    borderColor: COLORS.yellow_primary_darker,
    borderBottomWidth: 5,
    borderRightWidth: 4,
    borderTopLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  itemText: {
    color: COLORS.dark_100,
    fontWeight: '800',
    fontStyle: 'normal',
    fontSize: 30,
  },
});
