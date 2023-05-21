import PropTypes from 'prop-types';
import React, { useContext, useEffect } from 'react';

import { DashboardContainer } from '../containers/Dashboard';
import { fetchRequest, getAPIBase } from '../services/API';
import { GlobalStoreContext } from '../services/GlobalStore';

const DashboardPage = props => {
  const { update, hasKeys } = useContext(GlobalStoreContext);
  let { offers, recruiters } = props;

  useEffect(() => {
    if (!hasKeys(['offers', 'recruiters'])) {
      update({ offers, recruiters });
    }
  }, [hasKeys, update, offers, recruiters]);

  return <DashboardContainer />;
};

DashboardPage.getInitialProps = async context => {
  if (!context.req) {
    console.log(
      'if running in browser, check if props are already loaded by ssr'
    );
    return {};
  }

  const { res } = context;

  let offers = await fetchRequest(getAPIBase(), 'offers');
  res.statusCode = offers.statusCode;

  let recruiters = await fetchRequest(getAPIBase(), 'recruiters');
  res.statusCode = res.statusCode !== 404 && recruiters.statusCode;

  return {
    offers: offers.data,
    recruiters: recruiters.data
  };
};

DashboardPage.propTypes = {
  offers: PropTypes.array,
  recruiters: PropTypes.array
};

export default DashboardPage;
