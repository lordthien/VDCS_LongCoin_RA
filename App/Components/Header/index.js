import React from 'react';
import {Text, View, StatusBar, Image, TouchableOpacity} from 'react-native';
import {appImage} from '../../Assets/Images';
import Color from '../../Theme/Color';
import styles from './styles';
import PropTypes from 'prop-types';

const Header = ({iconLeft, title, iconRight}) => {
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={Color.mainbackground}
        barStyle={'dark-content'}
      />
      <View style={styles.headerView}>
        <TouchableOpacity>
          <Image style={styles.icon} source={iconLeft} />
        </TouchableOpacity>
        <Text style={styles.text}>{title}</Text>
        <TouchableOpacity>
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
