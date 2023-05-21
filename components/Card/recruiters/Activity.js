import moment from 'moment';
import React from 'react';
import styled from 'styled-components';

export const Activity = ({ recruiterOffers }) => {
  const updatedAt = recruiterOffers
    .sort((a, b) => new Date(a.updatedAt) - new Date(b.updatedAt))
    .map(s => s.updatedAt)
    .pop();

  let _activity = moment.duration(
    moment()
      .startOf('day')
      .diff(moment(updatedAt).startOf('day'))
  );

  let activity = _activity.asHours();
  let diffType = 'hours';
  let currentlyUpdated = false;

  if (activity > 24) {
    activity = _activity.asDays();
    diffType = 'days';
  }

  if (activity < 1) {
    currentlyUpdated = true;
  }

  if (recruiterOffers.length === 0) {
    return <Wrapper>no Job offers yet</Wrapper>;
  }

  return (
    <Wrapper>
      {currentlyUpdated ? (
        <>updated today</>
      ) : (
        <>
          last update {parseInt(activity)} {diffType} ago
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.p`
  position: absolute;
  width: 100%;
  top: 30%;
  left: 0%;
  right: 0;
  font-size: 14px;
`;
