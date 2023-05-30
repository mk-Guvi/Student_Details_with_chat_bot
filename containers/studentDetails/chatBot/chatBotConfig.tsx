import { createChatBotMessage } from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import IConfig from 'react-chatbot-kit/build/src/interfaces/IConfig';
import { AgeOption, BotAvatar, FinalStep, InitialButton } from './components';

export const defaultMessages = () => {
  return [
    createChatBotMessage(
      ` Hello, Welcome to student info system!
  `,
      {
        widget: 'defaultWidget',
        delay: 500,
      },
    ),
  ];
};
const chatBotConfig: IConfig = {
  initialMessages: [...defaultMessages()],

  customComponents: {
    botAvatar: (props: any) => <BotAvatar {...props} />,
  },
  customStyles: {},
  state: {
    age: null,
  },
  widgets: [
    {
      widgetName: 'ageSelection',
      widgetFunc: (props: any) => <AgeOption {...props} />,
      mapStateToProps: [],
      props: {},
    },
    {
      widgetName: 'widgetAfterAgeSelected',
      widgetFunc: (props: any) => <FinalStep {...props} />,
      mapStateToProps: [],
      props: {},
    },
    {
      widgetName: 'defaultWidget',
      widgetFunc: (props: any) => <InitialButton {...props} />,
      mapStateToProps: [],
      props: {},
    },
  ],
  customMessages: {},
};

export default chatBotConfig;
