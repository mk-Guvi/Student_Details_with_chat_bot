import Link from 'next/link';
import { useMemo } from 'react';
import { Button } from '../../components';
import { useStudentDetails } from '../../redux';

export const StudentDetailsView = () => {
  const { studentAge, studentName } = useStudentDetails();

  const hasFilledDetails = useMemo(() => {
    return studentAge && studentName;
  }, [studentAge, studentName]);

  return (
    <div className="m-auto h-screen flex items-center justify-center w-screen ">
      <div className="flex w-fit mx-3 border flex-col space-y-3 justify-center items-center p-4 rounded-md shadow">
        {hasFilledDetails ? (
          <p className="break text-center">
            Your name <span className="font-medium break-all">{studentName}</span> aged <span className="font-medium">{studentAge}</span>{' '}
            has been added to the system. You may now exit.
          </p>
        ) : (
          <h1 className="font-medium">Update Your Details</h1>
        )}
        <Link href={hasFilledDetails ? '/' : '/studentInfoSystem'}>
          <Button label={hasFilledDetails ? 'Home' : 'Update'} />
        </Link>
      </div>
    </div>
  );
};
