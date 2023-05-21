import React from 'react';
import styled from 'styled-components';

import { Percent } from '../../Percent';
import { ProgressCircle as Progress } from '../../Progress';
import { Card } from '../base';
import { RecruiterLabel } from '../base/RecruiterLabel';
import { CardBody } from '../base/styles';
import { Activity } from './Activity';

export const RecruiterCard = ({ id, name, company, offers, active }) => {
  const recruiterOffers = offers.filter(
    o => o.recruiter.toString() === id.toString()
  );

  const canceled = recruiterOffers.filter(
    ro => (ro.canceled === true || ro.isRejected === true) && ro.active === true
  );

  const contact = recruiterOffers.filter(
    ro => ro.contact === true && ro.active === true
  );

  const inactive = recruiterOffers.filter(ro => ro.active === false);

  const minSalary = recruiterOffers
    .sort((a, b) => a.salary.min - b.salary.min)
    .map(s => s.salary.min);

  const maxSalary = recruiterOffers
    .sort((a, b) => b.salary.max - a.salary.max)
    .map(s => s.salary.max);

  // percent
  let percent = (contact.length / recruiterOffers.length) * 100;
  if (contact.length === 1 && recruiterOffers.length === 1) {
    percent = 0;
  }
  if (isNaN(percent)) {
    percent = '?';
  }

  return (
    <Card id={id} backgroundColor={active ? '#00ff00' : '#f0f0f0'}>
      <CardBody>
        {active && recruiterOffers.length ? (
          <>
            <ProgressContainer>
              <Progress progress={percent === '?' ? 0 : percent} />
              <Percent progress={percent} />
            </ProgressContainer>
            <Activity recruiterOffers={recruiterOffers} />
            <Status>
              <div>
                all
                <br />
                <span>{recruiterOffers.length}</span>
              </div>
              <div>
                contact
                <br />
                <span>{contact.length}</span>
              </div>
              <div>
                inactive
                <br />
                <span>{inactive.length}</span>
              </div>
              <div>
                canceled
                <br />
                <span>{canceled.length}</span>
              </div>
            </Status>
            <Salary>
              <p>
                min
                <br />
                <span>{minSalary[0]} €</span>
              </p>
              <p>
                max
                <br />
                <span>{maxSalary[0]} €</span>
              </p>
            </Salary>
          </>
        ) : (
          <>
            <Activity recruiterOffers={recruiterOffers} />
          </>
        )}

        <RecruiterLabel recruiters={[{ name, company, id }]} />
      </CardBody>
    </Card>
  );
};

// styles
const ProgressContainer = styled.div`
  margin-top: 30px;
  position: absolute;
  left: auto;
  right: auto;
  width: 100%;
  top: 0;
`;
const Status = styled.div`
  display: flex;
  justify-content: space-evenly;
  position: absolute;
  width: 100%;
  top: 50%;
  left: 0%;
  right: 0;
  transform: translateY(-50%);
  & span {
    font-weight: bold;
  }
`;
const Salary = styled.div`
  display: flex;
  justify-content: space-around;
  position: absolute;
  width: 100%;
  top: 50%;
  left: 0%;
  right: 0;
  transform: translateY(85%);
  & span {
    font-weight: bold;
  }
`;
