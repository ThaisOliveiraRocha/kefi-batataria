/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  background-color: #0e0d0d;
`;

export const Grid = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 100px;
  padding: 0 70px;
`;

export const Icon = styled.img`
  width: auto;
`;

export const Logo = styled(Icon)`
  padding: 0 70px;
`;

export const Link = styled.a`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  text-decoration: none;

  color: #f2f2f2;
`;
