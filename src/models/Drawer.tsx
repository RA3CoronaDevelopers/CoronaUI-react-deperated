import React from 'react';
import './drawer.scss';

export interface IDrawerProps {
  anchor?: 'top' | 'bottom' | 'left' | 'right';
  variant?: 'permanent' | 'persistent' | 'temporary';
}

export const Drawer: React.FC<IDrawerProps> = ({}) => {
  return <div />;
};
