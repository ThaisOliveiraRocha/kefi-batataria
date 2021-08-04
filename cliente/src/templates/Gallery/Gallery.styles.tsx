/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  background-color: #401b0d;
  padding-bottom: 48px;
`;

export const StepsContainer = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  grid-template-columns: repeat(4, minmax(200px, 1fr));
  padding: 0 70px 42px;
  gap: 20px;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
`;
