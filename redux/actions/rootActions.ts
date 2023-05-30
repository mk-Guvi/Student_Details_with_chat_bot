import { ROOT_ACTIONS } from '../action-types';
import { StudentDetailsT } from '../reducers';

const reset = () => ({
  type: ROOT_ACTIONS.RESET,
  payload: {},
});

const updateStudentDetails = (payload: Partial<StudentDetailsT>) => ({
  type: ROOT_ACTIONS.UPDATE_STUDENT_DETAILS,
  payload,
});

export const RootActions = {
  reset,
  updateStudentDetails,
};
