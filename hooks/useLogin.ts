import { useState, useCallback, useContext } from 'react';
import validator from 'validator';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

import { logIn } from 'services/client/account.service';
import { LoginRequest, UserInfo } from 'interfaces/commons';
import { ERRORS, ROUTES } from 'utils/constants';
import { AppContext } from 'contexts/app.context';

const useLogin = () => {
  const router = useRouter();
  const { setUser } = useContext(AppContext);

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const submit = useCallback(
    async (e: any) => {
      e.preventDefault();
      try {
        if (!email || !email.trim() || !validator.isEmail(email))
          throw new Error('Email is invalid');
        if (!password || !password.trim())
          throw new Error('Password is invalid');
        const res: any = await logIn({ email, password } as LoginRequest);
        setUser?.(res.data as UserInfo);

        router.push(ROUTES.HOME);
      } catch (err: any) {
        toast.error(ERRORS.BAD_CREDENTIAL);
      }
    },
    [email, password],
  );

  return {
    email,
    password,
    setEmail,
    setPassword,
    submit,
  };
};

export default useLogin;
