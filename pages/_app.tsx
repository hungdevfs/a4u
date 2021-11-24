import 'tailwindcss/tailwind.css';
import 'nprogress/nprogress.css';
import 'react-toastify/dist/ReactToastify.css';
import 'react-perfect-scrollbar/dist/css/styles.css';
import '../styles/main.css';
import type { AppProps } from 'next/app';
import type { NextPage } from 'next';
import { ToastContainer } from 'react-toastify';
import { QueryClient, QueryClientProvider } from 'react-query';

import Loading from 'components/Loading';

import { AppContextProvider } from 'contexts/app.context';
import useChangeRouteListener from 'hooks/useChangeRouteListener';

const queryClient = new QueryClient();

const MyApp: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
  const { loading } = useChangeRouteListener();
  return (
    <QueryClientProvider client={queryClient}>
      <AppContextProvider>
        {loading && <Loading />}
        <Component {...pageProps} />
        <ToastContainer autoClose={2000} hideProgressBar />
      </AppContextProvider>
    </QueryClientProvider>
  );
};

export default MyApp;
