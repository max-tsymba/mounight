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
    default:
      return state;
  }
}
