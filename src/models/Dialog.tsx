import React from 'react';
import './dialog.scss';

export interface IDialogProps {
  background?: string | React.ReactNode;
  icon?: React.ReactNode;
  title?: string;
  titleColor?: string;
  showTitleBar?: boolean;
  canMinimize?: boolean | 'disable' | 'show' | 'none';
  canMaximize?: boolean | 'disable' | 'show' | 'none';
  canClose?: boolean | 'disable' | 'show' | 'none';
  canDrag?: boolean | 'electron-support' | 'only-dom' | 'none';
  onMinimize?: () => any;
  onMaximize?: () => any;
  onClose?: () => any;
  onDrag?: (
    type: 'down' | 'move' | 'up',
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => any;
  className?: string;
  children?: any;
}

export const Dialog: React.FC<IDialogProps> = ({
  background = '#22272e',
  icon,
  title = '',
  showTitleBar = true,
  canMinimize = false,
  canMaximize = false,
  canClose = true,
  canDrag = 'electron-support',
  onMinimize = () => {
    return;
  },
  onMaximize = () => {
    return;
  },
  onClose = () => {
    return;
  },
  onDrag = () => {
    return;
  },
  className,
  children,
}) => {
  return <></>;
};
