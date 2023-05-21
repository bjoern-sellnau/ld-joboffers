import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import { Footer } from './components/Footer';
import { Header } from './components/Header';

export const Layout = ({ children }) => {
  return (
    <Page>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Page>
  );
};

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array])
};

// Styles
const Page = styled.div``;
const Main = styled.main`
  margin-top: 175px;
  margin-left: 15px;
  margin-bottom: 75px;
`;
