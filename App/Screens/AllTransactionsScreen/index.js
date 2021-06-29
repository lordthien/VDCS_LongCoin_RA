import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, FlatList, Modal} from 'react-native';
import Header from '../../Components/Header';
import styles from './styles';
import Transaction from './Components/Transaction';
import {appData} from '../../Data';
import {appImage} from '../../Assets/Images';
import FilterModal from './Components/FilterModal';

const choiceValue = [
  {
    type: 'Deposited',
    status: false,
  },
  {
    type: 'Withdrawn',
    status: false,
  },
  {
    type: 'Sent',
    status: false,
  },
  {
    type: 'Pay',
    status: false,
  },
];

const AllTransactionsScreen = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [choice, setChoice] = useState(choiceValue);
  const [data, setData] = useState(appData.transactionData);
  const [filterData, setFilterData] = useState([]);
  const setModal = visible => {
    setModalVisible(visible);
  };
  const typeChoice = index => {
    setChoice(choice => {
      choice[index].status = !choice[index].status;
      return [...choice];
    });
  };

  useEffect(() => {
    dataFilter();
  }, [choice]);
  const selectAll = () => {
    setChoice([]);
    choiceValue.forEach(item => {
      setChoice(prevVal => [...prevVal, {...item, status: true}]);
    });
  };
  const clearAll = () => {
    setChoice([]);
    choiceValue.forEach(item => {
      setChoice(prevVal => [...prevVal, {...item, status: false}]);
    });
  };
  const dataFilter = () => {
    let filteredData = [];
    choice.forEach(item => {
      if (item.status === true) {
        const dataFilter = data.filter(itemFilter => {
          return itemFilter.action.includes(item.type);
        });
        filteredData = [...filteredData, ...dataFilter];
      }
    });
    setFilterData(filteredData);
  };
  const renderItem = ({item, index}) => {
    return (
      <Transaction
        source={item.source}
        VDCS={item.VDCS}
        VND={item.VND}
        action={item.action}
        date={item.date}
        onPress={() => {
          navigation.navigate('TransactionDetailScreen', {
            item: item,
          });
        }}
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
          data={filterData.length !== 0 ? filterData : data}
          renderItem={renderItem}
          keyExtractor={(item, index) => {
            return index.toString();
          }}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <FilterModal
        isVisible={modalVisible}
        closeModal={() => {
          setModal(false);
        }}
        choiceArray={choice}
        onPressChoice={index => typeChoice(index)}
        selectAll={() => {
          selectAll();
        }}
        clearAll={() => {
          clearAll();
        }}
      />
    </View>
  );
};

export default AllTransactionsScreen;
