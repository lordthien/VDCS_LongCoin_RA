import {StyleSheet} from 'react-native';
import Color from '../../Theme/Color';
import {pxScale} from '../../Theme/Size';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    // backgroundColor: Color.mainbackground,
  },
  headerView: {
    marginTop: pxScale.hp(60),
    width: pxScale.wp(334),
    height: pxScale.hp(32),
    backgroundColor: Color.mainbackground,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  icon: {
    width: pxScale.hp(24),
    height: pxScale.wp(24),
    resizeMode: 'contain',
  },
  text: {
    fontSize: pxScale.fontSize(26),
    fontWeight: '600',
    lineHeight: pxScale.hp(32),
  },
});
