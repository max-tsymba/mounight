const SET_USER = 'SET_USER';
const LOGOUT = 'LOGOUT';
export interface IDefaultState {
  currentUser: any;
  isAuth: boolean;
}

const defaultState: IDefaultState = {
  currentUser: {},
  isAuth: false,
};

export default function userReducer(
  state: IDefaultState = defaultState,
  action: any,
) {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        currentUser: action.payload.user,
        isAuth: true,
      };
    case LOGOUT:
      return {
        ...state,
        currentUser: {},
        isAuth: false,
      };
    default:
      return state;
  }
}

export const setUser = (user: any) => ({ type: SET_USER, payload: user });
export const logout = () => ({ type: LOGOUT });
