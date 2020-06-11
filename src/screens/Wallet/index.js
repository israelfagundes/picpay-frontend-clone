import React, { useState } from 'react';
import { Feather, FontAwesome, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import { Switch } from 'react-native';

import { 
  Wrapper,
  Header, 
  HeaderContainer, 
  Title,
  BalanceContainer,
  Value,
  Bold,
  EyeButton,
  Info,
  Actions,
  Action,
  ActionLabel,
  UseBalance,
  UseBalanceTitle,
  PaymentMethods,
  PaymentMethodsTitle,
  Card,
  CardBody,
  CardDetails,
  CardTitle,
  CardInfo,
  Img,
  AddButton,
  IconContainer,
  AddLabel,
  UseTicketButton,
  UseTicketLabel,
} from './styles';

import creditCard from '../../assets/credit-card.png'

export default function Wallet() {
  const [isVisible, setIsVisible] = useState(true);
  const [useBalance, setUseBalance] = useState(true);

  function handleToggleVisibility() {
    setIsVisible((prevState) => !prevState);
  }
  
  function handleToggleUseBalance() {
    setUseBalance((prevState) => !prevState);
  }
  
  return (
    <Wrapper>
      <Header
        colors={
          useBalance ?
          ['#57e78c', '#1ab563'] :
          ['#d3d3d3', '#868686']
        }
      >
        <HeaderContainer>
          <Title>Saldo PicPay</Title>

          <BalanceContainer>
            <Value>R$ <Bold>{isVisible ? '0,00' : '----'}</Bold></Value>
            <EyeButton onPress={handleToggleVisibility} >
              <Feather name={isVisible ? "eye" : "eye-off"} size={28} color="#fff" />
            </EyeButton>
          </BalanceContainer>
          <Info>Seu saldo está rendendo 100% do CDI</Info>
          <Actions>
            <Action>
              <MaterialCommunityIcons name="cash-multiple" size={26} color="#fff" />
              <ActionLabel>Adicionar</ActionLabel>
            </Action>
            <Action>
              <FontAwesome name="bank" size={20} color="#fff" />
              <ActionLabel>Retirar</ActionLabel>
            </Action>
          </Actions>
        </HeaderContainer>
      </Header>
      <UseBalance>
        <UseBalanceTitle>Usar saldo ao pagar</UseBalanceTitle>
        <Switch
          value={useBalance}
          onValueChange={handleToggleUseBalance}
        />
      </UseBalance>
      <PaymentMethods>
        <PaymentMethodsTitle>Formas de pagamento</PaymentMethodsTitle>
        <Card>
          <CardBody>
            <CardDetails>
              <CardTitle>Cadastre seu cartão de crédito</CardTitle>
              <CardInfo>Cadastre seu cartão de crédito para poder fazer pagamentos mesmo quando não tiver saldo no seu PicPay.</CardInfo>
            </CardDetails>
            <Img source={creditCard} resizeMode='contain' />
          </CardBody>
          <AddButton>
            <IconContainer>
              <AntDesign name="plus" size={25} color='#0db060' />
            </IconContainer>
            <AddLabel>Adicionar cartão de crédito</AddLabel>
          </AddButton>
        </Card>

        <UseTicketButton>
          <MaterialCommunityIcons name="ticket-outline" size={20} color='#0db060'/>
          <UseTicketLabel>Usar código promocional</UseTicketLabel>
        </UseTicketButton>
      </PaymentMethods>
    </Wrapper>
  )
}