import React from 'react';
import { css } from '@emotion/css';

export interface IButtonProps {
  color?: string,
  label?: string;
  onClick?: () => any;
}

export const Button: React.FC<IButtonProps> = ({
  color = '#000',
  label = '',
  onClick = () => { return; }
}) => {
  return (
    <button
      className={css`
        height: 32px;
        padding: 2px 8px;
        border: 1px solid ${color};
        border-radius: 4px;
        font-size: 16px;
        background: transparent;
        transition: background .2s;
        &:hover {
          background: rgba(0, 0, 0, 0.1);
        }
        &:active {
          background: rgba(0, 0, 0, 0.2);
        }
      `}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
