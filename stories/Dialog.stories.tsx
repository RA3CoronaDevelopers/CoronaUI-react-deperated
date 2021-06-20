import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Dialog, IDialogProps } from '../src/models/Dialog';

// tslint:disable-next-line: no-default-export
export default {
  title: 'Models/Dialog',
  component: Dialog,
  argTypes: {
    bgColor: { control: 'color' },
    title: { type: 'string', required: false },
    showTitleBar: { control: 'boolean', defaultValue: true },
    canMinimize: {
      control: 'radio',
      defaultValue: 'show',
      options: [true, false, 'disable', 'show', 'none'],
    },
    canMaximize: {
      control: 'radio',
      defaultValue: 'show',
      options: [true, false, 'disable', 'show', 'none'],
    },
    canClose: {
      control: 'radio',
      defaultValue: 'show',
      options: [true, false, 'disable', 'show', 'none'],
    },
  },
} as Meta;

export const Base: Story<IDialogProps> = args => <Dialog {...args} />;
