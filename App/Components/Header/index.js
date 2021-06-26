import React from 'react';
import {Text, View, StatusBar, Image, TouchableOpacity} from 'react-native';
import {appImage} from '../../Assets/Images';
import Color from '../../Theme/Color';
import styles from './styles';
import PropTypes from 'prop-types';

const Header = ({iconLeft, title, iconRight, onPressLeft, onPressRight}) => {
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={Color.mainbackground}
        barStyle={'dark-content'}
        translucent={true}
      />
      <View style={styles.headerView}>
        <TouchableOpacity onPress={onPressLeft}>
          <Image style={styles.icon} source={iconLeft} />
        </TouchableOpacity>
        <Text style={styles.text}>{title}</Text>
        <TouchableOpacity onPress={onPressRight}>
          <Image style={styles.icon} source={iconRight} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

Header.propTypes = {
  iconLeft: PropTypes.node,
  iconRight: PropTypes.node,
  title: PropTypes.string.isRequired,
};

export default Header;
