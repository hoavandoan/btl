/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
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
YellowBox.ignoreWarnings(['Warning: componentWillReceiveProps has been renamed']);

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import PayScreen from './src/components/screens/PayScreen';

const App = ({navigation}) => {
  return (
    <>
      <React.StrictMode>
        <StatusBar barStyle="dark-content" />
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
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
  scrollView: {
    backgroundColor: Colors.lighter,
  },
});

const AppNavigator = createStackNavigator({
  Home: {
    screen: App,
    navigationOptions:{
      headerTitle: 'Trang chủ'
    }
  },
  PayScreen: {
    screen: PayScreen,
    navigationOptions:{
      headerTitle: 'Nạp tiền vào ví'
    }
  }
},
    {
      initialRouteName: 'Home'
    }
);

export default createAppContainer(AppNavigator);
