import React from 'react';
import './tabs.scss';

export interface ITabsProps {
  anchor?: 'top' | 'bottom' | 'left' | 'right';
  variant?: 'permanent' | 'persistent' | 'temporary';
}

export const Tabs: React.FC<ITabsProps> = ({}) => {
  return <div />;
};
