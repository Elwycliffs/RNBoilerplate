import React from 'react';
import { StyleSheet, View } from 'react-native';
const theme = require('../theme');

const styles = StyleSheet.create({
  gap: {
    width: '100%'
  }
});

export default (props) => (
  <View
    style={{ ...styles.gap, height: theme.default.Layout.spacing(props.scale) }}
  />
);
