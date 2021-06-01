import React from 'react';
import { css } from '@emotion/css';

type AroundBoxTemplate<T> = T | {
  all?: T,
  row?: T,
  column?: T,
  top?: T,
  bottom?: T,
  left?: T,
  right?: T
}

type MediaQueryTemplate<T> = T | {
  xs?: T,
  sm?: T,
  md?: T,
  lg?: T,
  xm?: T
}

type IColor = string
  | [number, number, number] | [number, number, number, number]
  | [string, string, string] | [string, string, string, number]

type IAngel = string | number

type IBorderStyle = 'none' | 'hidden'
  | 'dotted' | 'dashed' | 'solid' | 'double'
  | 'groove' | 'ridge' | 'inset' | 'outset'

type IBorder = string | number | {
  width?: string | number,
  style?: IBorderStyle,
  color?: IColor
}

type ITextAlign = 'left' | 'right' | 'start' | 'end' | 'center'
  | 'left-rtl' | 'right-rtl'
  | 'justify' | 'justify-all'
  | 'match-parent' | string;

type ITextOverflow = 'clip' | 'ellipsis' | 'fade' | string

interface IFlex {
  direction?: 'row' | 'column',
  wrap?: boolean,
  reverse?: boolean,
  justifyContent?: 'start' | 'end' | 'center',
  alignItems?: 'start' | 'end' | 'center',
  alignContent?: 'start' | 'end'
}

interface IFilter {
  blur?: string | number,
  brightness?: string | number,
  contrast?: string | number,
  dropShadow?: string | number,
  grayScale?: string | number,
  hueRotate?: string | number,
  invert?: string | number,
  opacity?: string | number,
  saturate?: string | number,
  sepia?: string | number
}

type ITransformFunction = string | {
  matrix?: [number, number, number, number, number, number],
  matrix3d?: [
    number, number, number, number,
    number, number, number, number,
    number, number, number, number,
    number, number, number, number
  ],
  perspective?: number,
  rotate?: IAngel | {
    x?: IAngel,
    y?: IAngel,
    z?: IAngel
  },
  rotate3d?: [number, number, number, IAngel],
  scale?: string | number | {
    x?: string | number,
    y?: string | number,
    z?: string | number
  },
  scale3d?: [number, number, number],
  skew?: string | number | [string | number, string | number] | {
    x?: string | number,
    y?: string | number
  },
  translate?: string | number | [string | number, string | number] | {
    x?: string | number,
    y?: string | number
  },
  translate3d?: [string | number, string | number, string | number] | {
    x?: string | number,
    y?: string | number,
    z?: string | number
  }
}

export interface IBox {
  componentType?: 'div' | 'span' | 'a' | 'p' | string,
  styles?: {
    border?: MediaQueryTemplate<AroundBoxTemplate<IBorder>>,
    margin?: MediaQueryTemplate<AroundBoxTemplate<string | number>>,
    padding?: MediaQueryTemplate<AroundBoxTemplate<string | number>>,
    display?: MediaQueryTemplate<'inline' | 'block' | 'none'>,
    overflow?: MediaQueryTemplate<'hidden' | 'visible' | 'scroll'>,
    textOverflow?: MediaQueryTemplate<ITextOverflow | [ITextOverflow, ITextOverflow]>,
    flex?: MediaQueryTemplate<IFlex>,
    textAlign?: MediaQueryTemplate<ITextAlign | ITextAlign[]>
    textColor?: MediaQueryTemplate<IColor>,
    backgroundColor?: MediaQueryTemplate<IColor>,
    zIndex?: 'up' | 'down' | string | number,
    absolutePosition?: MediaQueryTemplate<AroundBoxTemplate<string | number>>,
    shadow?: MediaQueryTemplate<number | 'none' | {
      type?: 'box' | 'drop-shadow',
      depth?: number,
      color?: IColor
    }>,
    width?: MediaQueryTemplate<string | number>,
    height?: MediaQueryTemplate<string | number>,
    filter?: MediaQueryTemplate<IFilter>,
    transform?: MediaQueryTemplate<ITransformFunction | string>
  },
  order?: number,
  flexGrow?: number,
  flexShrink?: number,
  flexAlignSelf?: 'start' | 'end' | 'center',
  children?: any
}

export function Box({ componentType, styles, children, ...props }: IBox) {
  return React.createElement(componentType || 'div', {
    className: css`
    `
  }, children);
}