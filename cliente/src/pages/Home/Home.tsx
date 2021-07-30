import React, { FC } from 'react';
import Footer from '../../templates/Footer';
import CardapioSession from '../../templates/CardapioSession';
// import { Test } from './Home.styles';

const Home: FC = () => (
  <div>
    <div>Menu</div>
    <div>Banner</div>
    <CardapioSession />
    <h1 style={{ fontFamily: 'Antonio' }}>Embalagens</h1>
    <h1 style={{ fontFamily: 'Highteous sans-serif' }}>Horta</h1>
    <h1 style={{ fontFamily: 'Poppins' }}>Galeria</h1>
    <Footer />
  </div>
);

export default Home;
