import React, { FC } from 'react';
import * as Styles from './Description.styles';

interface Props {
  content: string;
}

const Description: FC<Props> = ({ content }: Props) => (
  <Styles.Container>{content}</Styles.Container>
);

export default Description;
