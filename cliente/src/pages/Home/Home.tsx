import React, { FC } from 'react';
import Footer from '../../templates/Footer';
import CardapioSession from '../../templates/CardapioSession';
// import { Test } from './Home.styles';

const Home: FC = () => (
  <div>
    <div>Menu</div>
    <div>Banner</div>
    <CardapioSession />
    <div>Embalagens</div>
    <div>Horta</div>
    <div>Galeria</div>
    <Footer />
  </div>
);

export default Home;
