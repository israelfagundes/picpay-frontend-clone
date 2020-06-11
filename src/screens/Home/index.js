import React from 'react';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import { Platform, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import { Wrapper, Container, Header, BalanceContainer, BalanceTitle, Balance } from './styles';

import Suggestions from '../../components/Suggestions'; 
import Activities from '../../components/Activities'; 
import Tips from '../../components/Tips';
import Banner from '../../components/Banner';

export default function Home() {
  return ( 
    <Wrapper style={styles.container}>
      <Container>
        <Header>
          <MaterialCommunityIcons name="qrcode-scan" size={30} color="#10c86e" />

          <BalanceContainer>
            <BalanceTitle>Meu saldo</BalanceTitle>
            <Balance>R$ 0,00</Balance>
          </BalanceContainer>

          <AntDesign name="gift" size={30} color="#10c86e" />
        </Header>

        <Suggestions />
        <Activities />
        <Tips />
        <Banner />
      </Container>
    </Wrapper>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform === 'ios' ? '' : Constants.statusBarHeight
  }
});