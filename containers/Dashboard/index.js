import React from 'react';
import styled from 'styled-components';

import WidgetList, { Widget } from '../../components/Widgets';
import {
  howManyActiveJobOffers,
  howManyCanceledJobOffers,
  howManyCompletedJobOffers,
  howManyContacted,
  howManyFavouriteJobOffers,
  howManyHoldedJobOffers,
  howManyInactiveJobOffers,
  howManyRecruitersAreMoreActive,
  howManyRejectedJobOffers
} from '../../libs/calculations';
import { GlobalStoreContext } from '../../services/GlobalStore';

export const DashboardContainer = () => {
  const { /* updateStore,*/ fetch } = React.useContext(GlobalStoreContext);
  let loading = fetch('loading', true);
  let cardsData = fetch('offers', []);
  let recruitersData = fetch('recruiters', []);

  if (Object.keys(cardsData).length && Object.keys(recruitersData).length) {
    loading = false;
  }

  let activeOffersInPercent = 0;
  let activeOffersInPercentNoHold = 0;
  let canceledOffersInPercent = 0;
  let inactiveOffersInPercent = 0;
  let favouriteOffersInPercent = 0;
  let contactedOffersInPercent = 0;
  let completedOffersInPercent = 0;
  let holdeddOffersInPercent = 0;
  let rejectedOffersInPercent = 0;
  if (!loading) {
    activeOffersInPercent = howManyActiveJobOffers(cardsData);
    activeOffersInPercentNoHold = howManyActiveJobOffers(cardsData, false);
    canceledOffersInPercent = howManyCanceledJobOffers(cardsData);
    inactiveOffersInPercent = howManyInactiveJobOffers(cardsData);
    favouriteOffersInPercent = howManyFavouriteJobOffers(cardsData);
    contactedOffersInPercent = howManyContacted(cardsData);
    completedOffersInPercent = howManyCompletedJobOffers(cardsData);
    holdeddOffersInPercent = howManyHoldedJobOffers(cardsData);
    rejectedOffersInPercent = howManyRejectedJobOffers(cardsData);
  }

  const recruiterActivities = [1, 3, 5, 7, 9, 11, 14, 21, 30, 42, 60, 75, 90];

  return (
    <>
      <Headline>
        | General <span>Statistics</span>
      </Headline>
      <WidgetList>
        <Widget
          isLoading={loading}
          title={'rejected job offers'}
          value={rejectedOffersInPercent}
        />
        <Widget
          isLoading={loading}
          title={'job offers on hold'}
          value={holdeddOffersInPercent}
        />
        <Widget
          isLoading={loading}
          title={'active job offers w/o on hold'}
          value={activeOffersInPercentNoHold}
        />
        <Widget
          isLoading={loading}
          title={'active job offers'}
          value={activeOffersInPercent}
        />
        <Widget
          isLoading={loading}
          title={'canceled Job offers'}
          value={canceledOffersInPercent}
        />
        <Widget
          isLoading={loading}
          title={'inactive Job offers'}
          value={inactiveOffersInPercent}
        />
        <Widget
          isLoading={loading}
          title={'favourite Job offers'}
          value={favouriteOffersInPercent}
        />
        <Widget
          isLoading={loading}
          title={'offers with contact'}
          value={contactedOffersInPercent}
        />
        <Widget
          isLoading={loading}
          title={'offers completed all steps'}
          value={completedOffersInPercent}
        />
      </WidgetList>
      <Headline>
        | Recruiter <span>Activities</span>
      </Headline>
      <WidgetList>
        {recruiterActivities.map(day => {
          const activity = howManyRecruitersAreMoreActive(
            recruitersData,
            cardsData,
            day
          );
          return (
            <Widget
              key={day}
              isLoading={loading}
              title={`recruiters activity in ${day} day${day > 1 ? 's' : ''}`}
              value={activity}
            />
          );
        })}
      </WidgetList>
    </>
  );
};

const Headline = styled.h1`
  margin: 45px 0 15px 15px;
  font-weight: bold;
  font-family: 'Open Sans';

  & span {
    font-weight: normal;
  }
`;
