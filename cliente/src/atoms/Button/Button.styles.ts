/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const BtnContainer = styled.button`
  width: 154px;
  height: 45px;
  background: ${(props) => (props.theme.light ? '#F2F2F2' : '#732b15')};
  border-color: transparent;
  border-radius: 22.5px;
  cursor: pointer;

  color: ${(props) => (props.theme.light ? '#0E0D0D' : '#F2F2F2')};
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  text-transform: uppercase;
`;
