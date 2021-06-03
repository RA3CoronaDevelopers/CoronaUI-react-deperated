import React, { useRef, useEffect } from 'react';
import { sjs, attr } from 'slow-json-stringify';
import { generate } from 'shortid';

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

interface IStyles {
  border?: AroundBoxTemplate<IBorder>,
  borderRadius?: string | number | (string | number)[],
  margin?: AroundBoxTemplate<string | number>,
  padding?: AroundBoxTemplate<string | number>,
  display?: 'inline' | 'block' | 'none',
  overflow?: 'hidden' | 'visible' | 'scroll',
  textOverflow?: ITextOverflow | [ITextOverflow, ITextOverflow],
  flex?: IFlex,
  textAlign?: ITextAlign | ITextAlign[],
  textColor?: IColor,
  backgroundColor?: IColor,
  zIndex?: 'up' | 'down' | string | number,
  absolutePosition?: AroundBoxTemplate<string | number>,
  shadow?: number | 'none' | {
    type?: 'box' | 'drop-shadow',
    depth?: number,
    color?: IColor
  },
  width?: string | number,
  height?: string | number,
  filter?: IFilter,
  transform?: ITransformFunction | string,
  order?: number,
  flexGrow?: number,
  flexShrink?: number,
  flexAlignSelf?: 'start' | 'end' | 'center'
}

export interface IBox {
  componentType?: 'div' | 'span' | 'a' | 'p' | string,
  styles?: MediaQueryTemplate<IStyles>,
  children?: any
}

const stringify = (() => {
  function generateAroundBoxTemplateSchema(
    schema: { [key: string]: any } | any,
    expand?: boolean
  ) {
    const stringify = sjs({
      ...(expand ? schema : {}),
      all: schema,
      row: schema,
      column: schema,
      top: schema,
      bottom: schema,
      left: schema,
      right: schema
    });

    return attr('string', n => typeof n === 'object' ? stringify(n) : `${n}`);
  }

  const shadowSchemaStringify = sjs({
    type: attr('string'),
    depth: attr('number'),
    color: attr('string', n => Array.isArray(n)
      ? n.map(n => `${n}`).join(' ')
      : `${n}`)
  });

  const martixSchemaStringify = sjs({
    x: attr('string', n => `${n}`),
    y: attr('string', n => `${n}`),
    z: attr('string', n => `${n}`)
  });

  const transformFunctionSchemaStringify = sjs({
    matrix: attr('array'),
    matrix3d: attr('array'),
    perspective: attr('number'),
    rotate: attr('string', n => typeof n === 'object'
      ? martixSchemaStringify(n)
      : `${n}`),
    rotate3d: attr('string', n => n?.map(n => `${n}`).join(' ')),
    scale: attr('string', n => Array.isArray(n)
      ? n.map(n => `${n}`).join(' ')
      : n ? `${n}` : undefined),
    scale3d: attr('array'),
    skew: attr('string', n => Array.isArray(n)
      ? n.map(n => `${n}`).join(' ')
      : typeof n === 'object'
        ? martixSchemaStringify(n)
        : `${n}`),
    translate: attr('string', n => Array.isArray(n)
      ? n.map(n => `${n}`).join(' ')
      : typeof n === 'object'
        ? martixSchemaStringify(n)
        : `${n}`),
    translate3d: attr('string', n => Array.isArray(n)
      ? n.map(n => `${n}`).join(' ')
      : martixSchemaStringify(n)
    )
  });

  const globalSchema = {
    border: generateAroundBoxTemplateSchema({
      width: attr('string', n => `${n}`),
      style: attr('string'),
      color: attr('string')
    }, true),
    borderRadius: attr('string', n => Array.isArray(n)
      ? n.map(n => `${n}`).join(' ')
      : `${n}`),
    margin: generateAroundBoxTemplateSchema(attr('string', n => `${n}`)),
    padding: generateAroundBoxTemplateSchema(attr('string', n => `${n}`)),
    display: attr('string'),
    overflow: attr('string'),
    textOverflow: attr('string', n => Array.isArray(n)
      ? n.map(n => `${n}`).join(' ')
      : `${n}`),
    flex: {
      direction: attr('string'),
      wrap: attr('boolean'),
      reverse: attr('boolean'),
      justifyContent: attr('string'),
      alignItems: attr('string'),
      alignContent: attr('string')
    },
    textAlign: attr('string', n => Array.isArray(n)
      ? n.map(n => `${n}`).join(' ')
      : `${n}`),
    textColor: attr('string', n => Array.isArray(n)
      ? n.map(n => `${n}`).join(' ')
      : `${n}`),
    backgroundColor: attr('string', n => Array.isArray(n)
      ? n.map(n => `${n}`).join(' ')
      : `${n}`),
    zIndex: attr('string', n => `${n}`),
    absolutePosition: generateAroundBoxTemplateSchema(attr('string', n => `${n}`)),
    shadow: attr('string', n => typeof n === 'object'
      ? shadowSchemaStringify(n)
      : `${n}`),
    width: attr('string', n => `${n}`),
    height: attr('string', n => `${n}`),
    filter: {
      blur: attr('string', n => `${n}`),
      brightness: attr('string', n => `${n}`),
      contrast: attr('string', n => `${n}`),
      dropShadow: attr('string', n => `${n}`),
      grayScale: attr('string', n => `${n}`),
      hueRotate: attr('string', n => `${n}`),
      invert: attr('string', n => `${n}`),
      opacity: attr('string', n => `${n}`),
      saturate: attr('string', n => `${n}`),
      sepia: attr('string', n => `${n}`)
    },
    transform: attr('string', n => typeof n === 'object'
      ? transformFunctionSchemaStringify(n)
      : n),
    order: attr('number'),
    flexGrow: attr('number'),
    flexShrink: attr('number'),
    flexAlignSelf: attr('string')
  };

  return sjs({
    ...globalSchema,
    xs: globalSchema,
    sm: globalSchema,
    md: globalSchema,
    lg: globalSchema,
    xm: globalSchema
  });
})();

let cssIdMap: { [propsJsonStr: string]: string } = {};

export function Box({ componentType, styles, children }: IBox) {
  const style = useRef({});
  useEffect(() => {
    const key = stringify(styles);
    cssIdMap = {
      ...cssIdMap,
      [key]: cssIdMap[key] || generate()
    };

    if (!document.querySelector(`#css-corona-${cssIdMap[key]}`)) {
      const node = document.createElement('style');
      node.id = `css-corona-${cssIdMap[key]}`;
      const content = document.createTextNode(`
        .corona-${cssIdMap[key]} {
          ${''}
        }
      `)
      node.appendChild(content);
      document.head.appendChild(node);
    }
  });

  return React.createElement(componentType || 'div', {
    className: style.current
  }, children);
}