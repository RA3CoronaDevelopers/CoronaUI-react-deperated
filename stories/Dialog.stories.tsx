import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Dialog, IDialogProps } from '../src/models/Dialog';
import { Icon } from '@mdi/react';
import { mdiAccountCircleOutline } from '@mdi/js';

// tslint:disable-next-line: no-default-export
export default {
  title: 'Models/Dialog',
  component: Dialog,
  argTypes: {
    bgColor: { control: 'color', defaultValue: '#22272e' },
    title: { type: 'string', required: false },
    titleColor: { control: 'color', defaultValue: '#fff' },
    showTitleBar: { control: 'boolean', defaultValue: true },
    canMinimize: {
      type: 'radio',
      defaultValue: 'show',
      options: [true, false, 'disable', 'show', 'none'],
    },
    canMaximize: {
      type: 'radio',
      defaultValue: 'show',
      options: [true, false, 'disable', 'show', 'none'],
    },
    canClose: {
      type: 'radio',
      defaultValue: 'show',
      options: [true, false, 'disable', 'show', 'none'],
    },
  },
} as Meta;

export const Base: Story<IDialogProps> = args => <Dialog {...args} />;

export const WithIcon: Story<IDialogProps> = args => (
  <Dialog
    icon={<Icon path={mdiAccountCircleOutline} size={1} color='#fff' />}
    {...args}
  />
);
