/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 42px 0;
  text-align: center;
`;

export const Image = styled.img`
  width: 95px;
  height: auto;
`;

export const Title = styled.h6`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 28px;
  line-height: 42px;
  color: #0e0d0d;
  margin: 16px 0 24px 0;
`;

export const Description = styled.span`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 27px;
  color: #0e0d0d;
`;
