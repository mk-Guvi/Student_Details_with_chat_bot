import Link from 'next/link';
import { Button } from '../../components';

export const HomeContainer = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center p-4 items-center ">
      <div className="rounded border shadow-md flex flex-col space-y-3 p-7 ">
        <h1 className="font-medium tracking-wide">Enter into Student Info System</h1>

        <Link href={'/studentInfoSystem'}>
          <Button label={'Enroll Now!'} />
        </Link>
      </div>
    </div>
  );
};
