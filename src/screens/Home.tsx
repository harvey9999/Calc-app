import React, { memo } from 'react';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import Button from '../components/Button';
import { Navigation } from '../types';
import Background from '../components/Background';

type Props = {
  navigation: Navigation;
};

const Dashboard = ({ navigation }: Props) => (
  <Background>
    <Logo />
    <Header>Let’s start</Header>
    <Paragraph>
    </Paragraph>
    <Button mode="outlined" onPress={() => navigation.navigate('LoginScreen')}>
      Login
    </Button>
    <Button mode="outlined" onPress={() => navigation.navigate('Register')}>
      Register
    </Button>
  </Background>
);



export default memo(Dashboard);
