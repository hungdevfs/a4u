import type { NextPage } from 'next';
import Head from 'next/head';
import { useContext } from 'react';

import { AppContext } from 'contexts/app.context';

const Home: NextPage = () => {
  const { user } = useContext(AppContext);

  return (
    <>
      <Head>
        <title>A4U | Home</title>
      </Head>

      <div>{user?.email}</div>
    </>
  );
};

export default Home;
