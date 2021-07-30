/* eslint-disable react/require-default-props */
import React, { FC } from 'react';
import * as Styles from './Title.styles';

interface Props {
  content: string;
  light?: boolean;
}

const Title: FC<Props> = ({ content, light }: Props) => {
  const theme = { light };
  return <Styles.Container theme={theme}>{content}</Styles.Container>;
};

export default Title;
