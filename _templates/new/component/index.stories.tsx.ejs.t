---
to: src/design/components/<%= atomic %>/<%= lowerName %>/<%= lowerName %>.stories.tsx
---

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { <%= pascalName %> } from './<%= lowerName %>';

export default {
  title: 'components/<%= atomic %>/<%= pascalName %>',
  component: <%= pascalName %>,
  argTypes: {
  },
} as ComponentMeta<typeof <%= pascalName %>>;

const Template: ComponentStory<typeof <%= pascalName %>> = args => <<%= pascalName %> {...args} />;

export const Normal = Template.bind({});
Normal.args = {

};