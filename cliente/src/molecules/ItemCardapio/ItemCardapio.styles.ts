/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: none;
  border: none;
  cursor: pointer;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
`;

export const Title = styled.span`
  font-family: Poppins;
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 48px;
  color: #f2f2f2;
  margin-top: 18px;
`;

export const Description = styled.span`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  color: #f2f2f2;
`;

export const Price = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 154px;
  border-radius: 25px;
  background-color: #f2f2f2;
  padding: 16px 0;
  margin-top: 8px;

  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  color: #0e0d0d;
`;
