import React, { FC } from 'react';
import * as Styles from './Header.styles';

// interface Props {
//   card: Array<string>;
//   onClick: () => void;
// }

const Header: FC = () => (
  <Styles.Container>
    <Styles.Button type="button">
      <Styles.Logo src="/images/logo.png" alt="logo" />
    </Styles.Button>
    <Styles.Grid>
      <Styles.Button
        type="button"
        onClick={() => {
          window.location.href = '/#cardapio';
        }}
      >
        Cardápio
      </Styles.Button>
      <Styles.Button
        type="button"
        onClick={() => {
          window.location.href = '/#embalagens';
        }}
      >
        Embalagens
      </Styles.Button>
      <Styles.Button
        type="button"
        onClick={() => {
          window.location.href = '/#horta';
        }}
      >
        Horta
      </Styles.Button>
      <Styles.Button
        type="button"
        onClick={() => {
          window.location.href = '/sobre';
        }}
      >
        Sobre
      </Styles.Button>
      <Styles.Button type="button">Blog</Styles.Button>
      <Styles.Button type="button">
        <Styles.Icon src="/images/cart.png" alt="carrinho" />
      </Styles.Button>
    </Styles.Grid>
  </Styles.Container>
);

export default Header;
