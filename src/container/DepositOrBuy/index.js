import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import {colors, images} from '../../theme';
import styles from './styles';

export default function DepositOrBuy() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={images.background}
        style={styles.backgroundContainer}
      />

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
          <TouchableOpacity style={styles.buttonBuy}>
            <Text style={styles.textButton}>Buy VDCS</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
