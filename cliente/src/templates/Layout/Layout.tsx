import React, { FC, ReactElement, ReactNode } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import * as Styles from './Layout.styles';

interface IProps {
  children: ReactNode;
}

const Layout: FC<IProps> = ({ children }: IProps): ReactElement => (
  <Styles.Container>
    <Header />
    <Styles.Children>{children}</Styles.Children>
    <Footer />
  </Styles.Container>
);

export default Layout;
