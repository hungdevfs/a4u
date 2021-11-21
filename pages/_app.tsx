import '../styles/globals.css';
import type { AppProps } from 'next/app';
import type { NextPage } from 'next';

const MyApp: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default MyApp;
