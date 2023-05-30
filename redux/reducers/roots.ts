import { ROOT_ACTIONS } from '../action-types';

export type RootI = {};

export type StudentDetailsT = {
  studentName?: string;
  studentAge?: number;
  disableActions?: boolean;
};

export type RootReducerT = {
  studentDetails: StudentDetailsT;
};

const rootReducerContainer: RootReducerT = {
  studentDetails: {},
};

export const rootContainerReducer = (
  state: RootReducerT = rootReducerContainer,
  action: { payload: Partial<RootReducerT>; type: string },
) => {
  switch (action.type) {
    case ROOT_ACTIONS.RESET:
      return {};
    case ROOT_ACTIONS.UPDATE_STUDENT_DETAILS:
      return { ...state, studentDetails: { ...state.studentDetails, ...action.payload } };
    default:
      return state;
  }
};
