import React from 'react';
import { css } from '@emotion/css';
import { Icon } from '@mdi/react';
import { mdiWindowMinimize, mdiWindowMaximize, mdiClose } from '@mdi/js';

export interface IDialogProps {
  bgColor?: string;
  icon?: React.Component;
  title?: string;
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
  children?: any;
}

export const Dialog: React.FC<IDialogProps> = ({
  bgColor = '#22272e',
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
  children,
}) => {
  // TODO - Use 'Box' component instead of 'div'.
  // TODO - Give the props that can set the basic styles into box components.
  return (
    <div
      className={css`
        width: 400px; /* These are temporarily values. */
        height: 300px;
        margin: 0px;
        padding: 0px;
        position: relative;
        background: ${bgColor};
      `}
    >
      {/* Title bar */}
      <div
        className={css`
          width: 100%;
          height: 32px;
          position: absolute;
          left: 0px;
          top: 0px;
          ${showTitleBar ? 'background: rgba(0, 0, 0, .2);' : ''}
        `}
      >
        {/* Drag support */}
        {canDrag && canDrag !== 'none' && (
          <div
            className={css`
              width: 100%;
              height: 100%;
              z-index: -1;
              ${canDrag === 'electron-support'
                ? '-webkit-app-region: drag;'
                : ''}
            `}
            onMouseDown={event => onDrag('down', event)}
            onMouseMove={event => onDrag('move', event)}
            onMouseUp={event => onDrag('up', event)}
          />
        )}
        {/* Content */}
        {icon && (
          <div
            className={css`
              width: 32px;
              height: 32px;
              position: absolute;
              left: 8px;
              top: 0px;
              display: flex;
              align-items: center;
              justify-content: center;
            `}
          >
            {icon}
          </div>
        )}
        {icon && (
          <div
            className={css`
              min-width: 16px;
              height: 32px;
              line-height: 32px;
              position: absolute;
              left: ${icon ? 40 : 8}px;
              top: 0px;
              font-size: 14px;
              user-select: none;
            `}
          >
            {title}
          </div>
        )}
        {/* Controllers */}
        <div
          className={css`
            min-width: 196px;
            height: 32px;
            position: absolute;
            right: 0px;
            top: 0px;
            -webkit-app-region: no-drag;
          `}
        >
          {/* Minimize */}
          {canMinimize && canMinimize !== 'none' && (
            <div
              className={css`
                width: 32px;
                height: 16px;
                margin: 8px 16px;
                position: absolute;
                right: ${(canMaximize && canMaximize !== 'none' ? 64 : 0) +
                (canClose && canClose !== 'none' ? 64 : 0)}px;
                top: 0px;
                display: flex;
                align-items: center;
                justify-content: center;
                background: transparent;
                border-radius: 4px;
                transition: background 0.3s;
                ${canMinimize !== 'disable' &&
                `&:hover {
              background: rgba(255, 255, 255, .2);
            }
            &:active {
              background: rgba(255, 255, 255, .4);
            }
            `}
              `}
              onClick={() =>
                canMinimize && canMinimize !== 'disable' && onMinimize()
              }
            >
              <Icon
                path={mdiWindowMinimize}
                size={0.5}
                color={`rgba(255, 255, 255, ${
                  canMinimize === 'disable' ? '.2' : '.6'
                })`}
              />
            </div>
          )}
          {/* Maximize */}
          {canMaximize && canMaximize !== 'none' && (
            <div
              className={css`
                width: 32px;
                height: 16px;
                margin: 8px 16px;
                position: absolute;
                right: ${canClose && canClose !== 'none' ? 64 : 0}px;
                top: 0px;
                display: flex;
                align-items: center;
                justify-content: center;
                ${canMaximize !== 'disable' &&
                `&:hover {
              background: rgba(255, 255, 255, .2);
            }
            &:active {
              background: rgba(255, 255, 255, .4);
            }
            `}
              `}
              onClick={() =>
                canMaximize && canMaximize !== 'disable' && onMaximize()
              }
            >
              <Icon
                path={mdiWindowMaximize}
                size={0.5}
                color={`rgba(255, 255, 255, ${
                  canMaximize === 'disable' ? '.2' : '.6'
                })`}
              />
            </div>
          )}
          {/* Close */}
          {canClose && canClose !== 'none' && (
            <div
              className={css`
                width: 32px;
                height: 16px;
                margin: 8px 16px;
                position: absolute;
                right: 0px;
                top: 0px;
                display: flex;
                align-items: center;
                justify-content: center;
                background: transparent;
                border-radius: 4px;
                transition: background 0.3s;
                ${canClose !== 'disable' &&
                `&:hover {
              background: rgba(255, 255, 255, .2);
            }
            &:active {
              background: rgba(255, 255, 255, .4);
            }
            `}
              `}
              onClick={() => canClose && canClose !== 'disable' && onClose()}
            >
              <Icon
                path={mdiClose}
                size={0.5}
                color={`rgba(255, 255, 255, ${
                  canClose === 'disable' ? '.2' : '.6'
                })`}
              />
            </div>
          )}
        </div>
      </div>
      {/* Content */}
      <div
        className={css`
          width: 100%;
          height: calc(100% - 32px);
          position: absolute;
          right: 0px;
          bottom: 0px;
        `}
      >
        {children}
      </div>
    </div>
  );
};
