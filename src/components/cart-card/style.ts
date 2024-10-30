import {StyleSheet} from 'react-native';

import {COLORS} from 'shared';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderBottomColor: COLORS.red_primary,
    paddingVertical: 16,
    paddingLeft: 16,
  },
  redBox: {
    backgroundColor: COLORS.red_primary,
    width: 60,
    position: 'absolute',
    left: -30,
    top: 0,
    bottom: 0,
  },
  countContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 12,
    marginRight: 12,
    gap: 10,
  },
  priceText: {
    fontSize: 24,
    fontWeight: '700',
    color: COLORS.text_primary,
  },
  countText: {
    color: COLORS.dark_100,
    fontSize: 20,
    fontWeight: '900',
  },
  countBtn: {
    backgroundColor: COLORS.red_primary,
    borderRadius: 50,
    color: COLORS.text_primary,
    width: 20,
    height: 20,
    textAlign: 'center',
    fontWeight: '700',
  },
  title: {
    flex: 1,
    fontSize: 20,
    fontWeight: '600',
    color: COLORS.text_primary,
  },
  clearBtn: {
    color: COLORS.dark_000,
    backgroundColor: COLORS.dark_100,
    fontSize: 20,
  },
});
