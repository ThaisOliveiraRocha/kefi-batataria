/* eslint-disable import/prefer-default-export */
import React, { FC } from 'react';
import * as Styles from './StepHorta.styles';

interface Props {
  image: string;
  title: string;
  description: string;
}

const StepHorta: FC<Props> = ({ image, title, description }: Props) => (
  <Styles.Container>
    <Styles.Image src={image} alt="step horta" />
    <Styles.Title>{title}</Styles.Title>
    <Styles.Description>{description}</Styles.Description>
  </Styles.Container>
);

export default StepHorta;
