/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const BtnContainer = styled.button`
  width: 154px;
  height: 45px;
  background: ${(props) => (props.theme.light ? '#F2F2F2' : '#732b15')};
  color: ${(props) => (props.theme.light ? '#0E0D0D' : '#F2F2F2')};

  border-color: transparent;
  border-radius: 22.5px;
  font-size: 18px;
  font-weight: normal;
  text-transform: uppercase;
  cursor: pointer;
`;
