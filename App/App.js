import React from 'react';
import {View} from 'react-native';
// import Header from './src/components/Header';
// import Transaction from './src/screen/AllTransactionsScreen/component/Transaction';
import AllTransactionsScreen from './Screens/AllTransactionsScreen';
import TransactionDetailScreen from './Screens/TransactionDetailScreen';
import Button from './Components/Button';
const App = () => {
  return (
    <View>
      {/* <Header /> */}
      {/* <AllTransactionsScreen /> */}
      <TransactionDetailScreen />
      {/* <Transaction /> */}
      {/* <Button buttonText={'Back to Wallet'} /> */}
    </View>
  );
};

export default App;
