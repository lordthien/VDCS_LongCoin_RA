import React from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {appImage} from '../../../../assets/Images';
import styles from './styles';
const Transaction = ({source, VDCS, VND, action, date, onPress, containerStyle}) => {
  return (
    <TouchableOpacity style={[styles.container, containerStyle]} onPress={onPress}>
      <Image style={styles.icon} source={source} />
      <View style={styles.moneyView}>
        <Text style={styles.VDCSMoney}>{VDCS} VDCS</Text>
        <Text style={styles.VNDMoney}>{VND} VNĐ</Text>
      </View>
      <View style={styles.actionView}>
        <Text style={styles.actionText}>{action}</Text>
        <Text style={styles.VNDMoney}>{date}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Transaction;
