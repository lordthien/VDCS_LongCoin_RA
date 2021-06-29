import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import TransactionDetailScreen from '../Screens/TransactionDetailScreen';
import AllTransactionsScreen from '../Screens/AllTransactionsScreen';
import ChooseRecipientScreen from '../Screens/ChooseRecipientScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode={'none'}
        initialRouteName={'ChooseRecipientScreen'}>
        <Stack.Screen
          name="AllTransactionsScreen"
          component={AllTransactionsScreen}
        />
        <Stack.Screen
          name="TransactionDetailScreen"
          component={TransactionDetailScreen}
        />
        <Stack.Screen
          name="ChooseRecipientScreen"
          component={ChooseRecipientScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
