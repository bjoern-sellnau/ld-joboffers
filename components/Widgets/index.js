import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import { Widget } from './widget';

const List = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

List.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element])
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-family: 'Open Sans';
  width: 100%;
`;

export { Widget };

export default List;
