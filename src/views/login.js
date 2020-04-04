import React from 'react';
import {StyleSheet, Image, View} from 'react-native';
import {Container, Form} from 'native-base';
import {Logo} from '../assets/images';
const theme = require('../theme');

const styles = StyleSheet.create({
  container: {
    padding: theme.default.Layout.spacing(4),
    paddingTop: theme.default.Layout.spacing(4),
    backgroundColor: 'black',
    display: 'flex',
    flexDirection: 'column',
  },
  logoWrapper: {
    display: 'flex',
    height: '15%',
    width: '100%',
  },
  logo: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  form: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
});

// Functional Component
const Login = () => {
  return (
    <Container style={styles.container}>
      <View style={styles.logoWrapper}>
        <Image source={Logo} style={styles.logo} />
      </View>
      <Form style={styles.form} />
    </Container>
  );
};

export default Login;
