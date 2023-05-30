import React, { ReactElement } from 'react';
import { useDispatch } from 'react-redux';
import { RootActions } from '../../../redux';

interface ChatBotMessageParserProps {
  children: ReactElement[] | ReactElement;
  actions: any;
  state: any;
}

const ChatBotMessageParser = ({ children, actions }: ChatBotMessageParserProps): ReactElement => {
  const dispatch = useDispatch();

  const parseMessage = (message: string, state: any): void => {
    const messagesLength = state?.messages?.length - 1;

    if (state?.messages?.[messagesLength]?.actionType === 'GET_NAME') {
      actions?.handleAskAge();
      dispatch(RootActions.updateStudentDetails({ studentName: message, disableActions: false }));
    } else {
      actions?.handleDefaultMessage();
    }
  };

  return (
    <>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: (message: string) => {
            parseMessage(message, child?.props?.state);
          },
          actions,
        });
      })}
    </>
  );
};

export default ChatBotMessageParser;
