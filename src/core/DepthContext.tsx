import React, { createContext, useContext } from 'react';
import { css } from '@emotion/css';

const DepthContextOrigin = createContext(0);

export interface IUpperDepth {
  children?: any
}


export interface ILowerDepth {
  children?: any
}

export const UpperDepth: React.FC<IUpperDepth> = ({ children }) => {
  const rootDepth = useContext(DepthContextOrigin);

  return <DepthContextOrigin.Provider value={rootDepth + 1}>
    <div className={css`
      z-index: ${rootDepth + 1}
    `}>
      {children}
    </div>
  </DepthContextOrigin.Provider>;
}

export const LowerDepth: React.FC<IUpperDepth> = ({ children }) => {
  const rootDepth = useContext(DepthContextOrigin);

  return <DepthContextOrigin.Provider value={rootDepth - 1}>
    <div className={css`
      z-index: ${rootDepth - 1}
    `}>
      {children}
    </div>
  </DepthContextOrigin.Provider>;
}

export interface IDepthContext {
  children?: (React.ReactElement<IDepthItem> | any)[]
}

export interface IDepthItem {
  key: string,
  children?: any
}

export const DepthContext: React.FC<IDepthContext> = ({ children }) => {
  const rootDepth = useContext(DepthContextOrigin);

  return children.reduce((Prev, component) => ({ children }) => <Prev>
    <UpperDepth>
      {component}
      {children}
    </UpperDepth>
  </Prev>, ({ children }) => <DepthContextOrigin.Provider value={rootDepth}>
    {children}
  </DepthContextOrigin.Provider>)({ children: <div /> });
}

export const DepthItem: React.FC<IDepthItem> = ({ children }) => {
  return children;
}
