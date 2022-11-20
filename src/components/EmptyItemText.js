import {View, Text} from 'react-native';
import React from 'react';
import {StyleSheet} from 'react-native';
import {todoColors as colors} from '../constants/Colors';

const styles = StyleSheet.create({
  emptyTaskText: {
    fontSize: 20,
    color: colors.errorGreyColor,
    textAlign: 'center',
  },
});

export default function EmptyItemText({text}) {
  return <Text style={styles.emptyTaskText}>{text}</Text>;
}
