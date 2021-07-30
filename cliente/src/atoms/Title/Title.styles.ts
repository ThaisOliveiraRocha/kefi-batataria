/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.h3`
  color: ${(props) => (!props.theme.light ? '#0E0D0D' : '#F2F2F2')};
  font-size: 42px;
  font-weight: normal;
  text-transform: uppercase;
`;
