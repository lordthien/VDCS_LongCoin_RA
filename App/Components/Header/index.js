import React from 'react';
import {Text, View, StatusBar, Image, TouchableOpacity} from 'react-native';
import {appImage} from '../../Assets/Images';
import Color from '../../Theme/Color';
import styles from './styles';
const Header = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={Color.mainbackground}
        barStyle={'dark-content'}
      />
      <View style={styles.headerView}>
        <TouchableOpacity>
          <Image style={styles.icon} source={appImage.back} />
        </TouchableOpacity>
        <Text style={styles.text}>All Transactions</Text>
        <TouchableOpacity>
          <Image style={styles.icon} source={appImage.filter} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
