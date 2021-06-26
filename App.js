import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';

import DepositOrBuy from './src/container/DepositOrBuy';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <DepositOrBuy />
    </View>
  );
};

export default App;
