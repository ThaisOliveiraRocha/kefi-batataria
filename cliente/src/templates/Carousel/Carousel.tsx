import React, { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Autoplay, Parallax } from 'swiper/core';
import * as Styles from './Carousel.styles';

import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';

SwiperCore.use([Navigation, Autoplay, Parallax]);

const Carousel: FC = () => {
  const content = [
    {
      image: '/images/banner-1.png',
      title: 'MONTE SEU PEDIDO',
      description: 'Escolha no cardápio e explore sabores que são a sua cara!',
    },
    {
      image: '/images/banner-2.png',
      title: 'ORGÂNICO É MAIS GOSTOSO',
      description:
        'Cada tempero no seu prato vem da nossa hortinha orgânica. Conheça o processo!',
    },
    {
      image: '/images/banner-3.png',
      title: 'ECOLÓGICAS E PRÁTICAS',
      description: 'Embalagens amigas do meio-ambiente e perfeitas para você!',
    },
  ];

  return (
    <Styles.Container>
      <Swiper
        navigation
        loop
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        parallax
        speed={800}
      >
        {content.map((item) => (
          <SwiperSlide>
            <Styles.Banner theme={item.image}>
              <Styles.TextContainer>
                <Styles.Title>{item.title}</Styles.Title>
                <Styles.Description>{item.description}</Styles.Description>
              </Styles.TextContainer>
            </Styles.Banner>
          </SwiperSlide>
        ))}
      </Swiper>
    </Styles.Container>
  );
};

export default Carousel;
