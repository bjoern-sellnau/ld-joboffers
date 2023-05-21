import PropTypes from 'prop-types';
import React, { createContext, useState } from 'react';

export const GlobalStoreContext = createContext();

export const storeExists = store => (store === null ? false : true);

export const storeHasKey = (store, key) =>
  !storeExists(store) ? false : typeof store[key] !== 'undefined';

export const storeHasKeys = (store, keys) =>
  !storeExists(store)
    ? false
    : keys.length === keys.filter(key => storeHasKey(store, key)).length;

export const GlobalStoreProvider = ({ children }) => {
  const [state, set_state] = useState({ loading: true });

  const getDataByKey = (key, default_value = undefined) =>
    !storeExists(state)
      ? default_value
      : storeHasKey(state, key)
      ? state[key]
      : default_value;

  const exists = () => storeExists(state);

  const hasKey = key => storeHasKey(state, key);

  const hasKeys = key => storeHasKeys(state, key);

  return (
    <GlobalStoreContext.Provider
      value={{
        store: state,
        update: set_state,
        fetch: getDataByKey,
        exists,
        hasKey,
        hasKeys
      }}
    >
      {children}
    </GlobalStoreContext.Provider>
  );
};

GlobalStoreProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};
