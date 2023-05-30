import { useRouter } from 'next/router';
import { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, LoaderSvg, Select } from '../../../components';
import { RootActions, useStudentDetails } from '../../../redux';
import { Ageoptions } from './constants';

export const BotAvatar = () => {
  return <div className="h-[40px] w-[40px] rounded-full mr-3 border flex items-center justify-center"> B</div>;
};

export const InitialButton = (props: any) => {
  return <Button label="Got It" className="rounded-3xl " onClick={props?.actions?.handleAskName} />;
};

export const AgeOption = (props: any) => {
  const { studentAge } = useStudentDetails();
  return (
    <Select
      value={`${studentAge || ''}`}
      onChange={function (event: ChangeEvent<HTMLSelectElement>): void {
        props?.actions?.updateAge(event.target.value);
        event?.target?.blur();
      }}
      options={Ageoptions}
    />
  );
};

export const FinalStep = (props: any) => {
  const [seconds, setSeconds] = useState(5);
  const dispatch = useDispatch();
  const router = useRouter();
  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds - 1 < 1) {
          router.push('/studentDetails');
        }
        return prevSeconds - 1;
      });
    }, 1000);

    if (props?.state?.age) {
      dispatch(RootActions.updateStudentDetails({ studentAge: props?.state?.age, disableActions: true }));
    }

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="font-medium inline-flex  items-center">
      Redirecting in {seconds}
      <LoaderSvg type="SECONDARY" height="h-5" width="w-5" className="ml-1" />
    </div>
  );
};
