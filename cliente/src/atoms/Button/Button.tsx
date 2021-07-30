/* eslint-disable react/require-default-props */
import React, { FC } from 'react';
import * as Styles from './Button.styles';

interface Props {
  onClick: () => void;
  title: string;
  light?: boolean;
}

const Button: FC<Props> = ({ onClick, title, light }: Props) => {
  const theme = { light };
  return (
    <Styles.BtnContainer theme={theme} onClick={onClick}>
      {title}
    </Styles.BtnContainer>
  );
};

export default Button;
