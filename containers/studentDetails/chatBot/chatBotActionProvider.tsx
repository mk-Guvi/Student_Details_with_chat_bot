import React, { ReactElement } from 'react';
import { defaultMessages } from './chatBotConfig';

interface chatBotActionProviderProps {
  createChatBotMessage: any;
  setState: any;
  children: ReactElement[] | ReactElement;
}

const chatBotActionProvider = ({ createChatBotMessage, setState, children }: chatBotActionProviderProps): ReactElement => {
  const handleAskName = () => {
    const botMessage = createChatBotMessage(' Enter your Name', {
      actionType: 'GET_NAME',
    });

    setState((prev: any) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleAskAge = () => {
    const botMessage = createChatBotMessage('Enter Your Age', {
      actionType: 'GET_AGE',
      withAvatar: true,
      widget: 'ageSelection',
    });

    setState((prev: any) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleDefaultMessage = () => {
    setState((prev: any) => ({
      ...prev,
      messages: [...prev.messages, ...defaultMessages()],
    }));
  };

  const updateAge = (value: string) => {
    const botMessage = createChatBotMessage('Thank you. In 5 seconds, bot will exit', {
      actionType: 'AGE',
      withAvatar: true,
      widget: 'widgetAfterAgeSelected',
    });

    setState((prev: any) => ({
      ...prev,
      age: value,
      messages: [...prev.messages, botMessage],
    }));
  };
  return (
    <>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleAskName,
            handleAskAge,
            handleDefaultMessage,
            updateAge,
          },
        });
      })}
    </>
  );
};

export default chatBotActionProvider;
