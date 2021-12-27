enum loaderCases {
  SET_LOADING = 'SET_LOADING',
  DELETE_LOADING = 'DELETE_LOADING',
}

export interface IDefaultLoaderState {
  isLoading: boolean;
}

const defaultState: IDefaultLoaderState = {
  isLoading: false,
};

export default function loaderReducer(
  state: IDefaultLoaderState = defaultState,
  action: any,
) {
  switch (action.type) {
    case loaderCases.SET_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case loaderCases.DELETE_LOADING:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
}

export const setLoader = () => ({
  type: loaderCases.SET_LOADING,
});

export const deleteLoader = () => ({
  type: loaderCases.DELETE_LOADING,
});
