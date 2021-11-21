import 'tailwindcss/tailwind.css';
import 'nprogress/nprogress.css';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import type { NextPage } from 'next';
import { ToastContainer } from 'react-toastify';

import Loading from 'components/commons/Loading';

import { AppContextProvider } from 'contexts/app.context';
import useChangeRouteListener from 'hooks/useChangeRouteListener';

const MyApp: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
  const { loading } = useChangeRouteListener();
  return (
    <AppContextProvider>
      {loading && <Loading />}
      <Component {...pageProps} />
      <ToastContainer autoClose={2000} hideProgressBar />
    </AppContextProvider>
  );
};

export default MyApp;
