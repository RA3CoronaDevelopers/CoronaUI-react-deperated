import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Dialog, IDialogProps } from '../src/models/Dialog';
import { css } from '@emotion/css';

// tslint:disable-next-line: no-default-export
export default {
  title: 'Models/Dialog',
  component: Dialog,
  argTypes: {
    bgColor: { control: 'color' },
  },
} as Meta;

export const Base: Story<IDialogProps> = args => <Dialog {...args} />;
