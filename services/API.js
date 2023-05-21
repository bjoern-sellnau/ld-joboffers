import fetch from 'isomorphic-unfetch';

export const fetchRequest = async (api_base, type, id = '') => {
  let r = await fetch(`${api_base}/api/${type}`);
  let data = await r.json();
  let res = {
    statusCode: 200,
    data
  };

  if (data.error && res) {
    res.statusCode = 404;
  }

  return res;
};

// SERVER HELPERS
export const getAPIBase = () =>
  process.env.NODE_ENV === 'production' ? 'none' : 'http://localhost:3000';
