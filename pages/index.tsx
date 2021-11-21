import type { NextPage } from 'next';
import Head from 'next/head';
import { useContext } from 'react';

import { AppContext } from 'contexts/app.context';
import requirePageAuth from 'utils/requirePageAuth';
import useUserInfo from 'hooks/useUserInfo';
import { UserInfo } from 'interfaces/commons';

interface Props {
  user: UserInfo;
}

const Home: NextPage<Props> = ({ user: userInfo }: Props) => {
  useUserInfo(userInfo);
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

export const getServerSideProps = requirePageAuth;
