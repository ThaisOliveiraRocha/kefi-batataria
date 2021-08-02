import React, { FC } from 'react';
import Title from '../../atoms/Title';
import ItemCardapio from '../../molecules/ItemCardapio';
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
    <Styles.Container id="cardapio">
      <Title content="Cardápio" light />
      <Styles.Items>
        {cardapio.map((item) => (
          <div key={item.title}>
            <ItemCardapio
              title={item.title}
              image={item.image}
              price={item.price}
              onClick={() => {}}
            />
          </div>
        ))}
      </Styles.Items>
    </Styles.Container>
  );
};

export default CardapioSession;
