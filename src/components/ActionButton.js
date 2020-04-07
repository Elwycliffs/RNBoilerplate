import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Button, Text } from 'native-base';
const theme = require('../theme');

const styles = StyleSheet.create({
  wrapper: {
    width: '100%'
  },
  actionButton: {
    backgroundColor: theme.default.palette.primary.base,
    display: 'flex',
    alignItems: 'center'
  }
});

const ActionButton = (props) => (
  <View style={styles.wrapper}>
    <Button
      style={{
        ...styles.actionButton,
        justifyContent: props.center ? 'center' : 'flex-start'
      }}
    >
      <Text>{props.label}</Text>
    </Button>
  </View>
);

export default ActionButton;
