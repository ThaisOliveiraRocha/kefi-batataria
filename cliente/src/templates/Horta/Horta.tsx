/* eslint-disable import/prefer-default-export */
import React, { FC } from 'react';
import Title from '../../atoms/Title';
import StepHorta from '../../molecules/StepHorta';
import * as Styles from './Horta.styles';

const Horta: FC = () => {
  const steps = [
    {
      image: '/images/step1-horta.png',
      title: 'O brotinho',
      description:
        'Manjericão, alecrim, orégano, salsa e cebolinha. Assim que as primeiras folhinhas surgem, cada broto recebe seu próprio vaso para crescer livremente.',
    },
    {
      image: '/images/step2-horta.png',
      title: 'A plantinha',
      description:
        'Do broto ao cultivo, o cuidado com as mudas é completamente livre de venenos e produtos químicos. Quanto mais verde, melhor!',
    },
    {
      image: '/images/step3-horta.png',
      title: 'O preparo',
      description:
        'Selecionadas e limpinhas, cada folha vai da horta direto para a panela. Saboroso e completo, seu pedido chega com o gostinho daquilo que a terra oferece!',
    },
  ];
  return (
    <Styles.Container id="horta">
      <Title content="Horta" />
      <Styles.StepsContainer>
        {steps.map((step) => (
          <StepHorta
            image={step.image}
            title={step.title}
            description={step.description}
          />
        ))}
      </Styles.StepsContainer>
      <Styles.More
        type="button"
        onClick={() => {
          window.location.href = '/sobre';
        }}
      >
        <span>Conheça a equipe idealizadora</span>
        <img src="/images/arrow.png" alt="arrow" />
      </Styles.More>
    </Styles.Container>
  );
};

export default Horta;
