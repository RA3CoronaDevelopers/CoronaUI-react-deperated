import React from 'react';
import './progress.scss';

export interface ILinearProgressBarProps {}

export const LinearProgressBar: React.FC<ILinearProgressBarProps> = ({}) => {
  return <div />;
};

export interface ICircularProgressIconProps {
  size?: string | number;
}

export const CircularProgressIcon: React.FC<ICircularProgressIconProps> = ({
  size,
}) => {
  return (
    <div
      className='circular-progress-component'
      style={{ '--size': typeof size === 'number' ? `${size}px` : size } as any}
    />
  );
};
