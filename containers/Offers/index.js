import React, { useContext, useState } from 'react';

import List, { OfferCard } from '../../components/Card';
import { LinkList } from '../../components/LinkList';
import { GlobalStoreContext } from '../../services/GlobalStore';

export const OffersContainer = () => {
  const { fetch } = useContext(GlobalStoreContext);
  const [loading] = useState(fetch('loading', true));
  const [filter, set_filter] = useState(3);

  let cardsData = fetch('offers', []);
  let recruitersData = fetch('recruiters', []);

  let cards = cardsData.filter(cd => {
    switch (filter) {
      case 1:
        return cd.favourite === true;
      case 2:
        return (
          cd.canceled !== true &&
          (cd.isRejected === false || typeof cd.isRejected === 'undefined') &&
          cd.active === true
        );
      case 3:
        return (
          cd.canceled !== true &&
          cd.active === true &&
          (cd.isRejected === false || typeof cd.isRejected === 'undefined') &&
          (cd.onHold === false || typeof cd.onHold === 'undefined')
        );

      case 4:
        return cd.active !== true;
      case 5:
        return cd.canceled === true;
      case 6:
        return cd.onHold === true;
      case 7:
        return cd.joboffer === true;
      case 8:
        return cd.isRejected === true;

      default:
        return cd;
    }
  });

  if (loading) {
    console.log('loading !');
  }

  if (filter !== 0) {
    // sort cards by updatetAt
    cards.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
  }

  // event handlers
  const handleFilterSelect = type => {
    set_filter(type);
  };

  return (
    <>
      <LinkList
        items={[
          { label: 'all', extras: cards },
          { label: 'favourites', extras: cards },
          { label: 'in progress', extras: cards },
          { label: 'active', extras: cards },
          { label: 'inactive', extras: cards },
          { label: 'canceled', extras: cards },
          { label: 'on hold', extras: cards },
          { label: 'job-offers', extras: cards },
          { label: 'rejected', extras: cards }
        ]}
        active={filter}
        onChange={handleFilterSelect}
      />
      <List>
        {cards.map((c, idx) => (
          <OfferCard key={idx} {...c} recruiters={recruitersData} />
        ))}
      </List>
    </>
  );
};
