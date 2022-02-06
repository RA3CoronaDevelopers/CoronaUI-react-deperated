import React, { useContext, createContext } from 'react';

const AnimateContextInterop = createContext({
  show: false,
  timeout: 0.3,
});

export interface IAnimateContextProps {
  show?: boolean;
  timeout?: number;
  children?: any;
}

export const AnimateContext: React.FC<IAnimateContextProps> = ({
  show,
  timeout,
  children,
}) => {
  return (
    <>
      {Array.isArray(children) ? (
        children.map((children) => (
          <AnimateContextInterop.Provider
            value={{
              show: show || false,
              timeout: timeout || 0.3,
            }}
          >
            {children}
          </AnimateContextInterop.Provider>
        ))
      ) : (
        <AnimateContextInterop.Provider
          value={{
            show: show || false,
            timeout: timeout || 0.3,
          }}
        >
          {children}
        </AnimateContextInterop.Provider>
      )}
    </>
  );
};

export interface IAnimateOrderProps {
  enter?:
    | 'positive'
    | 'negative'
    | 'random'
    | number[]
    | ((components: React.ReactElement[]) => number[]);
  leave?:
    | 'positive'
    | 'negative'
    | 'random'
    | number[]
    | ((components: React.ReactElement[]) => number[]);
  enterTimeout?: number;
  leaveTimeout?: number;
  timeout?: number;
  children?: any;
}

export const AnimateOrder: React.FC<IAnimateOrderProps> = ({
  enter,
  leave,
  enterTimeout,
  leaveTimeout,
  timeout,
  children,
}) => {
  const { show, timeout: originTimeout } = useContext(AnimateContextInterop);

  return (
    <>
      {Array.isArray(children)
        ? children.map((children) => (
            <AnimateContextInterop.Provider
              value={{
                show,
                timeout: originTimeout + (show ? enterTimeout || timeout : 0),
              }}
            >
              {children}
            </AnimateContextInterop.Provider>
          ))
        : children}
    </>
  );
};

export interface IAnimateBaseProps {
  styles: {
    onEntering: string;
    hasEnter: string;
    onLeaving: string;
    hasLeave: string;
  };
  children?: any;
}

export const AnimateBase: React.FC<IAnimateBaseProps> = ({
  styles: { onEntering, hasEnter, onLeaving, hasLeave },
  children,
}) => {
  const { show, timeout } = useContext(AnimateContextInterop);

  return children;
};
