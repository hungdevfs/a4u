import { useState, useEffect } from 'react';
import Router from 'next/router';
import NProgress from 'nprogress';

NProgress.configure({ showSpinner: false });

const useChangeRouteListener = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const start = () => {
      NProgress.start();
      setLoading(true);
    };
    const end = () => {
      NProgress.done();
      setLoading(false);
    };

    Router.events.on('routeChangeStart', start);
    Router.events.on('routeChangeComplete', end);
    Router.events.on('routeChangeError', end);

    return () => {
      Router.events.off('routeChangeStart', start);
      Router.events.off('routeChangeComplete', end);
      Router.events.off('routeChangeError', end);
    };
  }, []);

  return { loading };
};

export default useChangeRouteListener;
