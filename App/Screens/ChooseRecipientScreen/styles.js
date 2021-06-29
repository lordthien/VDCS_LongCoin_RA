import {StyleSheet} from 'react-native';
import Color from '../../Theme/Color';
import {pxScale} from '../../Theme/Size';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.mainbackground,
  },
  underHeader: {
    marginTop: pxScale.hp(8),
    fontSize: pxScale.fontSize(15),
    fontWeight: '400',
    color: Color.textSubtitle,
    alignSelf: 'center',
  },
  smallContainer: {
    // height: pxScale.hp(812),
    flex: 1,
    marginTop: pxScale.hp(38),
    backgroundColor: 'white',
    borderTopLeftRadius: pxScale.wp(20),
    borderTopRightRadius: pxScale.wp(20),
    paddingTop: pxScale.hp(22),
    paddingHorizontal: pxScale.wp(24),
    // backgroundColor: 'yellow',
  },
  searchText: {
    fontSize: pxScale.fontSize(19),
    fontWeight: '400',
    color: Color.textTitle,
  },
  bar: {
    width: '100%',
    borderWidth: pxScale.hp(1),
    borderColor: Color.gray2,
    alignSelf: 'center',
    marginBottom: pxScale.hp(8),
  },
  titleText: {
    fontSize: pxScale.fontSize(15),
    fontWeight: '400',
    color: Color.gray3,
  },
  titleView: {
    marginBottom: pxScale.hp(12),
  },
  letterView: {
    // backgroundColor: 'yellow',
    justifyContent: 'flex-start',
  },
  letterText: {
    fontSize: pxScale.fontSize(12),
    fontWeight: '600',
    color: Color.gray3,
    marginBottom: pxScale.hp(8),
  },
});
