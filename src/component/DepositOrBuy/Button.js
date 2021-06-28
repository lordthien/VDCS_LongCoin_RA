import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {colors, images} from '../../theme';

export default function Button({text, images}) {
  return (
    <TouchableOpacity style={styles.buttonBuy}>
      <Image style={styles.imageContainer} source={images} />
      <Text style={styles.textButton}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    height: 28,
    width: 108,
    marginRight: 12,
    marginLeft: 24,
  },
  buttonBuy: {
    flexDirection: 'row',
    width: 339,
    height: 46,
    backgroundColor: colors.app,
    borderRadius: 23,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 26,
  },
  textButton: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 19,
    fontWeight: '600',
    color: '#FFF',
  },
});
