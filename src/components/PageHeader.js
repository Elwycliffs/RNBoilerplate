import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Left, Body, Button, Icon } from 'native-base';

const styles = StyleSheet.create({
  root: {}
});

const PageHeader = (props) => {
  return (
    <Header>
      <Left>
        <Button transparent>
          <Icon name="md-arrow-back" />
        </Button>
      </Left>
    </Header>
  );
};

export default PageHeader;
