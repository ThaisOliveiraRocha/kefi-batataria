/* eslint-disable import/prefer-default-export */
import React, { FC } from 'react';
import Title from '../../atoms/Title';
import StepEmbalagem from '../../molecules/StepEmbalagem';
import * as Styles from './Embalagem.styles';

const Embalagem: FC = () => {
  const steps = [
    {
      image: '/images/step1-embalagem.png',
      title: 'Ecológicas',
      description:
        'A época é de inovação e também de cuidar do planeta. Cada um dos produtos da KEFI é entregue em embalagens sustentáveis que ajudam a cuidar do nosso único lar, evitando gasto de água, energia e o desmatamento.',
      moreInfo: 'Saiba mais sobre embalagens sustentáveis aqui!',
    },
    {
      image: '/images/step2-embalagem.png',
      title: 'Material de composição',
      description:
        'Feitas de papel reciclado ou de fibra vegetal, as embalagens escolhidas pela KEFI contribuem com o cuidado do meio-ambiente e na participação de seus clientes nesse cuidado.',
      moreInfo: 'Entenda a melhor forma para o descarte das embalagens.',
    },
    {
      image: '/images/step3-embalagem.png',
      title: 'Práticas',
      description:
        'Além de todo o benefício para o meio ambiente, as embalagens da KEFI são completamente pensadas na segurança do seu pedido e na praticidade do consumo.',
      moreInfo: 'Você faz a difença! Leia mais sobre embalagens ecológicas.',
    },
  ];
  return (
    <Styles.Container id="embalagens">
      {/* <Styles.ImageTop src="/images/wave-top.svg" alt="wave-top" /> */}
      <Title content="Embalagens" />
      <Styles.StepsContainer>
        {steps.map((step) => (
          <StepEmbalagem
            image={step.image}
            title={step.title}
            description={step.description}
            moreInfo={step.moreInfo}
          />
        ))}
      </Styles.StepsContainer>
      {/* <Styles.ImageBottom src="/images/wave-bottom.svg" alt="wave-bottom" /> */}
    </Styles.Container>
  );
};

export default Embalagem;
