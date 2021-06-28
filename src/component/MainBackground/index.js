import React from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import {images} from '../../theme';

export default function index() {
  return (
    <ImageBackground
      source={images.background}
      style={styles.backgroundContainer}
    />
  );
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    height: 812,
    // position: 'absolute',
  },
});
