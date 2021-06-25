import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import Header from '../../Components/Header';
import styles from './styles';
import Transaction from './Components/Transaction';
import {appData} from '../../Data';
const AllTransactionsScreen = () => {
  const renderItem = ({item, index}) => {
    return (
      <Transaction
        source={item.source}
        VDCS={item.VDCS}
        VND={item.VND}
        action={item.action}
        date={item.date}
      />
    );
  };
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.transactionView}>
        {/* <Transaction /> */}
        <FlatList
          data={appData.transactionData}
          renderItem={renderItem}
          keyExtractor={(item, index) => {
            return index.toString();
          }}
        />
      </View>
    </View>
  );
};

export default AllTransactionsScreen;
