import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';
// import {AntDesign} from 'react-native-vector-icons/AntDesign';

export default class DepositOrBuy extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> textInComponent </Text>
        {/* <AntDesign name="pluscircleo" size={24} color="black" /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});
