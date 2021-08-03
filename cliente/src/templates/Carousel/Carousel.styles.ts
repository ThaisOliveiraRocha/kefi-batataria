/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  .swiper-container {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .swiper-button-prev,
  .swiper-container-rtl,
  .swiper-button-next {
    color: #fff;
    margin: 0 42px;
  }
`;

export const Banner = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 660px;

  background-image: url(${(props) => props.theme});
  background-repeat: no-repeat;
  background-size: 100% 100%;
`;

export const TextContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  padding: 0 180px;
`;

export const Title = styled.h2`
  margin: 0 0 24px 0;
  font-family: Righteous;
  font-style: normal;
  font-weight: normal;
  font-size: 60px;
  line-height: 75px;
  color: #f2f2f2;
`;

export const Description = styled.span`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 39px;
  color: #f2f2f2;
  text-align: left;
`;
