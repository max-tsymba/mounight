import { IAuthResponse } from '@/models/response/AuthResponse';
import { API_AUTH_URL } from '../utils/conts';
import axios, { AxiosResponse } from 'axios';

const $api = axios.create({
  withCredentials: true,
  baseURL: API_AUTH_URL,
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
$api.interceptors.request.use((config: any) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
});

$api.interceptors.response.use(
  (config: any) => {
    return config;
  },
  async (error: any) => {
    const originalRequest = error.config;
    if (
      error.response.status == 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        const response: AxiosResponse<IAuthResponse, any> =
          await axios.get<IAuthResponse>(`${API_AUTH_URL}/refresh`, {
            withCredentials: true,
          });
        localStorage.setItem('token', response.data.accessToken);
        return $api.request(originalRequest);
      } catch (e: any) {
        console.log('not autorization');
      }
    }
    if (error.response.status == 400) {
      console.log('400');
    }
    throw error;
  },
);

export default $api;
