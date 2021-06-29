import {StyleSheet} from 'react-native';
import Color from '../../../../Theme/Color';
// import Color from '../../../../Theme/Color';
import {pxScale} from '../../../../Theme/Size';

export default StyleSheet.create({
  container: {
    width: pxScale.wp(150),
    height: pxScale.hp(48),
    // backgroundColor: 'yellow',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: pxScale.hp(16),
    marginLeft: pxScale.wp(8),
  },
  avatar: {
    width: pxScale.wp(40),
    height: pxScale.wp(40),
    borderRadius: pxScale.wp(20),
    // backgroundColor: 'red',
  },
  textContainer: {
    marginLeft: pxScale.wp(12),
  },
  name: {
    fontSize: pxScale.fontSize(19),
    fontWeight: '600',
    color: Color.textTitle,
  },
  phone: {
    fontSize: pxScale.fontSize(15),
    fontWeight: '400',
    color: Color.textSubtitle,
  },
});
