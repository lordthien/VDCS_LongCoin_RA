import {StyleSheet} from 'react-native';
import Color from '../../../../Theme/Color';
import {pxScale} from '../../../../Theme/Size';

export default StyleSheet.create({
  container: {
    width: pxScale.wp(327),
    height: pxScale.hp(60),
    borderRadius: pxScale.wp(30),
    backgroundColor: Color.mainbackground,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
    marginBottom: pxScale.hp(14),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  icon: {
    width: pxScale.wp(24),
    height: pxScale.hp(24),
    resizeMode: 'contain',
    marginLeft: pxScale.wp(16),
  },
  moneyView: {
    marginLeft: pxScale.wp(20),
  },
  VDCSMoney: {
    fontSize: pxScale.fontSize(15),
    fontWeight: '600',
    lineHeight: pxScale.hp(24),
    color: Color.textTitle,
  },
  VNDMoney: {
    fontSize: pxScale.fontSize(15),
    fontWeight: '400',
    lineHeight: pxScale.hp(24),
    color: Color.textSubtitle,
  },
  actionView: {
    // marginLeft: pxScale.wp(110),
    alignItems: 'flex-end',
    position: 'absolute',
    right: pxScale.wp(20),
  },
  actionText: {
    fontSize: pxScale.fontSize(15),
    fontWeight: '600',
    lineHeight: pxScale.hp(24),
    color: Color.red,
  },
});
