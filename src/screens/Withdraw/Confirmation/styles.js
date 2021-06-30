import {StyleSheet} from 'react-native';
import {colors} from '../../../theme';

export default StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.mainbackground},
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  middleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  topTicket: {
    height: 109,
    width: 327,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  token: {
    maxWidth: 180,
    maxHeight: 48,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  middleTicket: {
    flexDirection: 'row',
    marginTop: -18,
    marginLeft: -15,
    marginRight: -15,
    alignItems: 'center',
  },
  ovalLeft: {
    height: 18,
    width: 18,
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
    backgroundColor: colors.mainbackground,
  },
  ovalRight: {
    height: 18,
    width: 18,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
    backgroundColor: colors.mainbackground,
  },
  image: {
    height: 1,
    width: 309,
  },
  bottomTicket: {
    height: 453,
    width: 327,
    backgroundColor: '#FFF',
  },
  textContainer: {flex: 1, justifyContent: 'center', marginLeft: 16},
  textButton: {flex: 2, alignItems: 'center'},
  textHeader: {
    fontSize: 15,
    fontWeight: '400',
    color: colors.textSubtitle,
  },
  textHeaderMiddle: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.gray,
    marginBottom: 5,
  },
  text: {
    fontSize: 19,
    fontWeight: '600',
    color: colors.textTitle,
  },
});
