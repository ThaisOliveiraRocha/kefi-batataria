import React, { FC } from 'react';
import * as Styles from './Header.styles';

// interface Props {
//   card: Array<string>;
//   onClick: () => void;
// }

const Header: FC = () => (
  <Styles.Container>
    <Styles.Logo src="/images/logo.png" alt="logo" />
    <Styles.Grid>
      <Styles.Link>Cardápio</Styles.Link>
      <Styles.Link>Embalagens</Styles.Link>
      <Styles.Link>Horta</Styles.Link>
      <Styles.Link>Sobre</Styles.Link>
      <Styles.Link>Blog</Styles.Link>
      <Styles.Icon src="/images/cart.png" alt="carrinho" />
    </Styles.Grid>
  </Styles.Container>
);

export default Header;
