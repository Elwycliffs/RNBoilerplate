import React from 'react';
import { Item, Label, Input } from 'native-base';
import { StyleSheet, YellowBox } from 'react-native';
const theme = require('../theme');

const styles = StyleSheet.create({
  fieldWrapper: {
    width: '100%',
    marginTop: 0,
    borderColor: theme.default.palette.secondary.main
  },
  fieldInput: {
    color: 'black',
    padding: 0
  }
});

const Field = (props) => {
  YellowBox.ignoreWarnings(['Animated: `useNativeDriver`']);
  return (
    <Item
      bordered={false}
      underline={false}
      floatingLabel
      stackedLabel
      last
      style={styles.fieldWrapper}
    >
      <Label>{props.label}</Label>
      <Input
        secureTextEntry={props.secure ? true : false}
        style={styles.fieldInput}
        placeholder={props.placeholder ? props.placeholder : ''}
      />
    </Item>
  );
};

export default Field;
