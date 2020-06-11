import React from 'react';

import { Container, Option, Img, Label } from './styles';

import img1 from '../../assets/01.png';
import img2 from '../../assets/02.png';
import img3 from '../../assets/03.png';
import img4 from '../../assets/04.png';
import img5 from '../../assets/05.png';
import img6 from '../../assets/06.png';
import img7 from '../../assets/07.png';


const items = [
  {
    key: '1',
    img: img1,
    label: 'Recarga de Celular',
  },
  {
    key: '2',
    img: img2,
    label: 'Uber Pré-Pago',
  },
  {
    key: '3',
    img: img3,
    label: 'Cartão de Transporte',
  },
  {
    key: '4',
    img: img4,
    label: 'SKY TV Pré-Pago',
  },
  {
    key: '5',
    img: img5,
    label: 'Central de Doações',
  },
  {
    key: '6',
    img: img6,
    label: 'Pagar Conta',
  },
  {
    key: '7',
    img: img7,
    label: 'Cobrar',
  },
]

export default function Suggestions() {
  return (
    <Container>
      {items.map((item) => (
        <Option key={item.key} >
          <Img source={item.img} />
          <Label>{item.label}</Label>
        </Option>
      ))}
    </Container>
  );
}