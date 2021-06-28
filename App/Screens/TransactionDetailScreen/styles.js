import {StyleSheet} from 'react-native';
import Color from '../../Theme/Color';
import {pxScale} from '../../Theme/Size';

export default StyleSheet.create({
  container: {
    backgroundColor: Color.mainbackground,
  },
  transactionView: {
    // height: pxScale.hp(859),
    marginTop: pxScale.hp(68),
    backgroundColor: 'white',
    borderRadius: pxScale.wp(20),
    paddingVertical: pxScale.hp(22),
    // alignItems: 'center',
    // paddingLeft: pxScale.wp(32),
  },
  iconView: {
    width: pxScale.wp(60),
    height: pxScale.wp(60),
    borderRadius: pxScale.wp(30),
    backgroundColor: Color.red,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: -pxScale.hp(52),
    // paddingLeft: -pxScale.wp(32),
  },
  icon: {
    width: pxScale.wp(30),
    height: pxScale.wp(30),
    resizeMode: 'contain',
    tintColor: 'white',
  },
  action: {
    fontWeight: '600',
    fontSize: pxScale.fontSize(19),
    lineHeight: pxScale.hp(24),
    color: Color.red,
    marginTop: pxScale.hp(8),
    alignSelf: 'center',
  },
  bar: {
    width: pxScale.wp(327),
    borderWidth: pxScale.hp(1),
    borderColor: '#EDEEF1',
    alignSelf: 'center',
    marginTop: pxScale.hp(16),
  },
});
