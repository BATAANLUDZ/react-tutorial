import { Header } from './Header'
import { Meta, StoryObj } from '@storybook/react'
import { MemoryRouter } from 'react-router-dom'

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof Header>

export const Default: Story = {
  args: {
    userName: 'Test User',
    menus: [
      { name: 'Time IN/OUT', path: '/' },
      { name: 'Calendar', path: '/asd' },
      { name: 'Leave Application', path: '/asd1' },
      { name: 'Leave Summary', path: '/asd2' },
    ],
  },
}
