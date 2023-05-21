import PropTypes from 'prop-types';
import React, { useContext, useEffect } from 'react';

import { RecruitersContainer } from '../containers/Recruiters';
import { fetchRequest, getAPIBase } from '../services/API';
import { GlobalStoreContext } from '../services/GlobalStore';

const Recruiters = props => {
  const { update, hasKeys } = useContext(GlobalStoreContext);
  let { offers, recruiters } = props;

  useEffect(() => {
    if (!hasKeys(['offers', 'recruiters'])) {
      update({ offers, recruiters });
    }
  }, [hasKeys, update, offers, recruiters]);

  return <RecruitersContainer />;
};

Recruiters.getInitialProps = async context => {
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

Recruiters.propTypes = {
  offers: PropTypes.array,
  recruiters: PropTypes.array
};

export default Recruiters;
