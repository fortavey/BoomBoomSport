import {StyleSheet} from 'react-native';

import {COLORS} from 'shared';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  headerTitle: {
    color: COLORS.dark_primary,
    fontSize: 32,
    fontWeight: '700',
    paddingBottom: 32,
    marginTop: 64,
    alignSelf: 'center',
  },
  scrollContainer: {
    flexGrow: 1,
    marginHorizontal: 16,
  },
  content: {
    backgroundColor: COLORS.red_primary,
    padding: 24,
    borderRadius: 10,
    paddingBottom: 100,
  },
  inputSpace: {
    marginBottom: 20,
    backgroundColor: COLORS.yellow_secondary,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  header: {
    marginTop: 22,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 22,
    position: 'absolute',
    bottom: -50,
    left: 0,
    right: 0,
  },
});
