/* eslint-disable react/require-default-props */
import React, { FC } from 'react';
import * as Styles from './ItemCardapio.styles';

interface Props {
  image: string;
  title: string;
  price: string;
  onClick: () => void;
}

const ItemCardapio: FC<Props> = ({ image, title, price, onClick }: Props) => (
  <Styles.Container type="button" onClick={onClick}>
    <Styles.Image src={image} alt="produto" />
    <Styles.Title>{title}</Styles.Title>
    <Styles.Description>A partir de</Styles.Description>
    <Styles.Price>R$ {price}</Styles.Price>
  </Styles.Container>
);

export default ItemCardapio;
