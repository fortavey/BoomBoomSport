import {StyleSheet} from 'react-native';

import {COLORS} from 'shared';

export const styles = StyleSheet.create({
  flatListContent: {
    flexGrow: 1,
    backgroundColor: COLORS.dark_000,
    paddingHorizontal: 32,
  },
  cardContainer: {
    marginBottom: 10,
  },
  cardContent: {
    padding: 12,
    paddingBottom: 16,
    borderRadius: 12,
    alignItems: 'center',
    overflow: 'hidden',
    backgroundColor: COLORS.red_primary,
  },
  headerContainer: {
    marginBottom: 32,
    backgroundColor: COLORS.primary,
  },
  cardHeader: {
    fontSize: 22,
    marginBottom: 12,
    fontWeight: '500',
    textAlign: 'center',
    color: COLORS.text_primary,
  },
  teams: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 16,
    gap: 12,
  },
  teamText: {
    fontSize: 24,
    fontWeight: '500',
    color: COLORS.dark_000,
    flexShrink: 1,
    textAlign: 'center',
  },
  timeText: {
    fontSize: 24,
    fontWeight: '500',
    color: COLORS.dark_000,
  },
});
