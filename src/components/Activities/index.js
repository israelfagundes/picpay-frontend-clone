import React from 'react';
import { Feather, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

import { 
  Container,
  Header, 
  Title, 
  Card, 
  CardHeader, 
  Avatar, 
  Description, 
  Bold,
  CardBody,
  UserName,
  CardFooter,
  Details,
  Value,
  Divider,
  Date,
  Actions,
  Option,
  OptionLabel,
} from './styles';

import avatar from '../../assets/avatar.png';

export default function Activities() {
  return (
    <Container>
      <Header>
        <Title>Atividades</Title>
      </Header>

      <Card>
        <CardHeader>
          <Avatar source={avatar} />
          <Description>
            <Bold>Você</Bold> pagou a <Bold>@dev.israelfagundes</Bold>
          </Description>
        </CardHeader>

        <CardBody>
          <UserName>Israel Fagundes</UserName>
        </CardBody>

        <CardFooter>
          <Details>
            <Value>R$ 20,00</Value>
            
            <Divider />

              <Feather name="lock" color="#fff" size={14} />
              <Date>2 anos atrás</Date>
          </Details>
          
          <Actions>
            <Option>
              <MaterialCommunityIcons name="comment-outline" size={20} color="#fff" />
              <OptionLabel>0</OptionLabel>
            </Option>

            <Option>
              <AntDesign name="hearto" size={20} color="#fff" />
              <OptionLabel>0</OptionLabel>
            </Option>
          </Actions>
        </CardFooter>
      </Card>
    </Container>
  )
}