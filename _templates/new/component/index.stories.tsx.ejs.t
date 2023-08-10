---
to: src/design/components/<%= atomic %>/<%= lowerName %>/<%= lowerName %>.stories.tsx
---

import type { Meta, StoryObj } from '@storybook/react';
import { <%= pascalName %> } from './<%= lowerName %>';

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