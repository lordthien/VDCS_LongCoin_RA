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

import Deposit from './screens/Deposit';
import Buy from './screens/Buy';

const App = () => {
  return (
    <View style={{flex: 1}}>
      {/* <Deposit /> */}
      <Buy />
    </View>
  );
};

export default App;
