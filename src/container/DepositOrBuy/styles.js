import {StyleSheet} from 'react-native';
import {colors, images} from '../../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundContainer: {
    flex: 1,
    height: 812,
    // position: 'absolute',
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
  qrCodeContainer: {
    height: 160,
    width: 160,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 16,
    marginTop: 23,
  },
  qrCode: {
    height: 136,
    width: 136,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tokenContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: 331,
    marginTop: 19,
  },
  buttomBottom: {
    flexDirection: 'row',
    marginTop: 20,
  },
  button: {
    height: 22,
    width: 22,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },

  bottomContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonBuy: {
    width: 339,
    height: 46,
    backgroundColor: colors.app,
    borderRadius: 23,
    justifyContent: 'center',
    alignItems: 'center',
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
    color: colors.app,
  },
  textButton: {
    fontSize: 19,
    fontWeight: '600',
    color: '#FFF',
  },
  text17: {
    alignItems: 'center',
    fontSize: 17,
    fontWeight: '600',
    color: colors.textTitle,
  },
  text: {
    fontSize: 19,
    fontWeight: '400',
    color: colors.textTitle,
    maxWidth: 200,
  },
});
