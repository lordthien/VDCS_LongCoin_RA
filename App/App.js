import React from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
// import Header from './src/components/Header';
// import Transaction from './src/screen/AllTransactionsScreen/component/Transaction';
import AllTransactionsScreen from './Screens/AllTransactionsScreen';
import TransactionDetailScreen from './Screens/TransactionDetailScreen';
import Button from './Components/Button';
const App = () => {
  return (
    <View style={styles.container}>
      {/* <StatusBar translucent={true} /> */}
      {/* <Header /> */}
      <AllTransactionsScreen />
      {/* <TransactionDetailScreen /> */}
      {/* <Transaction /> */}
      {/* <Button buttonText={'Back to Wallet'} /> */}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: "center",
    // justifyContent: "center",
  },
});
export default App;
