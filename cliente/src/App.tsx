import React, { FC } from 'react';
import Layout from './templates/Layout';
import Home from './pages/Home';

const App: FC = () => (
  <Layout>
    <Home />
  </Layout>
);

export default App;
