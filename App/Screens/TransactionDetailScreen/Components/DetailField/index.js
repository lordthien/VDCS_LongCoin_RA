import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {appImage} from '../../../../Assets/Images';
import {pxScale} from '../../../../Theme/Size';
import styles from './styles';
const DetailField = ({fieldStyle, title, subtitle, type, unit}) => {
  return (
    <View style={[styles.container, fieldStyle]}>
      {type === 1 && (
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>
            {subtitle} {unit}
          </Text>
        </View>
      )}
      {type === 2 && (
        <View style={{marginLeft: pxScale.wp(62)}}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>
            {subtitle} {unit}
          </Text>
        </View>
      )}
      {type === 3 && (
        <View>
          <Text style={styles.title}>{title}</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.status}>{subtitle}</Text>
            <TouchableOpacity>
              <Image style={styles.statusIcon} source={appImage.external} />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

export default DetailField;
