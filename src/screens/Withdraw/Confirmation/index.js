import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {colors, images} from '../../../theme';
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

        <View style={styles.bottomTicket}>
          <View style={{flex: 1, justifyContent: 'center', marginLeft: 16}}>
            <Text style={styles.textHeaderMiddle}>Amount</Text>
            <Text style={styles.text}>500,000.00 VDCS</Text>
          </View>
          <View style={{flex: 1, justifyContent: 'center', marginLeft: 16}}>
            <Text style={styles.textHeaderMiddle}>Amount (VNĐ)</Text>
            <Text style={styles.text}>500,000.00 VNĐ</Text>
          </View>
          <View style={{flex: 1, justifyContent: 'center', marginLeft: 16}}>
            <Text style={styles.textHeaderMiddle}>Withdraw fee</Text>
            <Text style={styles.text}>1,000.00 VDCS</Text>
          </View>
          <View style={{flex: 1, justifyContent: 'center', marginLeft: 16}}>
            <Text style={styles.textHeaderMiddle}>Total amount</Text>
            <Text style={styles.text}>499,000.00 VDCS</Text>
          </View>
          <View style={{flex: 2, alignItems: 'center'}}>
            <Button text="Confirm" />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.mainbackground},
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  middleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  topTicket: {
    height: 109,
    width: 327,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  token: {
    maxWidth: 180,
    maxHeight: 48,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  middleTicket: {
    flexDirection: 'row',
    marginTop: -18,
    marginLeft: -15,
    marginRight: -15,
    alignItems: 'center',
  },
  ovalLeft: {
    height: 18,
    width: 18,
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
    backgroundColor: colors.mainbackground,
  },
  ovalRight: {
    height: 18,
    width: 18,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
    backgroundColor: colors.mainbackground,
  },
  image: {
    height: 1,
    width: 309,
  },
  bottomTicket: {
    height: 453,
    width: 327,
    backgroundColor: '#FFF',
  },
  textHeader: {
    fontSize: 15,
    fontWeight: '400',
    color: colors.textSubtitle,
  },
  textHeaderMiddle: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.gray,
    marginBottom: 5,
  },
  text: {
    fontSize: 19,
    fontWeight: '600',
    color: colors.textTitle,
  },
});
