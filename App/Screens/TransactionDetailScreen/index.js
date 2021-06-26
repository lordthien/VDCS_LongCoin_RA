import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {appImage} from '../../Assets/Images';
import Header from '../../Components/Header';
import Button from '../../Components/Button';
import {appData} from '../../Data';
import {pxScale} from '../../Theme/Size';
import DetailField from './Components/DetailField';
import styles from './styles';
const TransactionDetailScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header iconLeft={appImage.back} title={'Transaction Details'} />
        <View style={styles.transactionView}>
          <View style={styles.iconView}>
            <Image style={styles.icon} source={appImage.withdrawn} />
          </View>
          <Text style={styles.action}>Withdrawn</Text>

          <View>
            <View
              style={{
                flexDirection: 'row',
              }}>
              {appData.transactionDetails.date.map((item, index) => {
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
            {appData.transactionDetails.amount.map((item, index) => {
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
            <View style={styles.bar}></View>
            {appData.transactionDetails.id.map((item, index) => {
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
