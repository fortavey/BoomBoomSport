import {StyleSheet} from 'react-native';

import {COLORS} from 'shared';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: COLORS.yellow_secondary,
    marginBottom: 16,
    marginHorizontal: 12,
    borderRadius: 12,
    overflow: 'hidden',
  },
  imgContainer: {
    width: 'auto',
    height: '100%',
  },
  productHeader: {
    padding: 6,
    marginBottom: 16,
    borderBottomWidth: 2,
    borderBottomColor: COLORS.red_primary,
  },
  productTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: COLORS.text_primary,
  },
  productDesc: {
    fontSize: 12,
    color: COLORS.text_secondary,
  },
  productFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    paddingBottom: 10,
    alignItems: 'center',
    gap: 6,
  },
  productPrice: {
    fontSize: 22,
    fontWeight: '500',
    alignSelf: 'flex-start',
    color: COLORS.dark_000,
    borderRadius: 10,
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: COLORS.red_primary,
  },
  addBtn: {
    backgroundColor: COLORS.dark_000,
    borderRadius: 6,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    paddingVertical: 2,
    paddingHorizontal: 6,
  },
  addBtnText: {
    color: COLORS.text_primary,
    borderColor: COLORS.text_primary,
  },
  chipWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 18,
  },
  chipTitle: {
    color: COLORS.dark_100,
    fontSize: 16,
    fontWeight: '700',
  },
  buttonTitle: {
    fontSize: 15,
    fontWeight: '800',
  },
  buttonWrapper: {
    marginLeft: 3,
    paddingHorizontal: 22,
    alignSelf: 'flex-start',
    backgroundColor: COLORS.red_primary,
  },
  countContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
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
});
