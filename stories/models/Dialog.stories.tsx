import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Dialog, IDialogProps } from '../../src/models/dialog';

// tslint:disable-next-line: no-default-export
export default {
  title: 'Models/Dialog',
  component: Dialog,
  argTypes: {
    background: { control: 'color', defaultValue: '#22272e' },
    title: { type: 'string', required: false },
  },
} as Meta;

export const Base: Story<IDialogProps> = args => <Dialog {...args} />;
