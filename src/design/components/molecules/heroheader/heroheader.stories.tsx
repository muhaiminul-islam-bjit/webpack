import type { Meta, StoryObj } from '@storybook/react';

import { HeroHeader } from './heroheader';

const meta: Meta<typeof HeroHeader> = {
  title: 'components/molecules/HeroHeader',
  component: HeroHeader,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof HeroHeader>;

export const Normal: Story = {
  args: {},
};
