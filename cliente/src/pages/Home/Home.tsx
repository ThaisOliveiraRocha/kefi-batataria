import React, { FC } from 'react';
import CardapioSession from '../../templates/CardapioSession';
import Carousel from '../../templates/Carousel';
import * as Styles from './Home.styles';

const Home: FC = () => (
  <Styles.Container>
    <Carousel />
    <CardapioSession />
  </Styles.Container>
);

export default Home;
