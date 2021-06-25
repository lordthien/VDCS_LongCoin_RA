import {StyleSheet} from 'react-native';
import Color from '../../../../Theme/Color';
import {pxScale} from '../../../../Theme/Size';

export default StyleSheet.create({
  container: {
    height: pxScale.hp(52),
    // width: pxScale.wp(),
    marginLeft: pxScale.wp(32),
  },
  title: {
    fontSize: pxScale.fontSize(15),
    fontWeight: '600',
    lineHeight: pxScale.hp(24),
    color: Color.gray,
  },
  subtitle: {
    fontSize: pxScale.fontSize(19),
    fontWeight: '400',
    lineHeight: pxScale.hp(24),
    color: Color.textTitle,
  },
  status: {
    fontSize: pxScale.fontSize(19),
    fontWeight: '600',
    color: Color.orange,
    lineHeight: pxScale.hp(24),
  },
  statusIcon: {
    width: pxScale.wp(20),
    height: pxScale.wp(20),
    resizeMode: 'contain',
    marginLeft: pxScale.wp(8),
  },
});
