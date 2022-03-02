import React from 'react';
import './breadCrumb.scss';

export interface IBreadCrumbProps {
  anchor?: 'top' | 'bottom' | 'left' | 'right';
  children?: any
}

export const BreadCrumb: React.FC<IBreadCrumbProps> = ({}) => {
  return <div />;
};
