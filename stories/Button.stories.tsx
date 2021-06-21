import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Button, IButtonProps } from '../src/components/Button';
import { Icon } from '@mdi/react';
import { mdiAccountCircleOutline } from '@mdi/js';

// tslint:disable-next-line: no-default-export
export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    label: { type: 'string', defaultValue: 'test' },
    color: { control: 'color', defaultValue: '#777' },
    labelColor: { control: 'color', defaultValue: '#000' },
    variant: {
      type: 'radio',
      defaultValue: 'filled',
      options: ['filled', 'outlined', 'void'],
    },
  },
} as Meta;

export const Base: Story<IButtonProps> = args => <Button {...args} />;

export const WithIcon: Story<IButtonProps> = args => (
  <Button {...args}>
    <Icon path={mdiAccountCircleOutline} size={1} color='#000' />
  </Button>
);
