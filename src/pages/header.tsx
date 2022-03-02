import React from 'react';
import './header.scss';

export interface IHeaderProps {
  anchor?: 'top' | 'bottom' | 'left' | 'right';
  children?: any
}

export const Header: React.FC<IHeaderProps> = ({}) => {
  return <div />;
};
