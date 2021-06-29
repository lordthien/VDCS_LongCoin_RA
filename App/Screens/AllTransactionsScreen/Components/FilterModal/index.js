import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  Modal,
  StatusBar,
  Pressable,
  Text,
  Image,
} from 'react-native';
import {appImage} from '../../../../Assets/Images';
import {appData} from '../../../../Data';
import Color from '../../../../Theme/Color';
import {pxScale} from '../../../../Theme/Size';
import styles from './styles';
const FilterModal = ({
  closeModal,
  isVisible,
  choiceArray,
  onPressChoice,
  selectAll,
  clearAll,
}) => {
  // console.log(choiceArray[3].status);
  return (
    <Modal animationType="fade" transparent={true} visible={isVisible}>
      <View style={styles.containerBig}>
        <StatusBar
          backgroundColor={'rgba(13, 31, 60, 0.5)'}
          barStyle={'black'}
          translucent={true}
        />
        <Pressable style={{flex: 1}} onPress={closeModal} />
        <View style={styles.container}>
          {/* --------------------- */}
          <View style={styles.header}>
            <Text style={styles.title}>Transactions type</Text>
            <TouchableOpacity onPress={closeModal}>
              <Text style={styles.closeText}>Done</Text>
            </TouchableOpacity>
          </View>
          {/* ---------------------- */}
          <View style={styles.actionView}>
            <TouchableOpacity style={styles.actionButton} onPress={selectAll}>
              <Text style={styles.actionText}>Select All</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton} onPress={clearAll}>
              <Text style={styles.actionText}>Clear All</Text>
            </TouchableOpacity>
          </View>
          {/* ---------------------- */}
          <View>
            {appData.transactionTypeData.map((item, index) => {
              return (
                <View style={styles.typeView} key={index.toString()}>
                  <View style={styles.iconView}>
                    <Image style={styles.icon} source={item.source} />
                  </View>
                  <Text style={styles.typeText}>{item.type}</Text>
                  <TouchableOpacity
                    style={[
                      styles.choice,
                      {
                        backgroundColor:
                          choiceArray[index].status === false
                            ? null
                            : Color.orange,
                        borderWidth:
                          choiceArray[index].status === false
                            ? pxScale.wp(1)
                            : 0,
                      },
                    ]}
                    onPress={() => onPressChoice(index)}
                    choiceArray={choiceArray}>
                    {choiceArray[index].status === true && (
                      <Image
                        style={styles.choiceIcon}
                        source={appImage.tick}
                        // PlaceholderContent={null}
                      />
                    )}
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
          {/* -------------------------- */}
        </View>
      </View>
    </Modal>
  );
};

export default FilterModal;
