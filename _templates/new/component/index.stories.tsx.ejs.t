---
to: src/design/components/<%= atomic %>/<%= lowerName %>/<%= lowerName %>.stories.tsx
---

import { <%= pascalName %> } from './<%= lowerName %>';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof <%= pascalName %>> = {
  title: 'components/<%= atomic %>/<%= pascalName %>',
  component: <%= pascalName %>,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof <%= pascalName %>>;

export const Normal: Story = {
  args: {},
};