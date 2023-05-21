import React, { useContext } from 'react';

import List, { RecruiterCard } from '../../components/Card';
import { GlobalStoreContext } from '../../services/GlobalStore';

export const RecruitersContainer = () => {
  const { fetch } = useContext(GlobalStoreContext);

  let cardsData = fetch('offers', []);
  let cards = fetch('recruiters', []);
  let offersSortedByRecruiter = {};
  cardsData.forEach(c => {
    let res = [];
    if (c.recruiter in offersSortedByRecruiter) {
      res = offersSortedByRecruiter[c.recruiter];
    }

    res = [...res, c.updatedAt];

    offersSortedByRecruiter[c.recruiter] = res;
  });

  for (let r in offersSortedByRecruiter) {
    offersSortedByRecruiter[r] = offersSortedByRecruiter[r].sort(
      (a, b) => new Date(b) - new Date(a)
    );
  }

  // 1. objekt mit recruitern erstellen

  return (
    <List>
      {cards
        .sort((a, b) => {
          let A =
            typeof offersSortedByRecruiter[a.id] !== 'undefined'
              ? offersSortedByRecruiter[a.id][0]
              : '1970-01-01';
          let B =
            typeof offersSortedByRecruiter[b.id] !== 'undefined'
              ? offersSortedByRecruiter[b.id][0]
              : '1970-01-01';

          return new Date(B) - new Date(A);
        })
        .map((c, idx) => (
          <RecruiterCard key={idx} {...c} offers={cardsData} />
        ))}
    </List>
  );
};
