import type { Meta, StoryObj } from '@storybook/react';

import { Annotation } from './annotation';

const meta: Meta<typeof Annotation> = {
  title: 'components/atoms/Annotation',
  component: Annotation,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Annotation>;

export const Normal: Story = {
  args: {},
};