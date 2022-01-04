enum FilesAction {
  SET_FILES = 'SET_FILES',
}

export interface IDefaultFilesState {
  filePull: any[];
}

const defaultState: IDefaultFilesState = {
  filePull: [],
};

export default function filesReducer(
  state: IDefaultFilesState = defaultState,
  action: any,
) {
  switch (action.type) {
    case FilesAction.SET_FILES:
      return { ...state, filePull: action.payload };
    default:
      return state;
  }
}

export const setAllFiles = (filePull: any) => ({
  type: FilesAction.SET_FILES,
  payload: filePull,
});
