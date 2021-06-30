import React from 'react';
import {ScrollView, View} from 'react-native';

import Deposit from './screens/Deposit';
import Buy from './screens/Buy';
import ScanQRCode from './screens/Withdraw/ScanQRCode';
import Confirmation from './screens/Withdraw/Confirmation';

const App = () => {
  return (
    <View style={{flex: 1}}>
      {/* <Deposit /> */}
      {/* <Buy /> */}
      {/* <ScanQRCode /> */}
      <Confirmation />
    </View>
  );
};

export default App;
