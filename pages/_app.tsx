import 'react-toastify/dist/ReactToastify.css';
import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import type { NextPage } from 'next';
import { ToastContainer } from 'react-toastify';

import { AppContextProvider } from 'contexts/app.context';

const MyApp: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <AppContextProvider>
      <Component {...pageProps} />
      <ToastContainer autoClose={2000} hideProgressBar />
    </AppContextProvider>
  );
};

export default MyApp;
