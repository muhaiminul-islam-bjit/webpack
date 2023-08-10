import type { Meta, StoryObj } from '@storybook/react';

import { Modal } from './modal';

const meta: Meta<typeof Modal> = {
  title: 'components/molecules/Modal',
  component: Modal,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Normal: Story = {
  args: {},
};