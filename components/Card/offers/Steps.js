import React from 'react';

import { Badge, HR } from '../../../styles';

export const Steps = ({ steps, finished }) => {
  // current step
  const max = steps.length;
  steps = steps.filter((s, idx) => idx >= finished);

  return (
    <>
      {max > 0 && max !== finished ? (
        <>
          <p>
            <i>next</i>
            <br />
            {steps[0]}
            <br />
            <Badge size={'big'}>
              {finished}/{max}
            </Badge>
          </p>
          <HR />
        </>
      ) : null}
      {max > 0 && max === finished ? (
        <>
          <p>Kompletten Bewerbungsprozess durchlaufen</p>
          <HR />
        </>
      ) : null}
    </>
  );
};
