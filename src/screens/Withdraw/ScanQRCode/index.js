import React from 'react';
import {Text, View, Image, ImageBackground} from 'react-native';
import {images} from '../../../theme';
import styles from './styles';
import Button from '../../../component/Button';
import Header from '../../../component/Header/HeaderWhite';

export default function index() {
  return (
    <ImageBackground source={images.scan} style={styles.backGround}>
      <View style={styles.screenContainer}>
        <View>
          <Header text="Scan QR Code" />
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
  );
}
