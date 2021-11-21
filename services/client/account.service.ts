import { api } from './api';

import { LoginRequest } from 'interfaces/commons';

const URL = '/api/accounts/login';

export const logIn = (data: LoginRequest) => api.post(URL, data);
