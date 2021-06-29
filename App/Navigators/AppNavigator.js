import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import TransactionDetailScreen from '../Screens/TransactionDetailScreen';
import AllTransactionsScreen from '../Screens/AllTransactionsScreen';
<<<<<<< HEAD
import ChooseRecipientScreen from '../Screens/ChooseRecipientScreen';
=======
>>>>>>> 1cf528ee14d5251dbc54ea247830de8ff5c76d35

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode={'none'}
<<<<<<< HEAD
        initialRouteName={'ChooseRecipientScreen'}>
=======
        initialRouteName={'TransactionDetailScreen'}>
>>>>>>> 1cf528ee14d5251dbc54ea247830de8ff5c76d35
        <Stack.Screen
          name="AllTransactionsScreen"
          component={AllTransactionsScreen}
        />
        <Stack.Screen
          name="TransactionDetailScreen"
          component={TransactionDetailScreen}
        />
<<<<<<< HEAD
        <Stack.Screen
          name="ChooseRecipientScreen"
          component={ChooseRecipientScreen}
        />
=======
>>>>>>> 1cf528ee14d5251dbc54ea247830de8ff5c76d35
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
