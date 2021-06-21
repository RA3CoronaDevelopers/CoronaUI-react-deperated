import React from 'react';
import { css, cx } from '@emotion/css';

export interface IButtonProps {
  color?: string;
  label?: string;
  labelColor?: string;
  variant?: 'filled' | 'outlined' | 'void';
  onClick?: () => any;
  className?: string;
  children?: any;
}

export const Button: React.FC<IButtonProps> = ({
  color = '#777',
  label,
  labelColor = '#000',
  variant = 'filled',
  onClick = () => {
    return;
  },
  className,
  children,
}) => {
  return (
    <div
      className={cx(
        css`
          width: min-content;
          height: 32px;
          padding: 2px 8px;
          position: relative;
          border-radius: 4px;
          ${variant === 'outlined' ? `outline: 1px solid ${color};` : ''}
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          font-family: sans-serif;
          color: ${labelColor};
          user-select: none;
          background: transparent;
          transition: background 0.2s;
          &:hover {
            background: rgba(0, 0, 0, 0.1);
          }
          &:active {
            background: rgba(0, 0, 0, 0.2);
          }
          ${variant === 'filled'
            ? `&::after {
          content: '';
          position: absolute;
          top: 0px;
          bottom: 0px;
          left: 0px;
          right: 0px;
          border-radius: 4px;
          background: ${color};
          opacity: 0.2;
        }`
            : ''}
        `,
        className
      )}
      onClick={onClick}
    >
      {children}
      <div
        className={css`
          margin: 0px 4px;
        `}
      >
        {label}
      </div>
    </div>
  );
};
