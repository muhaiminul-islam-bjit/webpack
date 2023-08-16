import type { Meta, StoryObj } from '@storybook/react';

import { Link } from './link';

const meta: Meta<typeof Link> = {
  title: 'components/atoms/Link',
  component: Link,
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Link>;

export const Normal: Story = {
  args: {
    href: 'www.google.com',
    children: 'CSS animation',
  },
};
