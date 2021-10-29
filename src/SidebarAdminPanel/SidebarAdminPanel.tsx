import {
  Sidebar,
  // @ts-ignore
} from '@chatscope/chat-ui-kit-react';
import React from 'react';
import './App.css';
import './styles.css';

interface Props {
  position?: string;
  data?: string;
}

export const SidebarAdminPanel: React.FC<Props> = (props: any): any => {
  return (
    <Sidebar position={!props.position ? 'right' : props.position}>
      {!props.data ? (
        <div style={{ position: 'relative', top: '10px' }}> Add data here </div>
      ) : (
        props.data
      )}
    </Sidebar>
  );
};
