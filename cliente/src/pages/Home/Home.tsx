import React, { FC } from 'react';
import CardapioSession from '../../templates/CardapioSession';
import Carousel from '../../templates/Carousel';
import Embalagem from '../../templates/Embalagem';
import * as Styles from './Home.styles';

const Home: FC = () => (
  <Styles.Container>
    <Carousel />
    <CardapioSession />
    <Embalagem />
  </Styles.Container>
);

export default Home;
