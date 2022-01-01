enum FileAction {
  SET_FILES = 'SET_FILES',
}

export interface IDefaultFileState {
  files: any[];
}

const defaultState: IDefaultFileState = {
  files: [],
};

export default function fileReducer(
  state: IDefaultFileState = defaultState,
  action: any,
) {
  switch (action.type) {
    case FileAction.SET_FILES:
      return { ...state, files: action.payload };
    default:
      return state;
  }
}

export const setFiles = (files: any) => ({
  type: FileAction.SET_FILES,
  payload: files,
});
