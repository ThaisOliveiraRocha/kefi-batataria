/* eslint-disable import/prefer-default-export */
import React, { FC } from 'react';
import Title from '../../atoms/Title';
import * as Styles from './Gallery.styles';

const Gallery: FC = () => {
  const steps = [
    {
      image: '/images/gallery/galeria-1.png',
    },
    {
      image: '/images/gallery/galeria-2.png',
    },
    {
      image: '/images/gallery/galeria-3.png',
    },
    {
      image: '/images/gallery/galeria-4.png',
    },
    {
      image: '/images/gallery/galeria-5.png',
    },
    {
      image: '/images/gallery/galeria-6.png',
    },
    {
      image: '/images/gallery/galeria-7.png',
    },
    {
      image: '/images/gallery/galeria-8.png',
    },
  ];
  return (
    <Styles.Container id="galeria">
      <Title content="Nossa Galeria" light />
      <Styles.StepsContainer>
        {steps.map((step) => (
          <Styles.Image src={step.image} alt="galeria-img" />
        ))}
      </Styles.StepsContainer>
    </Styles.Container>
  );
};

export default Gallery;
