import React from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import AppNavigator from './Navigators/AppNavigator';
const App = () => {
  return (
    <View style={styles.container}>
      <AppNavigator />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
