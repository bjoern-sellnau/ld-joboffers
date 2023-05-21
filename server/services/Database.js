const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const { v5: uuidv5 } = require('uuid'); // For version 5
const { format } = require('date-fns');
const path = require('path');
const getConfig = require('next/config').default;

const { serverRuntimeConfig } = getConfig();

module.exports = type => {
  const UUID_NAMESPACE = 'https://loona-designs.tech/labs/joboffers';
  const UPDATED_CREATED_TIMESTAMP = format(new Date(), 'yyyy-MM-dd');
  const DATABASE_FILE_PATH = path.join(
    serverRuntimeConfig.PROJECT_ROOT,
    `./server/data/${type}.json`
  );

  const adapter = new FileSync(DATABASE_FILE_PATH);
  const db = low(adapter);

  const db_defaults = {
    offers: {
      active: true,
      id: uuidv5(UUID_NAMESPACE, uuidv5.URL),
      name: '',
      favourite: false,
      addedAt: `${UPDATED_CREATED_TIMESTAMP}`,
      updatedAt: `${UPDATED_CREATED_TIMESTAMP}`,
      url: null,
      recruiter: 1,
      canceled: false,
      reason: null,
      contact: false,
      maxSteps: 0,
      steps: [],
      stepsFinished: 0,
      salary: {
        min: 50000,
        max: 75000
      },
      notes: []
    },
    recruiters: {
      id: uuidv5(UUID_NAMESPACE, uuidv5.URL),
      name: '',
      company: '',
      active: true
    }
  };

  // Set some defaults (required if your JSON file is empty)
  db.defaults(db_defaults[type]).write();

  return db;
};
