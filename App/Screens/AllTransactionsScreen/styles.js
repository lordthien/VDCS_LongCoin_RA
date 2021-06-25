import {StyleSheet} from 'react-native';
import Color from '../../Theme/Color';
import {pxScale} from '../../Theme/Size';

export default StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: Color.mainbackground,
  },
  transactionView: {
    height: pxScale.hp(812),
    marginTop: pxScale.hp(38),
    backgroundColor: 'white',
    borderRadius: pxScale.wp(20),
    paddingTop: pxScale.hp(22),
  },
});
