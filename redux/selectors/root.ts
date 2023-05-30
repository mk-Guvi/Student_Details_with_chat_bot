import { useSelector } from 'react-redux';
import { rootReducersI } from '../root';

export const useRoot = () => {
  return useSelector((state: rootReducersI) => state).root;
};

export const useStudentDetails = () => {
  return useSelector((state: rootReducersI) => state).root.studentDetails;
};
