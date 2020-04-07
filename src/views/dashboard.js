import React from 'react';
import { StyleSheet } from 'react-native';
import { Content } from 'native-base';
import { Header } from '../components';

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'black'
  }
});

const dashboard = () => {
  return (
    <>
      <Header />
      <Content style={styles.root} />
    </>
  );
};

export default dashboard;
