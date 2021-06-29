import React, {useState} from 'react';
import {Text, View, TextInput, SectionList} from 'react-native';
import styles from './styles';
import Header from '../../Components/Header';
import {appImage} from '../../Assets/Images';
import {numberWithCommas} from '../../Theme/Size';
import {Input} from 'react-native-elements';
import Color from '../../Theme/Color';
import SectionListContacts from 'react-native-sectionlist-contacts';
import {appData} from '../../Data';
import Recipient from './Components/Recipient';
const ChooseRecipientScreen = () => {
  const [data, setData] = useState(appData.recipientData);
  const [filteredData, setFilteredData] = useState([]);
  const [search, setSearch] = useState('');
  const [colorLetter, setColorLetter] = useState(true);
  const onSearch = text => {
    if (text) {
      const dataFilter = appData.recipientData.filter(item => {
        const nameData = item.name ? item.name.toLowerCase() : ''.toLowerCase();
        const phoneData = item.phone
          ? item.phone.toLowerCase()
          : ''.toLowerCase();
        const textData = text.toLowerCase();
        return (
          nameData.indexOf(textData) > -1 || phoneData.indexOf(textData) > -1
        );
      });
      setFilteredData(dataFilter);
      setSearch(text);
      setColorLetter(false);
    } else {
      setFilteredData(appData.recipientData);
      setSearch(text);
      setColorLetter(true);
    }
  };
  const renderItem = (item, index) => {
    return (
      <Recipient name={item.name} phone={item.phone} source={item.source} />
    );
  };
  const renderHeader = params => {
    return (
      <View>
        {colorLetter === true && (
          <View style={styles.titleView}>
            <Text style={styles.titleText}>{params.key}</Text>
          </View>
        )}
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Header iconLeft={appImage.back} title={'Choose Recipient'} />
      <Text style={styles.underHeader}>{numberWithCommas(500000)} VDCS</Text>
      <View style={styles.smallContainer}>
        <TextInput
          placeholder="Search by names and numbers"
          placeholderTextColor={Color.gray}
          style={styles.searchText}
          value={search}
          onChangeText={text => onSearch(text)}
        />
        <View style={styles.bar}></View>
        <SectionListContacts
          sectionListData={filteredData.length !== 0 ? filteredData : data}
          showsVerticalScrollIndicator={false}
          SectionListClickCallback={(item, index) => {
            console.log('---SectionListClickCallback--:', item, index);
          }}
          renderItem={renderItem}
          renderHeader={renderHeader}
          letterViewStyle={styles.letterView}
          letterTextStyle={[
            styles.letterText,
            {color: colorLetter ? Color.gray3 : 'white'},
          ]}
        />
      </View>
    </View>
  );
};

export default ChooseRecipientScreen;
