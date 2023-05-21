import React from 'react';
import styled from 'styled-components';

import { Percent } from '../../Percent';
import { ProgressCircle as Progress } from '../../Progress';

export const OfferProgress = ({ active, stepsDone, maxSteps }) => {
  // percent
  let percent = (stepsDone / maxSteps) * 100;
  if (isNaN(percent)) {
    percent = '?';
  }

  return (
    <>
      {active ? (
        <ProgressContainer>
          <Progress progress={percent === '?' ? 0 : percent} />
          <Percent progress={percent} />
        </ProgressContainer>
      ) : null}
    </>
  );
};

// Styles
const ProgressContainer = styled.div`
  margin-top: 15px;
  position: relative;
`;
