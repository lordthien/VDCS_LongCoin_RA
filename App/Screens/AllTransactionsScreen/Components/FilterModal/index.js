import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Modal,
  StatusBar,
  Pressable,
} from 'react-native';
import {appImage} from '../../../../Assets/Images';
import {appData} from '../../../../Data';
import Color from '../../../../Theme/Color';
import {pxScale} from '../../../../Theme/Size';
import styles from './styles';
const FilterModal = ({closeModal, isVisible}) => {
  const [choice, setChoice] = useState([false, false, false, false]);

  const typeChoice = index => () => {
    setChoice(choice => {
      choice[index] = !choice[index];
      return [...choice];
    });
  };
  const selectAll = () => {
    setChoice([true, true, true, true]);
  };
  const clearAll = () => {
    setChoice([false, false, false, false]);
  };
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
                          choice[index] === false ? null : Color.orange,
                        borderWidth: choice[index] === 1 ? 0 : pxScale.wp(1),
                      },
                    ]}
                    onPress={typeChoice(index)}>
                    <Image
                      style={styles.choiceIcon}
                      source={choice[index] === false ? null : appImage.tick}
                    />
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
