import React from 'react';
import styled from 'styled-components';

import { Badge } from '../../../styles';

export const Notes = ({ notes }) => {
  return (
    <Text>
      Notes <Badge>{notes.length}</Badge>
    </Text>
  );
};

const Text = styled.div`
  position: absolute;
  left: auto;
  right: auto;
  width: 100%;
  bottom: 150px;
`;
