import {
  ExpansionPanel,
  Sidebar,
  // @ts-ignore
} from '@chatscope/chat-ui-kit-react';
import React from 'react';
import './App.css';
import './styles.css';

interface Props {
  title: string;
  position: string;
  expanstionPanelData1?: any;
  expanstionPanelData2?: any;
  expanstionPanelData3?: any;
  expanstionPanelData4?: any;
  onClickExpanstionPanelData1?: () => void;
  onClickExpanstionPanelData2?: () => void;
  onClickExpanstionPanelData3?: () => void;
  onClickExpanstionPanelData4?: () => void;
}

export const SidebarExpansion: React.FC<Props> = (props: any): any => {
  return (
    <Sidebar position={!props.position ? 'right' : props.position}>
      <ExpansionPanel open title={!props.title ? 'Info' : props.title}>
        <p
          onClick={() => {
            props.onClickExpanstionPanelData1;
          }}
        >
          {!props.expanstionPanelData1
            ? 'dynamic data'
            : props.expanstionPanelData1}
        </p>
        <p
          onClick={() => {
            props.onClickExpanstionPanelData2;
          }}
        >
          {!props.expanstionPanelData2
            ? 'dynamic data'
            : props.expanstionPanelData2}
        </p>
        <p
          onClick={() => {
            props.onClickExpanstionPanelData3;
          }}
        >
          {!props.expanstionPanelData3
            ? 'dynamic data'
            : props.expanstionPanelData3}
        </p>
        <p
          onClick={() => {
            props.onClickExpanstionPanelData4;
          }}
        >
          {!props.expanstionPanelData4
            ? 'dynamic data'
            : props.expanstionPanelData4}
        </p>
      </ExpansionPanel>
    </Sidebar>
  );
};
