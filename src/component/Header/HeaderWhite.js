import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {images} from '../../theme';

export default function index({text}) {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity>
        <Image source={images.backWhite} style={styles.backButton} />
      </TouchableOpacity>
      <Text style={styles.textHeader}>{text}</Text>
      <View>{}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    width: 335,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 60,
  },
  backButton: {
    height: 24,
    width: 24,
  },
  textHeader: {
    fontSize: 26,
    color: '#FFF',
    fontWeight: '600',
  },
});
