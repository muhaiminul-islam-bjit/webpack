import type { Meta, StoryObj } from '@storybook/react';

import { Application } from './application';

const meta: Meta<typeof Application> = {
  title: 'components/molecules/Application',
  component: Application,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Application>;

export const Normal: Story = {
  args: {},
};