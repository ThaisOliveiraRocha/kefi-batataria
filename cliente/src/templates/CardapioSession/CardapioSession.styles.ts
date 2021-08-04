/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  height: 956px;
  width: 100%;
  background-color: #401b0d;
`;

export const Items = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(3, minmax(100px, 432px));
  gap: 42px;
  padding: 0 70px;
`;
