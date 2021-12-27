enum userCases {
  SET_USER = 'SET_USER',
  LOGOUT = 'LOGOUT',
}
export interface IDefaultState {
  currentUser: any;
  isAuth?: boolean;
}

const token = localStorage.getItem('token');

const defaultState: IDefaultState = token
  ? {
      currentUser: {},
      isAuth: true,
    }
  : {
      currentUser: {},
      isAuth: false,
    };

export default function userReducer(
  state: IDefaultState = defaultState,
  action: any,
) {
  switch (action.type) {
    case userCases.SET_USER:
      return {
        ...state,
        currentUser: action.payload.user,
        isAuth: true,
      };
    case userCases.LOGOUT:
      return {
        ...state,
        currentUser: {},
        isAuth: false,
      };
    default:
      return state;
  }
}

export const setUser = (user: any) => ({
  type: userCases.SET_USER,
  payload: user,
});
export const logout = () => ({ type: userCases.LOGOUT });
