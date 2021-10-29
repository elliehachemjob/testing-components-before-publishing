// @ts-ignore
import { VideoCallButton } from '@chatscope/chat-ui-kit-react';
import React from 'react';
import './App.css';
import './styles.css';

interface Props {
  onClick: () => void;
}

export const VideoCall: React.FC<Props> = (props: any): any => {
  return (
    <VideoCallButton
      onClick={() => {
        props.onClick();
      }}
    />
  );
};
