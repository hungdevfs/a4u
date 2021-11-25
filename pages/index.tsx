import type { NextPage } from 'next';
import Head from 'next/head';

import Container from 'layouts/Container';
import Time from 'components/Time';
import Weather from 'components/Weather';

import requirePageAuth from 'utils/requirePageAuth';
import useInitContext from 'hooks/useInitContext';
import { UserInfo } from 'interfaces/commons';

interface Props {
  user: UserInfo;
}

const Home: NextPage<Props> = ({ user: userInfo }: Props) => {
  useInitContext(userInfo);

  return (
    <>
      <Head>
        <title>A4U | Home</title>
      </Head>

      <Container>
        <Time />
        <Weather />
      </Container>
    </>
  );
};

export default Home;

export const getServerSideProps = requirePageAuth;
