import { AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

import { Layout } from '../layouts';
import { GlobalStoreProvider } from '../services/GlobalStore';

const DEFAULT_ROUTE = '/offers';

const App = ({ Component, pageProps, router }) => {
  useEffect(() => {
    const { pathname } = router;
    if (pathname === '/') {
      router.push(DEFAULT_ROUTE);
    }
  }, [router]);
  return (
    <Layout>
      <AnimatePresence exitBeforeEnter>
        <GlobalStoreProvider>
          <Component {...pageProps} key={router.route} />
        </GlobalStoreProvider>
      </AnimatePresence>
    </Layout>
  );
};

App.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object,
  router: PropTypes.object
};

export default App;
