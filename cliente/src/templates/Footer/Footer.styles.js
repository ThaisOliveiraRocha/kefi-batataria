/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Grid = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: fixed;
  bottom: 0;
  width: 100%;
  max-height: 256px;

  background-color: #dcb46a;
  padding: 40px 32px 24px 32px;
`;

export const Container = styled.div`
  display: grid;
  align-items: flex-start;
  justify-content: center;
  grid-template-columns: 2fr 1fr 1fr 1fr 2fr;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const SocialMediaContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

export const Column = styled.div`
  display: grid;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
`;

export const Title = styled.h6`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  color: #1c1a1a;
  margin: 8px 0;
`;

export const Description = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  color: #1c1a1a;
`;

export const Link = styled.a`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #1c1a1a;
  text-decoration: none;
`;

export const Suport = styled(Description)`
  font-weight: 500;
  margin-top: 16px;
`;
