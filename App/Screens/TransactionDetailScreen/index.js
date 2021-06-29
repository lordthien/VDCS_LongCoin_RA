import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {appImage} from '../../Assets/Images';
import Header from '../../Components/Header';
import Button from '../../Components/Button';
import {appData} from '../../Data';
import {pxScale} from '../../Theme/Size';
import DetailField from './Components/DetailField';
import styles from './styles';
import Color from '../../Theme/Color';
const TransactionDetailScreen = ({route, navigation}) => {
  // console.log(appData.transactionData[0].detail);
  const {item} = route.params;
  // console.log(item);
  // console.log(route);
  const backgroundIcon =
    item.status === 'Transaction Confirmed' && item.action.includes('Withdrawn')
      ? Color.red
      : item.status === 'Transaction Confirmed' &&
        item.action.includes('Deposited')
      ? Color.green
      : item.status === 'Transaction Confirmed' && item.action.includes('Sent')
      ? Color.blue1
      : item.status === 'Transaction Confirmed' && item.action.includes('pay')
      ? Color.red
      : item.status === 'Pending'
      ? Color.yellow
      : Color.red;
  const actionText =
    item.status === 'Pending'
      ? 'Pending Withdrawal'
      : item.status === 'Rejected'
      ? 'Rejected withdraw'
      : item.action;
  const sourceImage =
    item.status === 'Pending'
      ? appImage.clock
      : item.status === 'Rejected'
      ? appImage.cross
      : item.source;
  return (
    <View style={styles.container}>
      <Header
        iconLeft={appImage.back}
        title={'Transaction Details'}
        onPressLeft={() => {
          navigation.goBack();
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.transactionView}>
          <View style={[styles.iconView, {backgroundColor: backgroundIcon}]}>
            <Image style={styles.icon} source={sourceImage} />
          </View>
          <Text style={[styles.action, {color: backgroundIcon}]}>
            {actionText}
          </Text>

          <View>
            <View
              style={{
                flexDirection: 'row',
              }}>
              {item.detail.date.map((item, index) => {
                return (
                  <DetailField
                    title={item.title}
                    subtitle={item.subtitle}
                    key={index.toString()}
                    fieldStyle={{
                      marginTop: pxScale.hp(15),
                    }}
                    type={item.type}
                  />
                );
              })}
            </View>
            <View style={styles.bar}></View>
            {item.detail.amount.map((item, index) => {
              return (
                <DetailField
                  title={item.title}
                  subtitle={item.subtitle}
                  unit={item.unit}
                  key={index.toString()}
                  type={item.type}
                  fieldStyle={{
                    marginTop: pxScale.hp(15),
                  }}
                />
              );
            })}
            <DetailField
              title={'Status'}
              subtitle={item.status}
              type={3}
              fieldStyle={{
                marginTop: pxScale.hp(15),
              }}
            />
            <View style={styles.bar}></View>
            {item.detail.id.map((item, index) => {
              return (
                <DetailField
                  title={item.title}
                  subtitle={item.subtitle}
                  key={index.toString()}
                  type={item.type}
                  fieldStyle={{
                    marginTop: pxScale.hp(20.18),
                  }}
                />
              );
            })}
            <Button
              buttonText={'Back to Wallet'}
              buttonStyle={{marginTop: pxScale.hp(32)}}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default TransactionDetailScreen;
