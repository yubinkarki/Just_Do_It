import React from 'react';
import Navigation from './src/components/Navigation';
import {StatusBar, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import Store from './src/redux/Store';
import Toast from 'react-native-toast-message';
import {todoColors as colors} from './src/constants/Colors';

export const styles = StyleSheet.create({
  headerText: {
    color: 'black',
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default function App() {
  return (
    <Provider store={Store}>
      <StatusBar backgroundColor={colors.backgroundColor} />
      <Navigation />
      <Toast />
    </Provider>
  );
}
