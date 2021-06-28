import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  backGround: {
    flex: 1,
    height: 812,
  },
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerContainer: {
    width: 335,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 60,
  },
  backButton: {
    height: 24,
    width: 24,
  },
  frameContainer: {
    flex: 1,
    height: 265,
    width: 265,
    marginTop: 153,
  },
  frame: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  qrCode: {
    height: 160,
    width: 160,
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textHeader: {
    fontSize: 26,
    color: '#FFF',
    fontWeight: '600',
  },
  text: {
    fontSize: 15,
    color: '#FFF',
    fontWeight: '400',
  },
});
