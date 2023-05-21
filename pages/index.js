import Router from 'next/router';

export const Redirect = () => null;

Redirect.getInitialProps = ({ res }) => {
  if (typeof window === 'undefined') {
    // server
    res.writeHead(301, { Location: 'dashboard' });
    res.end();
  } else {
    // client
    Router.push('/dashboard');
  }
  return {};
};

export default Redirect;
