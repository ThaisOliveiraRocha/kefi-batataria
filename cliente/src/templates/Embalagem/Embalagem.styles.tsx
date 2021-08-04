/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  background-color: #f2f2f2;

  position: relative;
`;

export const ImageTop = styled.img`
  position: absolute;
  z-index: 1;
  /* bottom: 256px; */
  top: 0;
`;

export const ImageBottom = styled.img`
  position: absolute;
  z-index: 1;
  top: 256px;
`;

export const StepsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 70px;
  gap: 48px;
`;
