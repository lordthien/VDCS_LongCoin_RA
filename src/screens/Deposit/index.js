import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import {images} from '../../theme';
import styles from './styles';
import MainBackground from '../../component/MainBackground';
import Button from '../../component/DepositOrBuy/Button';

export default function DepositOrBuy() {
  return (
    <View style={styles.container}>
      <MainBackground />

      <View style={styles.depositContainer}>
        <TouchableOpacity>
          <Image style={styles.buttonCan} source={images.buttonCancle} />
        </TouchableOpacity>
        <View style={{marginTop: 15}}>
          <Text style={styles.textHeader}>Deposit Coins</Text>
        </View>
        <View style={{marginTop: 26}}>
          <Text style={styles.text17}>Network: STELLAR</Text>
        </View>
        <View style={styles.qrCodeContainer}>
          <Image style={styles.qrCode} source={images.qrcode} />
        </View>
        <View style={styles.tokenContainer}>
          <Text style={styles.text17}>VDCS Address: </Text>
          <Text style={styles.text}>3M8w2knJKsr3jqMatYiyuraxVvZAmuZ</Text>
        </View>
        <View style={styles.buttomBottom}>
          <TouchableOpacity style={{flexDirection: 'row'}}>
            <Image style={styles.button} source={images.copy} />
            <Text style={styles.text19}>Copy</Text>
          </TouchableOpacity>
          <View style={{marginLeft: 22, marginRight: 22}}>
            <Image style={{height: 28, width: 1}} source={images.i} />
          </View>
          <TouchableOpacity style={{flexDirection: 'row'}}>
            <Image style={styles.button} source={images.share} />
            <Text style={styles.text19}>Share</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottomContainer}>
          <Button text="Buy VDCS" />
        </View>
      </View>
    </View>
  );
}
