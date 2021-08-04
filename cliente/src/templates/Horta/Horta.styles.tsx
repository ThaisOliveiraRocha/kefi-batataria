/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  background-color: #fff;
  padding-bottom: 48px;
`;

export const StepsContainer = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: 3fr 3fr 3fr;
  padding: 0 70px 42px;
  gap: 48px;
`;

export const More = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border-left: none;
  border-right: none;
  border-top: 3px solid #484745;
  border-bottom: 3px solid #484745;
  width: 60%;
  padding: 16px 0;
  gap: 12px;
  cursor: pointer;

  span {
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 42px;
    text-align: center;
    color: #484745;
  }
`;
