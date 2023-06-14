import { Meta, StoryObj } from '@storybook/react'
import { Input } from './Input'

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  args: {
    width: 200,
  },
}

export default meta

type Story = StoryObj<typeof Input>

export const Text: Story = {
  args: {
    type: 'text',
  },
}

export const Search: Story = {
  args: {
    type: 'text',
    isSearch: true,
    placeholder: 'Search',
  },
}

export const Error: Story = {
  args: {
    ...Search.args,
    error: `${Search.args?.placeholder} is Required!`,
  },
}
