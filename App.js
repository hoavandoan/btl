/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useEffect, useState} from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {
  Button,
  StyleSheet,
  View,
  Text,
  StatusBar,
  YellowBox
} from 'react-native';
YellowBox.ignoreWarnings([
    'Warning: componentWillReceiveProps has been renamed',
    'Warning: '
]);

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import PayScreen from './src/components/screens/PayScreen';

const App = ({navigation}) => {
  const [totalAmount,setTotalAmount] = useState(1000000)
  const money = navigation.getParam('money')
  useEffect(()=>{
    if(money){
      setTotalAmount(totalAmount+parseInt(money))
    }
  },[money])
  return (
    <>
      <React.StrictMode>
        <StatusBar barStyle="dark-content" backgroundColor='#1976d2'/>
        <View style={styles.container }>
          <Text>Tài khoản của bạn là {totalAmount }</Text>
          <Button
              title="Go to Pay Gate"
              onPress={() => navigation.navigate('PayScreen')}
          />
        </View>
      </React.StrictMode>

    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.lighter,
  },
});

const AppNavigator = createStackNavigator({
  Home: {
    screen: App,
    navigationOptions:{
      headerTitle: 'Trang chủ',
      headerTintColor:'#FFFFFF',
      headerStyle: {
        backgroundColor: '#1976d2',
        fontWeight: 'bold'
      },
    }
  },
  PayScreen: {
    screen: PayScreen,
    navigationOptions:{
      headerTitle: 'Nạp tiền vào ví',
      headerTintColor:'#FFFFFF',
      headerStyle: {
        backgroundColor: '#1976d2',
        fontWeight: 'bold'
      },
    }
  }
},
    {
      initialRouteName: 'Home'
    }
);

export default createAppContainer(AppNavigator);
