import React from 'react';
import './footer.scss';

export interface IFooterProps {
  anchor?: 'top' | 'bottom' | 'left' | 'right';
  children?: any
}

export const Footer: React.FC<IFooterProps> = ({}) => {
  return <div />;
};
