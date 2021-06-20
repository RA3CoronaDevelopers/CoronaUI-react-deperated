import React from 'react';

export interface ITabsProps {
  anchor?: 'top' | 'bottom' | 'left' | 'right';
  variant?: 'permanent' | 'persistent' | 'temporary';
}

export const Tabs: React.FC<ITabsProps> = ({}) => {
  return <div />;
};
