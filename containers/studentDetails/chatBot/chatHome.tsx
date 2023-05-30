import { useEffect } from 'react';
import Chatbot from 'react-chatbot-kit';
import { useDispatch } from 'react-redux';
import { RootActions, useStudentDetails } from '../../../redux';
import chatBotActionProvider from './chatBotActionProvider';
import chatBotConfig from './chatBotConfig';
import chatBotMessageParser from './chatBotMessageParser';

const ChatHome = () => {
  const { disableActions } = useStudentDetails();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(RootActions.updateStudentDetails({ disableActions: false }));
  }, []);

  return (
    <div className="h-full  sm:w-8/12 w-full border rounded ">
      <Chatbot
        validator={(input) => {
          return !!input && !disableActions;
        }}
        config={chatBotConfig}
        messageParser={chatBotMessageParser}
        actionProvider={chatBotActionProvider}
      />
    </div>
  );
};

export default ChatHome;
