import React from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {images} from '../../theme';
import styles from './styles';
import Button from '../../component/DepositOrBuy/Button';

export default function index() {
  return (
    // <View style={styles.container}>
    <ImageBackground source={images.scan} style={styles.backGround}>
      <View style={styles.screenContainer}>
        <View style={styles.headerContainer}>
          <TouchableOpacity>
            <Image source={images.back} style={styles.backButton} />
          </TouchableOpacity>
          <Text style={styles.textHeader}>Scan QR Code</Text>
          <View>{}</View>
        </View>
        <ImageBackground source={images.frame} style={styles.frameContainer}>
          <View style={styles.frame}>
            <Image source={images.qrcode} style={styles.qrCode} />
          </View>
        </ImageBackground>
        <Text style={styles.text}>Position QR code inside the frame</Text>
        <View style={styles.bottomContainer}>
          <Button text="Scan Now" />
        </View>
      </View>
    </ImageBackground>
    // </View>
  );
}
