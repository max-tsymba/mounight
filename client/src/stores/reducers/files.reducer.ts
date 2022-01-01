enum FilesAction {
  SET_FILES = 'SET_FILES',
}

export interface IDefaultFilesState {
  files: any[];
}

const defaultState: IDefaultFilesState = {
  files: [],
};

export default function filesReducer(
  state: IDefaultFilesState = defaultState,
  action: any,
) {
  switch (action.type) {
    case FilesAction.SET_FILES:
      return { ...state, files: action.payload };
    default:
      return state;
  }
}

export const setAllFiles = (files: any) => ({
  type: FilesAction.SET_FILES,
  payload: files,
});
