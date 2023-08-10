import type { Meta, StoryObj } from '@storybook/react';
import { ModalCard } from './modalcard';

const meta: Meta<typeof ModalCard> = {
  title: 'components/molecules/ModalCard',
  component: ModalCard,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ModalCard>;

export const Normal: Story = {
  args: {
    children: <>Click Me</>
  },
};