import React from 'react';
import { StyleSheet, Image, View, Dimensions } from 'react-native';
import { Form, Content } from 'native-base';
import { Logo } from '../assets/images';
import { ActionButton, FormField, Gap } from '../components';
const theme = require('../theme');

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    padding: theme.default.Layout.spacing(4),
    paddingTop: theme.default.Layout.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    height: 'auto'
  },
  logoWrapper: {
    display: 'flex',
    maxHeight: (20 / 100) * height,
    width: '100%'
  },
  logo: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain'
  },
  form: {
    width: '100%',
    overflow: 'hidden'
  }
});

// Functional Component
const Login = () => {
  return (
    <Content style={styles.container}>
      <View style={styles.logoWrapper}>
        <Image source={Logo} style={styles.logo} />
      </View>
      <Gap scale={4} />
      <Form type="submit" style={styles.form}>
        <FormField label="Username/Email" />
        <Gap scale={1} />
        <FormField label="Password" secure />
        <Gap scale={2} />
        <ActionButton label="Login" />
      </Form>
    </Content>
  );
};

export default Login;
