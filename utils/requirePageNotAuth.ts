import { ACCESS_TOKEN, ROUTES } from './constants';

const requirePageNotAuth = async (context: any) => {
  const {
    req: { cookies },
  } = context;
  try {
    const accessToken = cookies[ACCESS_TOKEN];
    if (accessToken) throw new Error();

    return { props: {} };
  } catch (err: any) {
    return {
      redirect: {
        destination: ROUTES.HOME,
        permanent: false,
      },
    };
  }
};

export default requirePageNotAuth;
