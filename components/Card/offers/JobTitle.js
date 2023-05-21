import moment from 'moment';
import React from 'react';
import styled from 'styled-components';

export const JobTitle = ({
  updatedAt,
  contact,
  canceled,
  active,
  url,
  name
}) => {
  let raw_duration = moment.duration(
    moment()
      .startOf('day')
      .diff(moment(updatedAt).startOf('day'))
  );

  let duration = raw_duration.asHours();
  let diffType = 'hours';
  let currentlyUpdated = false;

  if (duration > 24) {
    duration = raw_duration.asDays();
    diffType = 'days';
  }

  if (duration < 1) {
    currentlyUpdated = true;
  }

  let titleColor = '#333';

  // contact ?
  if (contact) {
    titleColor = '#333';
  }

  // canceled ?
  if (canceled) {
    titleColor = '#666';
  }

  // active ?
  if (!active) {
    titleColor = '#ccc';
  }

  return (
    <Headline titleColor={titleColor}>
      <a target='_blank' href={url}>
        {name}
      </a>
      <br />
      <span>
        {currentlyUpdated ? (
          <>updated today</>
        ) : (
          <>
            last update {parseInt(duration)} {diffType} ago
          </>
        )}
      </span>
    </Headline>
  );
};

const Headline = styled.h2`
  margin: 0%;
  & a {
    text-decoration: none;
    color: ${props => props.titleColor};
    font-size: 1.5rem;
    &:hover {
      text-decoration: underline;
    }
  }
  & span {
    font-weight: normal;
    font-size: 1rem;
  }
`;
