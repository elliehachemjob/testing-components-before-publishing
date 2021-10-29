// @ts-ignore
import { VoiceCallButton } from '@chatscope/chat-ui-kit-react';
import React from 'react';
import './App.css';
import './styles.css';

interface Props {
  onClick: () => void;
}

export const VoiceCall: React.FC<Props> = (props: any): any => {
  return (
    <VoiceCallButton
      onClick={() => {
        props.onClick();
      }}
    />
  );
};
