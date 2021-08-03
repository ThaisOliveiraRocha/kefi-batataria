import React, { FC } from 'react';
import * as Styles from './StepEmbalagem.styles';

interface Props {
  image: string;
  title: string;
  description: string;
  moreInfo: string;
}

const StepEmbalagem: FC<Props> = ({
  image,
  title,
  description,
  moreInfo,
}: Props) => (
  <Styles.Container>
    <Styles.Image src={image} alt="step embalagem" />
    <Styles.TextContainer>
      <Styles.Title>{title}</Styles.Title>
      <Styles.Description>{description}</Styles.Description>
      <Styles.MoreInfo>{moreInfo}</Styles.MoreInfo>
    </Styles.TextContainer>
  </Styles.Container>
);

export default StepEmbalagem;
