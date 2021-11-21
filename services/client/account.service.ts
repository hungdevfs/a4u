import axios from 'axios';

import { LoginRequest } from 'interfaces/commons';

const URL = '/api/login';

export const logIn = (data: LoginRequest) => axios.post(URL, data);
