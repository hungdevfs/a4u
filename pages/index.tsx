import type { NextPage } from 'next';
import Head from 'next/head';
import { useContext } from 'react';

import Container from 'layouts/Container';
import Weather from 'components/Weather';

import { AppContext } from 'contexts/app.context';
import requirePageAuth from 'utils/requirePageAuth';
import useInitContext from 'hooks/useInitContext';
import { UserInfo } from 'interfaces/commons';

interface Props {
  user: UserInfo;
}

const Home: NextPage<Props> = ({ user: userInfo }: Props) => {
  useInitContext(userInfo);
  const { user, ip } = useContext(AppContext);

  return (
    <>
      <Head>
        <title>A4U | Home</title>
      </Head>

      <Container>
        <div>{user?.email}</div>
        <Weather />
        <div className="bg-red-200" style={{ height: '1000px' }} />
      </Container>
    </>
  );
};

export default Home;

export const getServerSideProps = requirePageAuth;
