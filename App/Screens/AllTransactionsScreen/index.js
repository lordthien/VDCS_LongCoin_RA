import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList, Modal} from 'react-native';
import Header from '../../Components/Header';
import styles from './styles';
import Transaction from './Components/Transaction';
import {appData} from '../../Data';
import {appImage} from '../../Assets/Images';
import FilterModal from './Components/FilterModal';
const AllTransactionsScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const setModal = visible => {
    setModalVisible(visible);
  };
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
      <Header
        iconLeft={appImage.back}
        iconRight={appImage.filter}
        title={'All Transactions'}
        onPressRight={() => {
          setModal(true);
        }}
      />
      <View style={styles.transactionView}>
        <FlatList
          data={appData.transactionData}
          renderItem={renderItem}
          keyExtractor={(item, index) => {
            return index.toString();
          }}
        />
      </View>
      <FilterModal
        isVisible={modalVisible}
        closeModal={() => {
          setModal(false);
        }}
      />
    </View>
  );
};

export default AllTransactionsScreen;
