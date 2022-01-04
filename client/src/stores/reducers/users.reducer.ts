const defaultState = {
  userPull: {},
};

const SET_USERS = 'SET_USERS';

export default function usersReducer(state: any = defaultState, action: any) {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        userPull: action.payload,
      };
    default:
      return state;
  }
}

export const setUserPull = (user: any) => ({
  type: SET_USERS,
  payload: user,
});
