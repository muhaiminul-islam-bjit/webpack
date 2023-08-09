import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './button';

export default {
  title: 'components/atoms/Button',
  component: Button,
  argTypes: {
  },
};

export const Primary = {
  args: {
    children: <>Click me</>
  },
};