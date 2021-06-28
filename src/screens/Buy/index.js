import React from 'react';
import {Text, View, TouchableOpacity, Image, TextInput} from 'react-native';

import {images} from '../../theme';
import styles from './styles';
import MainBackground from '../../component/MainBackground';
import Button from '../../component/DepositOrBuy/ButtonDepositOrBuy';

export default function Buy() {
  return (
    <View style={styles.container}>
      <MainBackground />

      <View style={styles.depositContainer}>
        <TouchableOpacity>
          <Image style={styles.buttonCan} source={images.buttonCancle} />
        </TouchableOpacity>

        <View style={{marginTop: 15}}>
          <Text style={styles.textHeader}>Buy VDCS</Text>
        </View>
        <View style={{marginTop: 32, alignItems: 'flex-start', width: 341}}>
          <Text style={styles.textTotal}>Total amount (VDCS)</Text>
        </View>
        <View style={{marginTop: 3.68, alignItems: 'flex-start', width: 341}}>
          <TextInput style={styles.text19} placeholder="Enter Value" />
          <Image style={styles.line} source={images.line} />
        </View>

        <View style={styles.termContainer}>
          <Image style={styles.checkImage} source={images.check} />
          <Text style={styles.text17}>
            Agree with our policy and term of use
          </Text>
        </View>

        <View style={styles.bottomContainer}>
          <Button images={images.vnpay} text="Pay via VNPAY" />
          <Button images={images.zalopay} text="Pay via ZALOPAY" />
        </View>
      </View>
    </View>
  );
}
