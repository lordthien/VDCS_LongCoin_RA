import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Deposit() {
  return (
    <View style={{flex: 1}}>
      <Text>Text</Text>
      <View style={styles.depositContainer}>
        <Text>Text</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  depositContainer: {
    flex: 1,
    height: 569,
    marginTop: 243,
    backgroundColor: 'green',
  },
});
