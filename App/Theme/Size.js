import {Platform, Dimensions} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {RFValue} from 'react-native-responsive-fontsize';
import moment from 'moment';

// import axios from './axios';
// import {countries} from '../constants';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

// export const isIos = Platform.OS === 'ios';

export const pxScale = {
  guidelineBaseWidth: 375,
  guidelineBaseHeight: 812,
  widthScale() {
    return SCREEN_WIDTH / this.guidelineBaseWidth;
  },
  heightScale() {
    return SCREEN_HEIGHT / this.guidelineBaseHeight;
  },

  wp(px) {
    const percentage = (px / this.guidelineBaseWidth) * 100;

    return wp(percentage);
  },

  hp(px) {
    const scale = 1;

    const percentage = (px / scale / this.guidelineBaseHeight) * 100;

    return hp(percentage);
  },

  fontSize(px, baseHeight = this.guidelineBaseHeight) {
    return RFValue(px, baseHeight);
  },
};

export const numberWithCommas = x => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
};

// export const timezone = isIos
//   ? Intl.DateTimeFormat().resolvedOptions().timeZone
//   : '';
// export const eventUtils = {
//   listeners: [],
//   addEventListener: (eventName, id, listener) => {
//     const index = eventUtils.listeners.findIndex(
//       x => x.id === id && x.eventName === eventName,
//     );
//     if (index > -1) {
//       eventUtils.listeners[index].listener = listener;
//     } else {
//       eventUtils.listeners.push({
//         eventName,
//         id,
//         listener,
//       });
//     }
//   },

//   removeEventListener: (eventName, id) => {
//     const index = eventUtils.listeners.findIndex(
//       x => x.id === id && x.eventName === eventName,
//     );
//     if (index > -1) {
//       eventUtils.listeners.splice(index, 1);
//     }
//   },

//   triggerEvent: (eventName, data) => {
//     const listeners = eventUtils.listeners.filter(
//       x => x.eventName === eventName,
//     );
//     listeners.forEach(l => {
//       typeof l.listener === 'function' && l.listener(data);
//     });
//   },
// };

export const formatDay = day => {
  return moment(day).format('ddd,MMM DD');
};
export const numberDayBeatweenTwoDay = (from, to) => {
  if (typeof from === 'number' && typeof to === 'number') {
    const numberSecond = to - from;
    return numberSecond ? numberSecond / (60 * 60 * 24) / 1000 + 1 : 1;
  }
  return null;
};
