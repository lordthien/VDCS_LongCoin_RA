import React from 'react';
import {Text, View, Image} from 'react-native';
import {colors, images} from '../../../theme';

import styles from './styles';
import Header from '../../../component/Header/HeaderBlack';
import Button from '../../../component/Button';

export default function index() {
  return (
    <View style={styles.container}>
      <View style={{}}>
        <Header text="Withdraw" color={colors.textTitle} />
        <View style={styles.headerContainer}>
          <Text style={styles.textHeader}>Confirm your transaction</Text>
        </View>
      </View>
      {/* ------------------------------------------------------------------------------ */}
      <View style={styles.middleContainer}>
        <View style={styles.topTicket}>
          <Text style={styles.textHeaderMiddle}>Destination</Text>
          <View style={styles.token}>
            <Text style={styles.text}>3M8w2knJKsr3jqMatYiyuraxVvZAmuZ</Text>
          </View>
        </View>
        <View style={styles.middleTicket}>
          <View style={styles.ovalLeft}>{}</View>
          <Image source={images.lineWithdraw} style={styles.image} />
          <View style={styles.ovalRight}>{}</View>
        </View>
        {/* -------------------------------------------------------------------------- */}
        <View style={styles.bottomTicket}>
          <View style={styles.textContainer}>
            <Text style={styles.textHeaderMiddle}>Amount</Text>
            <Text style={styles.text}>500,000.00 VDCS</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.textHeaderMiddle}>Amount (VNĐ)</Text>
            <Text style={styles.text}>500,000.00 VNĐ</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.textHeaderMiddle}>Withdraw fee</Text>
            <Text style={styles.text}>1,000.00 VDCS</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.textHeaderMiddle}>Total amount</Text>
            <Text style={styles.text}>499,000.00 VDCS</Text>
          </View>
          <View style={styles.textButton}>
            <Button text="Confirm" />
          </View>
        </View>
        {/* -------------------------------------------------------------------------- */}
      </View>
    </View>
  );
}
