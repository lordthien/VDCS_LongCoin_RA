import {StyleSheet} from 'react-native';
import Color from '../../Theme/Color';
import {pxScale} from '../../Theme/Size';

export default StyleSheet.create({
  container: {
    width: pxScale.wp(200),
    height: pxScale.hp(46),
    borderRadius: pxScale.wp(23),
    backgroundColor: Color.orange,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  text: {
    fontSize: pxScale.fontSize(19),
    lineHeight: pxScale.hp(24),
    fontWeight: '600',
    color: 'white',
  },
});
