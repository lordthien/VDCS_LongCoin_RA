import {StyleSheet} from 'react-native';
import {colors} from '../../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonCan: {
    height: 56,
    width: 56,
    marginTop: -28,
    borderRadius: 56 / 2,
  },
  depositContainer: {
    height: 569,
    backgroundColor: colors.mainbackground,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
  },
  termContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 17.48,
  },
  line: {
    height: 1.51,
    width: 327,
    marginTop: 8.55,
    alignItems: 'center',
  },
  checkImage: {
    height: 21,
    width: 21,
    marginRight: 16.5,
  },
  bottomContainer: {
    justifyContent: 'flex-end',
    marginBottom: 36,
  },
  textHeader: {
    alignItems: 'center',
    fontSize: 26,
    fontWeight: '600',
    color: colors.textTitle,
  },
  text19: {
    alignItems: 'center',
    fontSize: 19,
    fontWeight: '600',
    color: colors.textTitle,
  },
  text17: {
    alignItems: 'center',
    fontSize: 17,
    fontWeight: '600',
    color: colors.textTitle,
  },
  textTotal: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.gray,
  },
});
