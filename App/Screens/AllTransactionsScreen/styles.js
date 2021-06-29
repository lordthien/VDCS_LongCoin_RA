import {StyleSheet} from 'react-native';
import Color from '../../Theme/Color';
import {pxScale} from '../../Theme/Size';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.mainbackground,
    // backgroundColor: 'yellow',
  },
  transactionView: {
    // height: pxScale.hp(812),
    flex: 1,
    marginTop: pxScale.hp(38),
    backgroundColor: 'white',
    borderRadius: pxScale.wp(20),
    paddingVertical: pxScale.hp(22),
    // marginBottom: pxScale.hp(50),
  },
  bottom: {
    height: pxScale.hp(50),
    marginTop: pxScale.hp(22),
  },
});
