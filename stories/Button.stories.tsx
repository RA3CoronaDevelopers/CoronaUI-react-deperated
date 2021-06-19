import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Button, IButtonProps } from '../src/components/Button';

// tslint:disable-next-line: no-default-export
export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    label: { type: 'string', defaultValue: 'test' },
    color: { control: 'color', defaultValue: '#66ccff' },
  },
} as Meta;

export const Base: Story<IButtonProps> = args => <Button {...args} />;
