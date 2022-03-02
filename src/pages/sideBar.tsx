import React from 'react';
import './sideBar.scss';

export interface ISideBarProps {
  anchor?: 'top' | 'bottom' | 'left' | 'right';
  children?: any
}

export const SideBar: React.FC<ISideBarProps> = ({}) => {
  return <div />;
};
