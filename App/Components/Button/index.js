import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
const Button = ({buttonText, buttonStyle}) => {
  return (
    <TouchableOpacity style={[styles.container, buttonStyle]}>
      <Text style={styles.text}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
};

export default Button;
