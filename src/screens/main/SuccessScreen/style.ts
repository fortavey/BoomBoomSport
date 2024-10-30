import {StyleSheet} from 'react-native';

import {COLORS} from 'shared';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    backgroundColor: COLORS.dark_000,
    paddingHorizontal: 16,
  },
  headerTitle: {
    color: COLORS.dark_000,
    fontSize: 32,
    fontWeight: '800',
    paddingBottom: 12,
  },
  successText: {
    color: COLORS.dark_000,
    fontSize: 26,
    fontWeight: '700',
    textAlign: 'center',
    paddingTop: 22,
  },
  descText: {
    fontSize: 24,
    fontWeight: '800',
    textAlign: 'center',
    paddingVertical: 32,
    paddingHorizontal: 22,
    color: COLORS.text_primary,
  },
  center: {
    padding: 70,
    borderRadius: 200,
    backgroundColor: COLORS.yellow_primary,
  },
  qrContainer: {
    backgroundColor: COLORS.dark_000,
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 32,
    paddingHorizontal: 16,
  },
});
