import {StyleSheet} from 'react-native';
import Color from '../../../../Theme/Color';
import {pxScale} from '../../../../Theme/Size';

export default StyleSheet.create({
  containerBig: {
    backgroundColor: 'rgba(13, 31, 60, 0.5)',
    // backgroundColor: 'yellow',
    flex: 1,
  },
  container: {
    // height: pxScale.hp(419),
    borderRadius: pxScale.wp(20),
    backgroundColor: 'white',
    paddingHorizontal: pxScale.wp(30),
    paddingVertical: pxScale.hp(30),
  },
  title: {
    fontSize: pxScale.fontSize(19),
    fontWeight: '600',
    color: Color.textTitle,
    lineHeight: pxScale.hp(24),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  closeText: {
    fontWeight: '600',
    fontSize: pxScale.fontSize(19),
    lineHeight: pxScale.hp(24),
    color: Color.orange,
  },
  actionView: {
    flexDirection: 'row',
    marginTop: pxScale.hp(24),
  },
  actionButton: {
    height: pxScale.hp(30),
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: pxScale.wp(12),
    backgroundColor: Color.gray1,
    borderRadius: pxScale.wp(15),
    paddingHorizontal: pxScale.wp(14),
  },
  actionText: {
    fontSize: pxScale.fontSize(15),
    fontWeight: '600',
    lineHeight: pxScale.hp(24),
    color: Color.orange,
  },
  typeView: {
    flexDirection: 'row',
    marginTop: pxScale.hp(24),
    alignItems: 'center',
    // backgroundColor: 'yellow',
  },
  iconView: {
    width: pxScale.wp(40),
    height: pxScale.wp(40),
    borderRadius: pxScale.wp(16),
    backgroundColor: Color.gray1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: pxScale.wp(20),
    height: pxScale.wp(20),
    resizeMode: 'contain',
    tintColor: Color.textTitle,
  },
  typeText: {
    fontSize: pxScale.fontSize(19),
    fontWeight: '600',
    color: Color.textTitle,
    marginLeft: pxScale.wp(18),
  },
  choiceIcon: {
    width: pxScale.wp(8),
    height: pxScale.wp(6),
    resizeMode: 'contain',
    tintColor: 'white',
  },
  choice: {
    position: 'absolute',
    right: 0,
    width: pxScale.wp(20),
    height: pxScale.wp(20),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: pxScale.wp(10),
    borderColor: Color.gray2,
  },
});
