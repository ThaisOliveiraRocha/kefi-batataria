/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: 4fr 3fr;
  gap: 42px;

  :nth-child(2n) {
    transform: scaleX(-1);
    div {
      transform: scaleX(-1);
      flex-wrap: wrap-reverse;
      text-align: right;
    }
  }
`;

export const Image = styled.img`
  width: 100%;
`;

export const TextContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  width: 70%;
`;

export const Title = styled.h6`
  font-family: Poppins;
  font-weight: normal;
  font-size: 32px;
  line-height: 48px;
  color: #0e0d0d;
  margin: 24px 0;
`;

export const Description = styled.span`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 30px;
  color: #0e0d0d;
  margin-bottom: 48px;
`;

export const MoreInfo = styled.span`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #0e0d0d;

  a {
    text-decoration-line: underline;
    color: #0029ff;
  }
`;
