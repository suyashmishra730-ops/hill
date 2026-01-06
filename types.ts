import React from 'react';

interface IconifyIconProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
  icon: string;
  width?: string | number;
  height?: string | number;
  mode?: 'svg' | 'css';
  inline?: boolean;
  rotate?: string | number;
  flip?: string;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'iconify-icon': IconifyIconProps;
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'iconify-icon': IconifyIconProps;
    }
  }
}

export {};