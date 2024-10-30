import {StyleSheet} from 'react-native';
import {COLORS} from 'shared';

export const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: COLORS.primary,
    paddingHorizontal: 16,
  },
  eventCardContainer: {
    paddingTop: 12,
    marginBottom: 32,
    alignItems: 'center',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    marginHorizontal: 10,
    backgroundColor: COLORS.yellow_secondary,
  },
  eventCardContent: {
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
    paddingVertical: 12,
  },
  labelText: {
    fontSize: 18,
    fontWeight: '500',
    color: COLORS.dark_100,
  },
  eventTimeText: {
    fontSize: 20,
    fontWeight: '500',
    color: COLORS.dark_000,
    textAlign: 'center',
  },
});
