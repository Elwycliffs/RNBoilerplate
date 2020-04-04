import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { Container, Form } from 'native-base';
import { Logo } from '../assets/images';
import { ActionButton, FormField } from '../components';
const theme = require('../theme');

const styles = StyleSheet.create({
  container: {
    padding: theme.default.Layout.spacing(4),
    paddingTop: theme.default.Layout.spacing(8),
    display: 'flex',
    flexDirection: 'column'
  },
  logoWrapper: {
    display: 'flex',
    height: '30%',
    width: '100%',
    marginBottom: theme.default.Layout.spacing(4)
  },
  logo: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain'
  },
  form: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden'
  }
});

// Functional Component
const Login = () => {
  return (
    <Container style={styles.container}>
      <View style={styles.logoWrapper}>
        <Image source={Logo} style={styles.logo} />
      </View>
      <Form type="submit" style={styles.form}>
        <FormField label="Username/Email" />
        <FormField label="Password" secure />
        <ActionButton label="Login" />
      </Form>
    </Container>
  );
};

export default Login;
