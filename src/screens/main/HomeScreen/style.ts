import {StyleSheet} from 'react-native';
import {COLORS} from 'shared';

export const styles = StyleSheet.create({
  imgContainer: {
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
  },
  flatListContent: {
    backgroundColor: COLORS.primary,
    paddingBottom: 52,
  },
  iconContainer: {
    alignItems: 'center',
    marginTop: 12,
  },
  listHeaderStyle: {
    // flex: 1,
    // paddingBottom: 100,
    backgroundColor: 'white',
    paddingHorizontal: 32,
    marginBottom: 64,
  },
  imageContainer: {
    width: 250,
    height: 90,
    alignSelf: 'center',
    resizeMode: 'center',
  },
  spacer: {
    backgroundColor: COLORS.primary,
    height: 1000,
    position: 'absolute',
    top: -1000,
    left: 0,
    right: 0,
  },
  itemSpace: {
    marginHorizontal: 32,
  },
});
