import React from 'react';
import styled from 'styled-components';

import { Card } from '../base';
import { RecruiterLabel } from '../base/RecruiterLabel';
import { CardBody } from '../base/styles';
import { JobTitle } from './JobTitle';
import { Notes } from './Notes';
import { OfferProgress } from './OfferProgress';
import { Salary } from './Salary';
import { Steps } from './Steps';

export const OfferCard = ({
  active,
  id,
  name,
  favourite,
  updatedAt,
  url,
  recruiter,
  canceled,
  reason,
  contact,
  steps,
  stepsFinished,
  salary,
  notes,
  recruiters,
  onHold,
  joboffer,
  hasNote,
  isRejected
}) => {
  // backgrouund color
  let backgroundColor = '#f5f5f5';

  // contact ?
  if (contact) {
    backgroundColor = 'rgb(0,255,0)';
  }

  // canceled ?
  if (canceled) {
    backgroundColor = 'rgb(255,0,0)';
  }

  // canceled ?
  if (onHold) {
    backgroundColor = '#ff7816cc';
  }

  if (joboffer) {
    backgroundColor = '#00aaffcc';
  }

  if (isRejected) {
    backgroundColor = '#aa00ffcc';
  }

  let isActive = active;
  if (onHold) {
    isActive = false;
  }

  const renderBadge = (joboffer, canceled, onHold, isRejected) => {
    if (joboffer) {
      if (isRejected) {
        return (
          <>
            <Badge className={'card-badge'}>Angebot</Badge>
            <Badge isSub className={'card-badge'}>
              Abgelehnt
            </Badge>
          </>
        );
      } else if (onHold) {
        return (
          <>
            <Badge className={'card-badge'}>Angebot</Badge>
            <Badge isSub className={'card-badge'}>
              Pausiert
            </Badge>
          </>
        );
      } else {
        return <Badge className={'card-badge'}>Angebot</Badge>;
      }
    }
    if (canceled) {
      if (isRejected) {
        return (
          <>
            <Badge isSub className={'card-badge'}>
              Abgelehnt
            </Badge>
          </>
        );
      } else {
        return <Badge className={'card-badge'}>Absage</Badge>;
      }
    }
    if (onHold) {
      return <Badge className={'card-badge'}>Pausiert</Badge>;
    }
  };

  return (
    <Card id={id} backgroundColor={backgroundColor} fav={favourite}>
      {renderBadge(joboffer, canceled, onHold, isRejected)}
      <CardBody>
        <JobTitle
          canceled={canceled}
          contact={contact}
          updatedAt={updatedAt}
          active={isActive}
          url={url}
          name={name}
        />
        {steps.length > 0 ? (
          <OfferProgress
            active={active}
            stepsDone={stepsFinished}
            maxSteps={steps.length}
          />
        ) : null}
        <Steps finished={stepsFinished} steps={steps} />
        {(canceled || onHold || stepsFinished === steps.length || hasNote) && (
          <p>{reason}</p>
        )}
        <Notes notes={notes} />
        <Salary active={active} salary={salary} />
        <RecruiterLabel recruiters={recruiters} recruiter={recruiter} />
      </CardBody>
    </Card>
  );
};

const Badge = styled.span`
  position: absolute;
  width: 100%;
  left: 50%;
  top: ${props => (props.isSub ? '68%' : '63%')};
  transform: ${props =>
    props.isSub
      ? 'translate(-50%, -50%) rotate(-5deg)'
      : 'translate(-50%, -50%) rotate(5deg)'};
  text-transform: uppercase;
  font-family: Open sans;
  font-size: ${props => (props.isSub ? '60px' : '75px')};
  color: ${props =>
    props.isSub ? 'rgba(0, 0, 0, 0.05)' : 'rgba(0, 0, 0, 0.025)'};
  border: ${props =>
    props.isSub
      ? '5px double rgba(0, 0, 0, 0.05)'
      : '5px double rgba(0, 0, 0, 0.025)'};
  border-radius: 5px;
  transition: color 0.5s border-color 0.5s;
`;
