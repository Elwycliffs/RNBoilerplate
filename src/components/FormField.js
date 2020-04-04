import React from 'react';
import { Item, Label, Input } from 'native-base';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  fieldWrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  fieldInput: {
    color: 'black'
  }
});

const Field = (props) => (
  <Item stackedLabel style={styles.fieldWrapper}>
    <Label>{props.label}</Label>
    <Input
      secureTextEntry={props.secure ? true : false}
      style={styles.fieldInput}
      placeholder={props.placeholder ? props.placeholder : ''}
    />
  </Item>
);

export default Field;
