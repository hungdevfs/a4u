export interface IPInfo {
  ip: string;
  region: string;
  country: string;
  timezone: string;
}

export interface UserInfo {
  id: string;
  email: string;
  name: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginReponse {
  id: string;
  email: string;
  name: string;
  accessToken: string;
}

export interface AppState {
  user?: UserInfo;
  ip?: IPInfo;
  setUser?: Function;
  setIp?: Function;
}
