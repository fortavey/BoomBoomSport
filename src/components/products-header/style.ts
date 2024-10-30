import {StyleSheet} from 'react-native';
import {COLORS} from 'shared';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 22,
    marginTop: 18,
    alignItems: 'center',
  },
  space: {
    paddingHorizontal: 16,
  },
  headerText: {
    color: 'black',
    fontSize: 30,
    fontWeight: '800',
  },
  cartCount: {
    color: COLORS.text_primary,
    backgroundColor: COLORS.yellow_secondary,
    textAlign: 'center',
    borderRadius: 50,
    fontWeight: '700',
  },
});
