import React from 'react';

import { Container, Option, Title, Img } from './styles';

import img8 from '../../assets/08.png'
import img9 from '../../assets/09.png'
import img10 from '../../assets/10.png'
import img11 from '../../assets/11.png'
import img12 from '../../assets/12.png'

const items = [
  {
    key: img8,
    img: img8,
    title: 'Pague suas contas sem sair de casa',
    bgColor: '#172c4a',
  },
  {
    key: img9,
    img: img9,
    title: 'Pague suas contas sem sair de casa',
    bgColor: '#6a0159',
  },
  {
    key: img10,
    img: img10,
    title: 'Pague suas contas sem sair de casa',
    bgColor: '#4139c8',
  },
  {
    key: img11,
    img: img11,
    title: 'Pague suas contas sem sair de casa',
    bgColor: '#00ab4b',
  },
  {
    key: img12,
    img: img12,
    title: 'Pague suas contas sem sair de casa',
    bgColor: '#ba2f76',
  },
]

export default function Tips() {
  return (
    <Container>
      {items.map(item => (
        <Option key={item.key} bgColor={item.bgColor} >
          <Title>{item.title}</Title>

          <Img source={item.img} />
      </Option>
      ))}
    </Container>
  )
}