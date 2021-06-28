import React from 'react';
import {ScrollView, View} from 'react-native';

import Deposit from './screens/Deposit';
import Buy from './screens/Buy';
import WithdrawScanQRCode from './screens/WithdrawScanQRCode';

const App = () => {
  return (
    <View style={{flex: 1}}>
      {/* <Deposit /> */}
      {/* <Buy /> */}
      <WithdrawScanQRCode />
    </View>
  );
};

export default App;
