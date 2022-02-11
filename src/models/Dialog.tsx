import React from 'react';
import './dialog.scss';

export interface IDialogProps {
  background?: string | React.ReactNode;
  icon?: React.ReactNode;
  width?: string | number;
  height?: string | number;
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
  width,
  height,
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
  return (
    <>
      <svg width={0} height={0}>
        <defs>
          <clipPath id='dialog-border-line'>
            <rect x={0} y={0} width={36} height={10} />
            <rect x={0} y={0} width={10} height={36} />
            <rect x={0} y={26} width={82} height={10} />
            <rect x={26} y={0} width={10} height={82} />
            <rect x={0} y={46} width={102} height={10} />
            <rect x={46} y={0} width={10} height={102} />
            <rect x={0} y={46} width={10} height={36} />
            <rect x={0} y={72} width={36} height={10} />
            <rect x={46} y={0} width={36} height={10} />
            <rect x={72} y={0} width={10} height={36} />
            <rect x={0} y={92} width={56} height={10} />
            <rect x={92} y={0} width={10} height={56} />
            <rect x={0} y={92} width={10} height={36} />
            <rect x={92} y={0} width={36} height={10} />
            <rect x={0} y={118} width={16} height={10} />
            <rect x={118} y={0} width={10} height={16} />
            <rect x={10} y={118} width={10} height={36} />
            <rect x={118} y={10} width={36} height={10} />
            <rect x={0} y={144} width={16} height={10} />
            <rect x={144} y={0} width={10} height={16} />
            <rect x={0} y={144} width={10} height={100} />
            <rect x={144} y={0} width={100} height={10} />
          </clipPath>
        </defs>
      </svg>
      <div
        className='dialog-border-outside'
        style={
          {
            '--width': typeof width === 'number' ? `${width}px` : width,
            '--height': typeof height === 'number' ? `${height}px` : height,
          } as any
        }
      >
        <div className='dialog-border-top-left' />
        <div className='dialog-border-top-right' />
        <div className='dialog-border-bottom-left' />
        <div className='dialog-border-bottom-right' />
      </div>
    </>
  );
};
