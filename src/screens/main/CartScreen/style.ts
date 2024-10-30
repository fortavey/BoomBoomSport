import {StyleSheet} from 'react-native';

import {COLORS} from 'shared';

export const styles = StyleSheet.create({
  flatListContent: {
    flexGrow: 1,
    paddingBottom: 30,
  },
  headerStyle: {
    color: COLORS.text_primary,
    fontWeight: '800',
    fontSize: 24,
  },
  listContainer: {
    backgroundColor: COLORS.yellow_secondary,
    borderRadius: 10,
    marginHorizontal: 16,
    height: '70%',
    marginVertical: 40,
  },
  footerContainer: {
    paddingHorizontal: 16,
    borderTopColor: COLORS.red_primary,
    borderTopWidth: 2,
    paddingVertical: 16,
  },
  footerContent: {
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sumText: {
    color: COLORS.text_primary,
    fontSize: 22,
    fontWeight: '700',
  },
  listHeaderStyle: {
    marginBottom: 22,
    backgroundColor: COLORS.primary,
    paddingHorizontal: 16,
  },
  emptyListContainer: {
    padding: 30,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    marginBottom: 50,
  },
  emptyListCircle: {
    gap: 20,
    padding: 30,
    aspectRatio: 1,
    borderRadius: 200,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: COLORS.yellow_primary,
  },
});
