import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors} from '../../theme';

export default function Button({text}) {
  return (
    <TouchableOpacity style={styles.buttonBuy}>
      <Text style={styles.textButton}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonBuy: {
    width: 200,
    height: 46,
    backgroundColor: colors.app,
    borderRadius: 23,
    justifyContent: 'center',
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
