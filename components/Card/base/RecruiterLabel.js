import React from 'react';
import styled from 'styled-components';

import { HR } from '../../../styles';

export const RecruiterLabel = ({ recruiters, recruiter }) => {
  return (
    <Recruiter>
      <>
        <HR />
        {recruiters
          .filter(r => r.id === recruiter || recruiters.length === 1)
          .map(r => (
            <Title key={r.name}>
              <Badge>{r.id}</Badge>
              <Name>{r.name}</Name>
              <Company>{r.company}</Company>
            </Title>
          ))}
      </>
    </Recruiter>
  );
};

const Recruiter = styled.div`
  position: absolute;
  bottom: 5px;
  left: 0%;
  right: 0;
`;
const Badge = styled.span`
  position: absolute;
  font-size: 115px;
  opacity: 0.05;
  left: 0;
  right: 0;
  top: -15px;
  bottom: 0;
  font-style: italic;
  font-weight: 300;
`;
const Name = styled.strong`
  position: absolute;
  left: 0;
  right: 0;
  top: 45px;
  margin-bottom: 12px;
  font-size: 16px;
`;
const Company = styled.span`
  position: absolute;
  left: 0;
  right: 0;
  top: 65px;
  margin-bottom: 12px;
  font-size: 14px;
`;
const Title = styled.p`
  height: 65px;
`;
