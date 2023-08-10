import type { Meta, StoryObj } from '@storybook/react';

import { Calendar } from './calendar';

const meta: Meta<typeof Calendar> = {
  title: 'components/atoms/Calendar',
  component: Calendar,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Calendar>;

export const Normal: Story = {
  args: {},
};