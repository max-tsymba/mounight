import $api, { API_URL } from '../API';
import { IAuthResponse } from '../models/response/AuthResponse';
import axios, { AxiosResponse } from 'axios';
import { logout, setUser } from '../stores/reducers/user.reducer';
import { deleteLoader, setLoader } from '../stores/reducers/loader.reducer';

export default class AuthService {
  static login(email: string, password: string) {
    return async (dispatch: any) => {
      try {
        const response: AxiosResponse<IAuthResponse, any> =
          await $api.post<IAuthResponse>('/login', {
            email,
            password,
          });
        dispatch(setUser(response.data.user));
        localStorage.setItem('token', response.data.accessToken);
        return 1;
      } catch (e: any) {
        console.log(e.response?.data?.message);
        return 0;
      }
    };
  }

  static registration(username: string, email: string, password: string) {
    return async (dispatch: any) => {
      try {
        const response: AxiosResponse<IAuthResponse, any> =
          await $api.post<IAuthResponse>('/registration', {
            username,
            email,
            password,
          });
        dispatch(setUser(response.data.user));
        localStorage.setItem('token', response.data.accessToken);
        console.log(response.data);
        return 1;
      } catch (e: any) {
        console.log(e.response?.data?.message);
        return 0;
      }
    };
  }

  static logout() {
    return async (dispatch: any) => {
      try {
        const response: AxiosResponse<IAuthResponse, any> =
          await $api.post<IAuthResponse>('/logout');
        dispatch(logout());
        localStorage.removeItem('token');
        console.log(response);
      } catch (e: any) {
        console.log(e.response?.data?.message);
      }
    };
  }

  static checkAuth() {
    return async (dispatch: any) => {
      dispatch(setLoader());
      try {
        const response: AxiosResponse<IAuthResponse, any> =
          await axios.get<IAuthResponse>(`${API_URL}/refresh`, {
            withCredentials: true,
          });
        dispatch(setUser(response.data.user));
        localStorage.setItem('token', response.data.accessToken);
        console.log(response.data);
      } catch (e: any) {
        console.log(e.response?.data?.message);
        localStorage.removeItem('token');
      } finally {
        dispatch(deleteLoader());
      }
    };
  }
}
