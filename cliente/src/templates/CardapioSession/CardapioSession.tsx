import React, { FC } from 'react';
import Title from '../../atoms/Title';
import * as Styles from './CardapioSession.styles';

const CardapioSession: FC = () => {
  const cardapio = [
    {
      image: '/images/recheada.png',
      title: 'Batata Recheada',
      price: '10.00',
    },
    {
      image: '/images/frita.png',
      title: 'Batata Frita',
      price: '8.00',
    },
    {
      image: '/images/rosti.png',
      title: 'Batata Rosti',
      price: '11.00',
    },
  ];

  return (
    <Styles.Container>
      <Title content="Cardápio" light />
      {cardapio.map((item) => (
        <div>{item.title}</div>
      ))}
    </Styles.Container>
  );
};

export default CardapioSession;
