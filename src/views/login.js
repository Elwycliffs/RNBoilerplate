import React, { useState } from 'react';
import { StyleSheet, Image, View, Dimensions } from 'react-native';
import { Form, Content, Spinner } from 'native-base';
import { Logo } from '../assets/images';
import { ActionButton, FormField, Gap } from '../components';
import LoginUtil from '../utils/net/login';
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
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [working, setWorking] = useState(false);

  const login = () => {
    // Run Network Login Function here
    setWorking(true);
    LoginUtil({
      username: String(username).trim(),
      password: password
    })
      .then(result => {
        console.log('Network Result', result);
        setWorking(false);
      })
      .catch(error => {
        console.log('Network Error', error);
        setWorking(false);
      });
  };

  return (
    <Content style={styles.container}>
      <View style={styles.logoWrapper}>
        <Image source={Logo} style={styles.logo} />
      </View>
      <Gap scale={4} />
      <Form type="submit" style={styles.form}>
        <FormField
          onChange={text => setUsername(text)}
          label="Username/Email"
        />
        <Gap scale={1} />
        <FormField
          label="Password"
          secure
          onChange={text => setPassword(text)}
        />
        <Gap scale={2} />
        {working ? (
          <Spinner color="green" />
        ) : (
          <ActionButton label="Login" onClick={login} />
        )}
      </Form>
    </Content>
  );
};

export default Login;
