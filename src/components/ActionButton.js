import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Button, Text } from 'native-base';

const styles = StyleSheet.create({});

const ActionButton = (props) => (
  <View style={styles.actionButton}>
    <Button>
      <Text>{props.label}</Text>
    </Button>
  </View>
);

export default ActionButton;
