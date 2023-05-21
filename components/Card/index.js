import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import { OfferCard } from './offers';
import { RecruiterCard } from './recruiters';

const List = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

List.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element])
};

const Wrapper = styled.div`
  margin-left: -20px;
  display: flex;
  flex-wrap: wrap;
`;

export { OfferCard, RecruiterCard };

export default List;
