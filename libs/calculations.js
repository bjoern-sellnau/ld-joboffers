import moment from 'moment';

// Wieivel von Total-Inactive sind active ?
export const howManyActiveJobOffers = (offers, onHold = true) => {
  return (_activeJobOffers(offers, onHold) / _totalJobOffers(offers)) * 100;
};

// Wieivel % von Total - Inactibve sind Absagen
export const howManyCanceledJobOffers = offers => {
  return (_canceledJobOffers(offers) / _totalJobOffers(offers)) * 100;
};

// Wieivel % von Total sind inactive
export const howManyInactiveJobOffers = offers => {
  return (_inactiveJobOffers(offers) / _totalJobOffers(offers)) * 100;
};

// Wieivel % von Total sind inactive
export const howManyContacted = offers => {
  return (_jobOffersWithContact(offers) / _totalJobOffers(offers)) * 100;
};

// Wieviel % von active sind favouriten ?
export const howManyFavouriteJobOffers = offers => {
  return (_favouriteJobOffers(offers) / _totalJobOffers(offers)) * 100;
};

export const howManyCompletedJobOffers = offers => {
  return (_completedJobOffers(offers) / _totalJobOffers(offers)) * 100;
};

// Wieviel Recruiter sind activer -> neuer als 7 Tage
export const howManyRecruitersAreMoreActive = (
  recruiters,
  offers,
  days = 7
) => {
  const _recruiters = recruiters
    .map(r => {
      const updatedAt = _getNewestOffer(_getOffersByRecruiter(r.id, offers));
      return moment
        .duration(
          moment()
            .startOf('day')
            .diff(moment(updatedAt).startOf('day'))
        )
        .asDays();
    })
    .filter(a => a < days).length;

  return (_recruiters / recruiters.length) * 100;
};

export const howManyHoldedJobOffers = offers => {
  return (_holdedJobOffers(offers) / _totalJobOffers(offers)) * 100;
};

export const howManyRejectedJobOffers = offers => {
  return (_rejectedJobOffers(offers) / _totalJobOffers(offers)) * 100;
};

// ----

const _getOffersByRecruiter = (recruiter, offers) => {
  return offers.filter(o => o.recruiter === recruiter);
};

const _getNewestOffer = offers => {
  return offers
    .sort((a, b) => new Date(a.updatedAt) - new Date(b.updatedAt))
    .map(s => s.updatedAt)
    .pop();
};

const _totalJobOffers = offers => {
  return offers.filter(o => o.active).length;
};
const _activeJobOffers = (offers, onHold) => {
  return offers.filter(o => {
    let valid = o.active && !o.canceled;
    if (!onHold) {
      valid = valid && o.onHold === false;
    }
    return valid;
  }).length;
};

const _inactiveJobOffers = offers => {
  return offers.filter(o => !o.active).length;
};

const _canceledJobOffers = offers => {
  return offers.filter(o => o.canceled).length;
};

const _favouriteJobOffers = offers => {
  return offers.filter(o => o.favourite).length;
};

const _jobOffersWithContact = offers => {
  return offers.filter(o => o.contact).length;
};

const _completedJobOffers = offers => {
  return offers.filter(
    o => o.steps.length === o.stepsFinished && o.steps.length > 0
  ).length;
};

const _holdedJobOffers = offers => {
  return offers.filter(o => o.onHold).length;
};

const _rejectedJobOffers = offers => {
  return offers.filter(o => o.isRejected).length;
};
